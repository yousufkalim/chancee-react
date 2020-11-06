import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { ReactComponent as JumboImage } from "../../assets/images/ProfileStep1.svg";
import { ReactComponent as Microphone } from "../../assets/images/microphone.svg";
import { ReactComponent as Chat } from "../../assets/images/chatIcon.svg";
import { ReactComponent as Point } from "../../assets/images/Point.svg";
import { ReactComponent as Attach } from "../../assets/images/Attach.svg";
import { ReactComponent as Flash } from "../../assets/images/flash.svg";
import { ReactComponent as FileUpload } from "../../assets/images/FileUpload.svg";

import Header from "../../components/Header";
import Button from "../../components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  // steps
  jumbo: {
    alignItems: "center",
  },
  jumboImage: {
    width: "90%",
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
  jumboIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  jumboIcon: {
    height: 30,
    marginRight: 10,
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
    width: 818,
    height: 35,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  stepLine: {
    position: "absolute",
    width: "502.996px",
    height: "0.999px",
    backgroundColor: "rgba(208,215,221,1)",
  },
  step: {
    whiteSpace: "nowrap",
    padding: "0 20px",
    height: "35px",
    backgroundColor: "#fff",
    border: "1px solid rgba(208,215,221,1)",
    borderRadius: 20,
    zIndex: 2,
    margin: "0 20px",
    fontSize: 12,
    color: "rgba(50,60,71,1)",
    fontFamily: "Roboto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  // formHeader
  formHeader: {
    whiteSpace: "nowrap",
    textAlign: "left",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "30px",
    color: "rgba(50,60,71,1)",
  },
  // formStepHeader
  formStepHeader: {
    margin: "20px 20px 0 0",
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
    width: "18.489px",
    height: "25.108px",
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
  form: {
    margin: "20px 20px 0 0",
  },
  formItem: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
  // form Input
  inputLabel: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "12px",
    color: "rgba(186,197,205,1)",
    letterSpacing: 0.4,
    marginBottom: 5,
  },
  inputContainer: {
    width: "80%",
    maxHeight: 52,
    backgroundColor: "#fff",
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    color: "rgba(233,239,244,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(233,239,244,1)",
  },
  input: {
    width: "100%",
    height: "100%",
    padding: "14px 12px",
    color: "rgba(50,60,71,1)",
    backgroundColor: "transparent",
    border: 0,
    outline: 0,
    "&::placeholder": {
      color: "rgba(50,60,71,1)",
    },
  },
  inputIcon: {},
  // steppers
  stepperContainer: {
    marginTop: 40,
  },
  stepperInput: {
    border: "1px dotted rgba(208,215,221,1)",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  steppers: {
    display: "flex",
    flexDirection: "column",
  },
  stepper: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  stepperActive: {
    backgroundColor: "#fff",
    border: "1px dotted rgba(208,215,221,1)",
    borderLeft: 0,
    borderRadius: 4,
    zIndex: 2,
    marginLeft: -1,
  },
  stepperRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  stepperIconWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(208,215,221,1)",
    borderRadius: 4,
    width: 40,
    height: 40,
  },
  stepperIcon: {},
  stepperTitle: {
    marginLeft: 15,
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "rgba(166,229,15,1)",
  },
  stepperTitleDone: {
    color: "#000",
  },
  stepperDesc: {
    marginTop: 4,
    fontFamily: "Roboto",
    fontSize: "14px",
    color: "rgba(152,152,152,1)",
  },
  stepperDescDone: {
    color: "#000",
  },
  buttonContainer: {
    paddingTop: 50,
    paddingBottom: 50,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Profile(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <section id="Jumbo">
        <Grid container className={classes.jumbo}>
          <Grid item xs={12} md={6}>
            <JumboImage className={classes.jumboImage} />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.jumboTexts}>
              <span className={classes.jumboText}>Bienvenue sur</span>
              <br />
              <span className={classes.jumboTextBold}>Chancee !</span>
            </div>
            <div className={classes.jumboButton}>
              <Button text="DEMARRER" />
            </div>
            <div className={classes.jumboDescription}>
              Nous configurons votre espace personnel, plus que quelques étapes
              et votre profil sera disponible auprès de nos 2300+ restaurants
              partenaires
            </div>
            <div className={classes.jumboIcons}>
              <Chat className={classes.jumboIcon} />
              <Microphone className={classes.jumboIcon} />
            </div>
          </Grid>
        </Grid>
      </section>
      <Container maxWidth="xl">
        <section id="Steps" className={classes.stepsContainer}>
          <div className={classes.steps}>
            <div className={classes.stepLine}></div>
            <div className={classes.step + " " + classes.stepActive}>
              1. SAISIE DE VOS INFORMATIONS
            </div>
            <div className={classes.step}>
              2. VALIDATION DE VOS INFORMATIONS
            </div>
            <div className={classes.step}>3. ACTIVATION DU COMPTE</div>
          </div>
        </section>
        <section id="form" className={classes.formContainer}>
          <div className={classes.formHeader}>
            Validons ensemble vos informations
          </div>
          <div className={classes.formStepHeader}>
            <div className={classes.formStepIconWrapper}>
              <Point className={classes.formStepIcon} />
            </div>
            <div className={classes.formStepText}>ADRESSE POSTALE</div>
          </div>
          <Grid container className={classes.form}>
            <Grid item xs={12} md={6} className={classes.formItem}>
              <div className={classes.inputLabel}>N° DE RUE ET RUE</div>
              <div className={classes.inputContainer}>
                <input
                  className={classes.input}
                  type="text"
                  placeholder="Street Address"
                />
                <div className={classes.inputIcon}></div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} className={classes.formItem}>
              <div className={classes.inputLabel}>CODE POSTAL</div>
              <div className={classes.inputContainer}>
                <input
                  className={classes.input}
                  type="text"
                  placeholder="75009"
                />
                <div className={classes.inputIcon}></div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} className={classes.formItem}>
              <div className={classes.inputLabel}>COMPLÉMENT D’ADRESSE</div>
              <div className={classes.inputContainer}>
                <input
                  className={classes.input}
                  type="text"
                  placeholder="5ème étage"
                />
                <div className={classes.inputIcon}></div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} className={classes.formItem}>
              <div className={classes.inputLabel}>VILLE</div>
              <div className={classes.inputContainer}>
                <input
                  className={classes.input}
                  type="text"
                  placeholder="Paris"
                />
                <div className={classes.inputIcon}></div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              className={classes.formItem}
              style={{ marginTop: 20 }}
            >
              <div className={classes.inputLabel}>NUMÉRO DE TÉLÉPHONE</div>
              <div className={classes.inputContainer}>
                <input
                  className={classes.input}
                  type="text"
                  placeholder="07 88 45 20 12"
                />
                <div className={classes.inputIcon}></div>
              </div>
            </Grid>
          </Grid>
          <div className={classes.formStepHeader}>
            <div className={classes.formStepIconWrapper}>
              <Attach className={classes.formStepIcon} />
            </div>
            <div className={classes.formStepText}>JUSTIFICATIFS</div>
          </div>
          <Grid container className={classes.stepperContainer}>
            <Grid item xs={12} md={6} className={classes.stepperInput}>
              <FileUpload />
            </Grid>
            <Grid item xs={12} md={6} className={classes.steppers}>
              <div className={classes.stepper}>
                <div className={classes.stepperRow}>
                  <div className={classes.stepperIconWrapper}>
                    <Point className={classes.stepperIcon} />
                  </div>
                  <div className={classes.stepperTitle}>
                    Justificatif d’identité en cours de validité *
                  </div>
                </div>
                <div className={classes.stepperDesc}>
                  CNI Recto/Verso, Passeport ou titre de séjour
                </div>
              </div>
              <div className={classes.stepper}>
                <div className={classes.stepperRow}>
                  <div className={classes.stepperIconWrapper}>
                    <Point className={classes.stepperIcon} />
                  </div>
                  <div className={classes.stepperTitle}>
                    Justificatif d’identité en cours de validité (complément si
                    nécéssaire)
                  </div>
                </div>
                <div className={classes.stepperDesc}>
                  CNI Recto/Verso, Passeport ou titre de séjour
                </div>
              </div>
              <div className={classes.stepper}>
                <div className={classes.stepperRow}>
                  <div className={classes.stepperIconWrapper}>
                    <Point className={classes.stepperIcon} />
                  </div>
                  <div className={classes.stepperTitle}>
                    Kbis de moins de 3 mois
                  </div>
                </div>
                <div className={classes.stepperDesc}>
                  Kbis version électronique ou version papier numérisée (300dpi
                  minimum)
                </div>
              </div>
              <div className={classes.stepper + " " + classes.stepperActive}>
                <div className={classes.stepperRow}>
                  <div className={classes.stepperIconWrapper}></div>
                  <div
                    className={
                      classes.stepperTitle + " " + classes.stepperTitleDone
                    }
                  >
                    Preuve d’achat du véhicule
                  </div>
                </div>
                <div
                  className={
                    classes.stepperDesc + " " + classes.stepperDescDone
                  }
                >
                  Facture d’achat ou contrat de location du véhicule avec lequel
                  vous travaillerez dans vos missions Chancee
                </div>
              </div>
            </Grid>
          </Grid>
          <div className={classes.buttonContainer}>
            <Button
              type="submit"
              text={"Soumettre mon dossier"}
              style={{ width: "20%" }}
            >
              <Flash style={{ marginRight: 10 }} />
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
