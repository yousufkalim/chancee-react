import React from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as OK } from "../assets/images/Ok.svg";
import { ReactComponent as Cycle } from "../assets/images/cycle.svg";
import { ReactComponent as Scooter } from "../assets/images/scooter.svg";
import { ReactComponent as Checked } from "../assets/images/checked.svg";
import { ReactComponent as StepCycle } from "../assets/images/stepCycle.svg";
import { ReactComponent as Unchecked } from "../assets/images/unchecked.svg";
import { ReactComponent as StepECycle } from "../assets/images/stepECycle.svg";
import { ReactComponent as Automobile } from "../assets/images/automobile.svg";

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
  step1: {
    marginTop: 10,
    "& :nth-child(1)": {
      borderTopLeftRadius: 6,
    },
    "& :nth-child(2)": {
      borderTopRightRadius: 6,
      borderLeft: 0,
    },
    "& :nth-child(3)": {
      borderTop: 0,
      borderBottom: 0,
    },
    "& :nth-child(4)": {
      borderTop: 0,
      borderBottom: 0,
      borderLeft: 0,
    },
    "& :nth-child(5)": {
      borderBottomLeftRadius: 6,
    },
    "& :nth-child(6)": {
      borderBottomRightRadius: 6,
      borderLeft: 0,
    },
  },
  step1Section: {
    padding: "35px 20px",
    width: "100%",
    border: "1px solid rgba(186,197,205,1)",
    backgroundColor: "#FAFBFB",
    cursor: "pointer",
  },
  vehicleIcon: {
    width: 40,
  },
  step1SectionTexts: {
    display: "flex",
    flexDirection: "column",
  },
  step1SectionText1: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "14px",
    color: "rgba(152,152,152,1)",
    letterSpacing: "0.3571429061889648px",
    textTransform: "uppercase",
  },
  step1SectionText1Active: {
    color: "rgba(122,204,40,1)",
  },
  step1SectionText2: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    color: "rgba(152,152,152,1)",
  },
  step1SectionText2Active: {
    color: "rgba(122,204,40,1)",
  },
  step1SectionIcon: {
    color: "rgba(152,152,152,1)",
    display: "grid",
    placeItems: "center",
  },
  step1SectionIconActive: {
    color: "rgba(122,204,40,1)",
  },
  step1Section2: {
    flexDirection: "column",
  },
  step1Section2step: {
    marginTop: 10,
    marginBottom: 30,
  },
  step1Section2stepText1: {
    fontWeight: "500",
    fontSize: "14px",
    color: "#000",
  },
  step1Section2stepText2: {
    fontSize: "10px",
    color: "rgba(152,152,152,1)",
  },
  step1Section2Checkbox: {
    padding: 0,
    marginRight: 10,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const VehicleSelector = (props) => {
  const classes = useStyles();

  let step1s = [
    {
      id: 1,
      title: "VÉLO",
      description: "Seuls les vrais savent",
      image: <StepCycle />,
    },
    {
      id: 2,
      title: "VÉLO",
      description: "Seuls les vrais savent",
      image: <Scooter />,
    },
    {
      id: 3,
      title: "VÉLO",
      description: "Seuls les vrais savent",
      image: <StepECycle />,
    },
    {
      id: 4,
      title: "VÉLO",
      description: "Seuls les vrais savent",
      image: <Automobile />,
    },
    {
      id: 5,
      title: "VÉLO",
      description: "Seuls les vrais savent",
      image: <StepCycle />,
    },
    {
      id: 6,
      title: "VÉLO",
      description: "Seuls les vrais savent",
      image: <StepCycle />,
    },
  ];

  return (
    <>
      <div className={classes.formStepHeader}>
        <div className={classes.formStepIconWrapper}>
          <Cycle className={classes.formStepIcon} />
        </div>
        <div className={classes.formStepText}>TYPE DE VÉHICULE</div>
      </div>
      <div className={classes.formStepSubHeader}>
        DANS QUEL(S) TYPE(S) DE VÉHICULE(S) LIVREZ-VOUS ?
      </div>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={8} container className={classes.step1}>
          {step1s.map((item) => (
            <Grid
              item
              md={6}
              xs={12}
              container
              key={item.id}
              className={classes.step1Section}
              onClick={() => props.onChange(item.id)}
            >
              <Grid item xs={3}>
                {item.image}
              </Grid>
              <Grid item xs={7}>
                <span
                  className={`${classes.step1SectionText1} ${
                    props.values.has(item.id) && classes.step1SectionText1Active
                  }`}
                >
                  {item.title}
                </span>
                <br />
                <span
                  className={`${classes.step1SectionText2} ${
                    props.values.has(item.id) && classes.step1SectionText2Active
                  }`}
                >
                  {item.description}
                </span>
              </Grid>
              <Grid
                item
                xs={2}
                className={`${classes.step1SectionIcon} ${
                  props.values.has(item.id) && classes.step1SectionIconActive
                }`}
              >
                <OK />
              </Grid>
            </Grid>
          ))}
        </Grid>
        {props.checkbox && (props.values.has(1) || props.values.has(3)) && (
          <Grid item xs={12} lg={4} container className={classes.step1Section2}>
            <div className={classes.step1Section2step}>
              <div>
                <Checkbox
                  checked={props.vehicleCheck1}
                  onChange={(event) =>
                    props.setvehicleCheck1(event.target.checked)
                  }
                  disableRipple
                  color="default"
                  checkedIcon={<Checked />}
                  icon={<Unchecked />}
                  className={classes.step1Section2Checkbox}
                />
                <span className={classes.step1Section2stepText1}>
                  Permis de conduire
                </span>
              </div>
              <span className={classes.step1Section2stepText2}>
                Obligatoire si sélection d’un véhicule motorisé.
              </span>
            </div>
            <div className={classes.step1Section2step}>
              <div>
                <Checkbox
                  checked={props.vehicleCheck2}
                  onChange={(event) =>
                    props.setvehicleCheck2(event.target.checked)
                  }
                  disableRipple
                  color="default"
                  checkedIcon={<Checked />}
                  icon={<Unchecked />}
                  className={classes.step1Section2Checkbox}
                />
                <span className={classes.step1Section2stepText1}>
                  Preuve d’achat du véhicule
                </span>
              </div>
              <span className={classes.step1Section2stepText2}>
                Obligatoire si sélection d’un véhicule motorisé.
              </span>
            </div>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default VehicleSelector;
