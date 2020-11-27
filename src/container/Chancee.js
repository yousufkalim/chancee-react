import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import API from '../globals/API';
import Constants from '../globals/Constants';
import * as actionTypes from '../store/actions/actionTypes';

import Loader from '../components/Loader';

import Login from '../pages/Login';
import Register from '../pages/Register';
import RegisterCompany from '../pages/RegisterCompany';
import PasswordForgot from '../pages/PasswordForgot';

// User
import UStep1 from '../pages/User/Step1';
import UStep2 from '../pages/User/Step2';
import Profile from '../pages/User/Profile';
import Invitations from '../pages/User/Invitations';
import Offers from '../pages/User/Offers';

// Company
import COffers from '../pages/Company/Offers';
import CProfile from '../pages/Company/Profile';
import Search from '../pages/Company/Search';
import CStep1 from '../pages/Company/Step1';

import VerifyScreen from '../pages/VerifyScreen';

const LFS = () => {
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
    <Loader.CenterProgress />
  ) : store.auth ? (
    store.user.role === 'company' ? (
      store.user.status === 'active' ? (
        <Switch>
          <Route exact path="/" component={COffers} />
          <Route exact path="/profile" component={CProfile} />
          <Route path="/search" component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={CStep1} />
          <Redirect from="*" to="/" />
        </Switch>
      )
    ) : store.user.status === 'pending' ? (
      <Switch>
        {/* User Profile at step 1 */}
        <Route exact path="/" component={UStep1} />
        <Redirect from="*" to="/" />
      </Switch>
    ) : store.user.status === 'step1' ? (
      <Switch>
        {/* User Profile to verified */}
        <Route exact path="/" component={VerifyScreen} />
        <Redirect from="*" to="/" />
      </Switch>
    ) : store.user.status === 'verified' ? (
      <Switch>
        {/* User Profile at step 2 */}
        <Route exact path="/" component={UStep2} />
        <Redirect from="*" to="/" />
      </Switch>
    ) : (
      <Switch>
        {/* User Active */}
        <Route exact path="/" component={Profile} />
        <Route exact path="/offers" component={Offers} />
        <Route exact path="/invitations" component={Invitations} />
        <Redirect from="*" to="/" />
      </Switch>
    )
  ) : (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register-company" component={RegisterCompany} />
      <Route exact path="/password-forgot" component={PasswordForgot} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default LFS;
