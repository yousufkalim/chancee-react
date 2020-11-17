import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

import { ReactComponent as Cycle } from "../assets/images/cycle.svg";

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
  sliderWidth: {
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  step3Slider: {
    width: "98%",
    color: "#8B9AFC",
    height: 35,
    "& .MuiSlider-track": {
      height: 48,
      borderRadius: 6,
    },
    "& .MuiSlider-rail": {
      height: 47,
      backgroundColor: "#fff",
      borderRadius: 6,
      border: "1px solid #8B9AFC",
    },
    "& .MuiSlider-mark": {
      height: 5,
      marginTop: 55,
      backgroundColor: "rgba(0, 0, 0, 0.54)",
    },
    "& .MuiSlider-markActive": {
      height: 5,
      marginTop: 55,
      backgroundColor: "rgba(0, 0, 0, 0.54)",
    },
    "& .MuiSlider-markLabel": {
      marginTop: 47,
      color: "rgba(0, 0, 0, 0.54)",
    },
    "& .MuiSlider-markLabelActive": {
      marginTop: 47,
      color: "rgba(0, 0, 0, 0.54)",
    },
    "& .MuiSlider-thumb.MuiSlider-active": {
      boxShadow: "none",
    },
    "& .MuiSlider-thumb.Mui-focusVisible": {
      boxShadow: "none",
    },
    "& .MuiSlider-thumb": {
      marginTop: 14,
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "#323C47",
      "&::after": {
        fontSize: 9,
        color: "#fff",
        display: "flex",
        content: "'< >'",
        alignItems: "center",
        justifyContent: "center",
      },
      "&:hover": {
        boxShadow: "none",
      },
      "&:active": {
        boxShadow: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      marginTop: 38,
      marginLeft: -46,
      color: "transparent",
      fontSize: 20,
      "&::after": {
        content: "'km'",
        position: "absolute",
        top: 10,
        left: 35,
        color: "#FFF",
        fontSize: 14,
      },
    },
  },
}));

const DistanceSlider = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.formStepHeader}>
        <div className={classes.formStepIconWrapper}>
          <Cycle className={classes.formStepIcon} />
        </div>
        <div className={classes.formStepText}>TON RAYON D’ACTION</div>
      </div>
      <div className={classes.formStepSubHeader}>
        QUEL EST VOTRE RAYON D’ACTION, EN KM ?
      </div>
      <Grid container className={classes.sliderWidth}>
        <Grid item xs={12}>
          <Slider
            min={0}
            step={1}
            max={100}
            marks={[
              {
                value: 2,
                label: "2 km",
              },
              {
                value: 100,
                label: "100 km",
              },
            ]}
            value={props.value}
            valueLabelDisplay="on"
            onChange={props.onChange}
            className={classes.step3Slider}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DistanceSlider;
