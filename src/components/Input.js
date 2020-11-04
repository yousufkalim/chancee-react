import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Login(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: "#4C4686",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
      boxShadow:
        "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    },
    input: {
      width: "100%",
      height: "100%",
      padding: 12,
      color: "#fff",
      backgroundColor: "transparent",
      border: 0,
      outline: 0,
      "&::placeholder": {
        color: "#fff",
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.children}
      <input
        className={classes.input}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
      />
    </div>
  );
}
