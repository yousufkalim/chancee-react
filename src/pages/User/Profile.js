import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#fff",
  },
}));

export default function Profile(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      Profile
    </div>
  );
}
