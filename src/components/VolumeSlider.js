import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

import { ReactComponent as Cycle } from "../assets/images/cycle.svg";
import { ReactComponent as User2step21 } from "../assets/images/user2step21.svg";
import { ReactComponent as User2step22 } from "../assets/images/user2step22.svg";
import { ReactComponent as User2step23 } from "../assets/images/user2step23.svg";

const useStyles = makeStyles((theme) => ({
  formStepHeader: {
    margin: "0px 0 10px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  formStepIconWrapper: {
    height: 50,
    width: 50,
    backgroundColor: "rgba(250,251,252,1)",
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formStepIcon: {
    width: "40%",
    height: "50%",
    color: "rgba(122,204,40,1)",
  },
  formStepText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "14px",
    color: "rgba(122,204,40,1)",
    letterSpacing: 0.35,
    marginLeft: 10,
  },
  formStepSubHeader: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "12px",
    color: "rgba(186,197,205,1)",
    letterSpacing: "0.41666671752929685px",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  // step2
  step2Slider1: {
    width: "2%",
    color: "#89ED4A",
    height: 55,
    "& .MuiSlider-thumb": {
      display: "none",
    },
    "& .MuiSlider-track": {
      height: 48,
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
    },
    "& .MuiSlider-rail": {
      height: 47,
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
      backgroundColor: "#fff",
      border: "1px solid #89ED4A",
    },
    "&.Mui-disabled": {
      color: "#89ED4A",
    },
  },
  step2Slider2: {
    width: "98%",
    color: "#89ED4A",
    height: 55,
    "& .MuiSlider-thumb": {
      display: "none",
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    "& .MuiSlider-track": {
      height: 48,
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
    },
    "& .MuiSlider-rail": {
      height: 47,
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      backgroundColor: "#fff",
      border: "1px solid #89ED4A",
    },
  },
  step2Icons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  step2Icon: {
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 70,
    },
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.formStepHeader}>
        <div className={classes.formStepIconWrapper}>
          <Cycle className={classes.formStepIcon} />
        </div>
        <div className={classes.formStepText}>VOLUME DE LIVRAISON</div>
      </div>
      <div className={classes.formStepSubHeader}>
        QUEL EST TON VOLUME POSSIBLE DE LIVRAISON ?
      </div>
      <Grid container className={classes.sliderWidth}>
        <Grid item xs={12}>
          <Slider
            value={1}
            min={0}
            step={1}
            max={1}
            className={classes.step2Slider1}
            disabled={true}
          />
          <Slider
            min={1}
            step={1}
            max={3}
            className={classes.step2Slider2}
            value={props.value}
            onChange={props.onChange}
          />
        </Grid>
        <Grid item xs={12} className={classes.step2Icons}>
          <User2step21
            onClick={() => props.onChange("", 1)}
            className={classes.step2Icon}
          />
          <User2step22
            onClick={() => props.onChange("", 2)}
            className={classes.step2Icon}
          />
          <User2step23
            onClick={() => props.onChange("", 3)}
            className={classes.step2Icon}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
