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
    <Switch>
      <Route exact path="/" component={Offers} />
      <Route exact path="/invitations" component={Invitations} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/step-1" component={UStep1} />
      <Route exact path="/step-2" component={UStep2} />
      <Redirect from="*" to="/" />
    </Switch>
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
