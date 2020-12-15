import React, { useState, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import API from '../globals/API';
import Constants from '../globals/Constants';
import * as actionTypes from '../store/actions/actionTypes';

import Loader from '../components/Loader';
import RegisterHeader from '../components/Header';
import UserHeader from '../components/Header2';
import CompanyHeader from '../components/HeaderCompany';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const RegisterCompany = lazy(() => import('../pages/RegisterCompany'));
const PasswordForgot = lazy(() => import('../pages/PasswordForgot'));

// User
const UStep1 = lazy(() => import('../pages/User/Step1'));
const UStep2 = lazy(() => import('../pages/User/Step2'));
const Profile = lazy(() => import('../pages/User/Profile'));
const Invitations = lazy(() => import('../pages/User/Invitations'));

// Company
const COffers = lazy(() => import('../pages/Company/Offers'));
const CProfile = lazy(() => import('../pages/Company/Profile'));
const Search = lazy(() => import('../pages/Company/Search'));
const CStep1 = lazy(() => import('../pages/Company/Step1'));

const VerifyScreen = lazy(() => import('../pages/VerifyScreen'));
const RejectScreen = lazy(() => import('../pages/RejectScreen'));

// Admin
const Admin = lazy(() => import('../pages/Admin'));

const useStyles = makeStyles((theme) => ({
  rootCompany: {
    backgroundColor: '#fff',
  },
  rootCompany1: {
    paddingTop: 90,
    paddingLeft: 90,
    minHeight: '100vh',
    backgroundColor: '#F5F7FB',
  },
}));

const Chancee = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    checkLogin();
    // eslint-disable-next-line
  }, []);

  const checkLogin = async () => {
    try {
      const token = localStorage.getItem('chanceeToken');
      if (!token) {
        setLoading(false);
        return;
      } else {
        const data = await API({
          uri: Constants.PROFILE,
          token: token,
        });
        dispatch({
          type: actionTypes.LOGIN,
          user: data.user,
          token: token,
        });
        setLoading(false);
      }
    } catch (err) {
      localStorage.removeItem('chanceeToken');
      setLoading(false);
    }
  };

  return loading ? (
    <Loader.CenterProgress color="primary" />
  ) : store.auth ? (
    store.user.role === 'company' ? (
      store.user.status !== 'active' ? (
        <div className={classes.rootCompany}>
          <RegisterHeader />
          <Suspense fallback={<Loader.CenterProgress color="primary" />}>
            <Switch>
              {/* Company Profile at step 1 */}
              {store.user.status === 'pending' && (
                <Route exact path="/" component={CStep1} />
              )}
              {/* Company Profile to verified */}
              {store.user.status === 'step1' && (
                <Route exact path="/" component={VerifyScreen} />
              )}
              {/* Company Profile to rejected */}
              {store.user.status === 'rejected' && (
                <Route exact path="/" component={RejectScreen} />
              )}
              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
        </div>
      ) : (
        <div className={classes.rootCompany1}>
          <CompanyHeader />
          <Suspense fallback={<Loader.CenterProgress color="primary" />}>
            <Switch>
              {/* Company Active */}
              <Route exact path="/" component={COffers} />
              <Route exact path="/profile" component={CProfile} />
              <Route path="/search" component={Search} />
              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
        </div>
      )
    ) : store.user.role === 'user' ? (
      store.user.status !== 'active' ? (
        <div className={classes.rootCompany}>
          <RegisterHeader />
          <Suspense
            fallback={
              <Loader.CenterProgress
                color="primary"
                style={{ backgroundColor: '#F5F7FB' }}
              />
            }
          >
            <Switch>
              {/* User Profile at step 1 */}
              {store.user.status === 'pending' && (
                <Route exact path="/" component={UStep1} />
              )}
              {/* User Profile to verified */}
              {store.user.status === 'step1' && (
                <Route exact path="/" component={VerifyScreen} />
              )}
              {/* User Profile to rejected */}
              {store.user.status === 'rejected' && (
                <Route exact path="/" component={RejectScreen} />
              )}
              {/* User Profile at step 2 */}
              {store.user.status === 'verified' && (
                <Route exact path="/" component={UStep2} />
              )}
              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
        </div>
      ) : (
        <div className={classes.rootCompany1}>
          <UserHeader />
          <Suspense
            fallback={
              <Loader.CenterProgress
                color="primary"
                style={{ backgroundColor: '#F5F7FB' }}
              />
            }
          >
            <Switch>
              {/* User Active */}
              <Route exact path="/" component={Profile} />
              <Route exact path="/invitations" component={Invitations} />
              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
        </div>
      )
    ) : (
      <Suspense
        fallback={
          <Loader.CenterProgress
            color="primary"
            style={{ backgroundColor: '#F5F7FB' }}
          />
        }
      >
        <Switch>
          {/* Admin Routes */}
          <Route path="/" component={Admin} />
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    )
  ) : (
    <Suspense
      fallback={
        <Loader.CenterProgress
          color="primary"
          style={{ backgroundColor: '#F5F7FB' }}
        />
      }
    >
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register-company" component={RegisterCompany} />
        <Route exact path="/password-forgot" component={PasswordForgot} />
        <Redirect from="*" to="/" />
      </Switch>
    </Suspense>
  );
};

export default Chancee;
