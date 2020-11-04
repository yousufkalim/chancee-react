import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import * as actionTypes from "../store/actions/actionTypes";
import LoginBG from "../assets/images/login.png";
import Input from "../components/Input";
import Button from "../components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${LoginBG})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  form: {
    width: 280,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formItem: {
    width: "100%",
    margin: "10px 0",
  },
  submitButton: {
    width: "100%",
    margin: "30px 0 20px 0",
  },
  forgotText: {
    color: "#7D76BA",
    fontSize: 10,
    margin: "5px 0",
  },
  forgotTextWhite: {
    color: "#FFF",
    fontSize: 10,
    margin: "5px 0",
  },
  forgotRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default function Login(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onSubmit = () => {
    dispatch({ type: actionTypes.LOGIN, user: "user", token: "" });
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Connexion à Chancee</Typography>
      <div className={classes.form}>
        <div className={classes.formItem}>
          <Input
            name="email"
            placeholder="Nom d’utilisateur"
            value={values.email}
            onChange={handleChange("email")}
            type="text"
          />
        </div>
        <div className={classes.formItem}>
          <Input
            name="password"
            placeholder="Mot de passe"
            value={values.password}
            onChange={handleChange("password")}
            type="password"
          />
        </div>
        <div className={classes.submitButton}>
          <Button type="submit" text="Connexion" onClick={onSubmit} />
        </div>
      </div>
      <div className={classes.forgotText}>Mot de passe oublié ?</div>
      <div className={classes.forgotRow}>
        <div className={classes.forgotText}>Pas encore de compte ?</div>
        &nbsp;&nbsp;&nbsp;
        <div className={classes.forgotTextWhite}>Je m’inscris !</div>
      </div>
    </div>
  );
}
