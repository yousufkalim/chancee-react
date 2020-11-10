import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";

import { ReactComponent as JumboImage } from "../../assets/images/Fusee.svg";
import { ReactComponent as Cycle } from "../../assets/images/cycle.svg";
import { ReactComponent as Flash } from "../../assets/images/flash.svg";
import { ReactComponent as GPS } from "../../assets/images/gps.svg";
import { ReactComponent as Calendar } from "../../assets/images/event.svg";
import { ReactComponent as CoinStack } from "../../assets/images/coinStack.svg";
import { ReactComponent as StepCycle } from "../../assets/images/stepCycle.svg";
import { ReactComponent as Scooter } from "../../assets/images/scooter.svg";
import { ReactComponent as StepECycle } from "../../assets/images/stepECycle.svg";
import { ReactComponent as Automobile } from "../../assets/images/automobile.svg";
import { ReactComponent as OK } from "../../assets/images/Ok.svg";
import { ReactComponent as Checked } from "../../assets/images/checked.svg";
import { ReactComponent as Unchecked } from "../../assets/images/unchecked.svg";

import Header from "../../components/Header";
import Button from "../../components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  // jumbotron
  jumbo: {
    alignItems: "center",
    margin: "50px 0",
  },
  jumboImage: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: 200,
    },
  },
  jumboDetails: {
    padding: 40,
  },
  jumboTexts: {
    marginBottom: 20,
  },
  jumboText: {
    lineHeight: "54px",
    fontFamily: "Catamaran",
    fontSize: "42px",
    color: "rgba(50,60,71,1)",
  },
  jumboTextBold: {
    lineHeight: "54px",
    fontFamily: "Catamaran",
    fontWeight: "bold",
    fontSize: "42px",
    color: "rgba(50,60,71,1)",
  },
  jumboButton: {
    maxWidth: 150,
    marginBottom: 20,
  },
  jumboDescription: {
    maxWidth: 512,
    lineHeight: "28px",
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "rgba(152,152,152,1)",
    marginBottom: 20,
  },
  // steps
  stepsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  steps: {
    position: "relative",
    width: "80%",
    height: 35,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  stepLine: {
    position: "absolute",
    height: "0.999px",
    backgroundColor: "rgba(208,215,221,1)",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
  },
  step: {
    backgroundColor: "#fff",
    border: "1px solid rgba(208,215,221,1)",
    borderRadius: 20,
    zIndex: 2,
    color: "rgba(50,60,71,1)",
    fontFamily: "Roboto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: 8,
      margin: "0 10px",
      padding: "0 10px",
      height: "45px",
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: 8,
      margin: "0 20px",
      padding: "0 20px",
      height: "35px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 12,
      margin: "0 20px",
      padding: "0 20px",
      height: "35px",
    },
  },
  stepActive: {
    backgroundColor: "#00A1FF",
    border: "1px solid #00A1FF",
    color: "#fff",
  },
  // formContainer
  formContainer: {
    marginTop: 50,
  },
  formHeader: {
    fontFamily: "Catamaran",
    fontSize: "2em",
    color: "rgba(50,60,71,1)",
  },
  formStepHeader: {
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  formStepIconWrapper: {
    height: 50,
    width: 50,
    backgroundColor: "rgba(250,251,252,1)",
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
    marginBottom: 20,
  },
  // Step 1
  step1: {
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
  // step2
  buttonContainer: {
    paddingTop: 20,
    paddingBottom: 50,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      paddingTop: 50,
    },
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const [vehicle, setVehicle] = useState(4);
  const [vehicleCheck1, setvehicleCheck1] = React.useState(false);
  const [vehicleCheck2, setvehicleCheck2] = React.useState(false);

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
    <div className={classes.root}>
      <Header />
      <section id="Jumbo">
        <Grid container className={classes.jumbo}>
          <Grid item xs={12} md={6}>
            <JumboImage className={classes.jumboImage} />
          </Grid>
          <Grid item xs={12} md={6} className={classes.jumboDetails}>
            <div className={classes.jumboTexts}>
              <span className={classes.jumboText}>
                Votre profil a été <br />
                <span className={classes.jumboTextBold}>validé</span>{" "}
                Anne-Gabrielle !
              </span>
              <br />
            </div>
            <div className={classes.jumboButton}>
              <Button text="JE ME LANCE" />
            </div>
            <div className={classes.jumboDescription}>
              Votre espace personnel a été activé, encore quelques informations
              et vous recevrez les offres de nos 2300+ restaurants partenaires
            </div>
          </Grid>
        </Grid>
      </section>
      <Container maxWidth="xl">
        <section id="Steps" className={classes.stepsContainer}>
          <div className={classes.steps}>
            <div className={classes.stepLine}></div>
            <div className={classes.step}>1. SAISIE DE VOS INFORMATIONS</div>
            <div className={classes.step + " " + classes.stepActive}>
              2. VALIDATION DE VOS INFORMATIONS
            </div>
            <div className={classes.step}>3. ACTIVATION DU COMPTE</div>
          </div>
        </section>
        <section id="form" className={classes.formContainer}>
          <div className={classes.formHeader}>
            Plus qu’une étape avant de démarrer !
          </div>
          <section>
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
                {step1s.map((item, index) => (
                  <Grid
                    key={item.id}
                    item
                    xs={12}
                    md={6}
                    container
                    className={classes.step1Section}
                    onClick={() => setVehicle(item.id)}
                  >
                    <Grid item xs={3}>
                      {item.image}
                    </Grid>
                    <Grid item xs={7}>
                      <span
                        className={`${classes.step1SectionText1} ${
                          vehicle === item.id && classes.step1SectionText1Active
                        }`}
                      >
                        {item.title}
                      </span>
                      <br />
                      <span
                        className={`${classes.step1SectionText2} ${
                          vehicle === item.id && classes.step1SectionText2Active
                        }`}
                      >
                        {item.description}
                      </span>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      className={`${classes.step1SectionIcon} ${
                        vehicle === item.id && classes.step1SectionIconActive
                      }`}
                    >
                      <OK />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              {vehicle !== 1 && vehicle !== 3 && (
                <Grid
                  item
                  xs={12}
                  lg={4}
                  container
                  className={classes.step1Section2}
                >
                  <div className={classes.step1Section2step}>
                    <div>
                      <Checkbox
                        checked={vehicleCheck1}
                        onChange={(event) =>
                          setvehicleCheck1(event.target.checked)
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
                        checked={vehicleCheck2}
                        onChange={(event) =>
                          setvehicleCheck2(event.target.checked)
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
          </section>
          <section>
            <div className={classes.formStepHeader}>
              <div className={classes.formStepIconWrapper}>
                <Cycle className={classes.formStepIcon} />
              </div>
              <div className={classes.formStepText}>VOLUME DE LIVRAISON</div>
            </div>
          </section>
          <section>
            <div className={classes.formStepHeader}>
              <div className={classes.formStepIconWrapper}>
                <GPS className={classes.formStepIcon} />
              </div>
              <div className={classes.formStepText}>TON RAYON D’ACTION</div>
            </div>
          </section>
          <section>
            <div className={classes.formStepHeader}>
              <div className={classes.formStepIconWrapper}>
                <Calendar className={classes.formStepIcon} />
              </div>
              <div className={classes.formStepText}>T’ES DISPO ? ;)</div>
            </div>
          </section>
          <section>
            <div className={classes.formStepHeader}>
              <div className={classes.formStepIconWrapper}>
                <CoinStack className={classes.formStepIcon} />
              </div>
              <div className={classes.formStepText}>FIXE TES TARIFS</div>
            </div>
          </section>
          <div className={classes.buttonContainer}>
            <Button type="submit" text={"Soumettre mon dossier"}>
              <Flash style={{ marginRight: 10 }} />
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
