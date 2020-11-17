import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as actionTypes from "../store/actions/actionTypes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterCompany from "../pages/RegisterCompany";
import PasswordForgot from "../pages/PasswordForgot";

// User
import UStep1 from "../pages/User/Step1";
import UStep2 from "../pages/User/Step2";
import Profile from "../pages/User/Profile";
import Invitations from "../pages/User/Invitations";
import Offers from "../pages/User/Offers";

// Company
import COffers from "../pages/Company/Offers";
import CProfile from "../pages/Company/Profile";
import Search from "../pages/Company/Search";
import CStep1 from "../pages/Company/Step1";

const LFS = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    checkLogin();
    // eslint-disable-next-line
  }, []);

  const checkLogin = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      if (!userId || !token) {
        setLoading(false);
        return;
      }
      // const response = await fetch(
      //   `${process.env.REACT_APP_SERVER_URL}/profile`,
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     redirect: "follow",
      //   }
      // );
      // if (!response.ok) throw response;
      // const data = await response.json();
      dispatch({
        type: actionTypes.LOGIN,
        user: "",
        token: "",
      });
      setLoading(false);
    } catch (err) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      console.log(err);
    }
  };

  return loading ? (
    <div>Loading...</div>
  ) : store.auth ? (
    store.user.role === "company" ? (
      store.user.status === "active" ? (
        <Switch>
          <Route exact path="/" component={COffers} />
          <Route exact path="/profile" component={CProfile} />
          <Route exact path="/search" component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={CStep1} />
          <Redirect from="*" to="/" />
        </Switch>
      )
    ) : store.user.status === "active" ? (
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/offers" component={Offers} />
        <Route exact path="/invitations" component={Invitations} />
        <Redirect from="*" to="/" />
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/" component={UStep1} />
        <Route exact path="/step-2" component={UStep2} />
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
