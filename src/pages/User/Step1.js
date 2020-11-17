import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { ReactComponent as JumboImage } from "../../assets/images/Home2.svg";
import { ReactComponent as Microphone } from "../../assets/images/microphone.svg";
import { ReactComponent as Chat } from "../../assets/images/chatIcon.svg";
import { ReactComponent as Point } from "../../assets/images/Point.svg";
import { ReactComponent as Attach } from "../../assets/images/Attach.svg";
import { ReactComponent as Flash } from "../../assets/images/flash.svg";
import { ReactComponent as FileUpload } from "../../assets/images/FileUpload.svg";
import { ReactComponent as Tick } from "../../assets/images/tick.svg";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Flag from "../../assets/images/flag.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  // jumbotron
  jumbo: {
    alignItems: "center",
  },
  jumboImage: {
    width: "85%",
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
    marginTop: 50,
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
  // formHeader
  formHeader: {
    fontFamily: "Catamaran",
    fontSize: "2em",
    color: "rgba(50,60,71,1)",
  },
  // formStepHeader
  formStepHeader: {
    margin: "40px 20px 0 0",
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
  form: {},
  formItem: {
    display: "flex",
    flexDirection: "column",
  },
  // form Input
  inputLabel: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "12px",
    color: "rgba(186,197,205,1)",
    letterSpacing: 0.4,
    marginTop: 15,
    marginBottom: 5,
  },
  inputContainer: {
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
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
  },
  inputSIRET: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  flagIcon: {
    backgroundColor: "rgba(233,239,244,1)",
    width: "12%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  flagIconImg: {},
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
  inputIcon: {
    marginRight: 20,
  },
  // steppers
  stepperContainer: {
    marginTop: 40,
  },
  stepperInput: {
    border: "1px dashed rgba(208,215,221,1)",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  stepperInputContent: {
    width: "60%",
    height: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  stepperInputIcon: {},
  stepperInputTexts: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  stepperInputText: {
    fontSize: 20,
    fontWeight: "light",
    color: "#000",
  },
  steppers: {
    display: "flex",
    flexDirection: "column",
  },
  stepper: {
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 4,
    zIndex: 2,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 20,
    },
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
    width: 30,
    height: 30,
    color: "rgba(166,229,15,1)",
  },
  stepperIcon: {
    width: 18,
    height: 18,
  },
  stepperTitle: {
    marginLeft: 15,
    color: "rgba(166,229,15,1)",
    fontFamily: "Roboto",
    fontSize: "16px",
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
  submitButton: {
    maxWidth: "20%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const [step, setStep] = React.useState(2);

  const steps = [
    {
      id: 1,
      title: "Justificatif d’identité en cours de validité *",
      description: "CNI Recto/Verso, Passeport ou titre de séjour",
    },
    {
      id: 2,
      title:
        "Justificatif d’identité en cours de validité (complément si nécéssaire)",
      description: "CNI Recto/Verso, Passeport ou titre de séjour",
    },
    {
      id: 3,
      title: "Kbis de moins de 3 mois",
      description:
        "Kbis version électronique ou version papier numérisée (300dpi minimum)",
    },
    {
      id: 4,
      title: "Selfie",
      description: "Prenez un selfie où l’on voit clairement votre visage",
    },
    {
      id: 5,
      title: "Preuve de diplôme",
      description: "Facultatif",
    },
    {
      id: 6,
      title: "Certificat de formation à l’Academie des livreurs",
      description: "Facultatif",
    },
    {
      id: 7,
      title: "Certificat d’assurance",
      description: "Facultatif",
    },
  ];

  return (
    <div className={classes.root}>
      <Header />
      <section id="Jumbo">
        <Grid container className={classes.jumbo}>
          <Grid item xs={12} md={6}>
            <div style={{ display: "grid", placeItems: "center" }}>
              <JumboImage className={classes.jumboImage} />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.jumboDetails}>
            <div className={classes.jumboTexts}>
              <span className={classes.jumboText}>Bienvenue sur</span>
              <br />
              <span className={classes.jumboTextBold}>Chancee !</span>
            </div>
            <div className={classes.jumboButton}>
              <Button text="DÉMARRER" />
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
                  placeholder="71 rue du Faubourg Poissonnière "
                />
                <div className={classes.inputIcon}>
                  <Tick className={classes.stepperIcon} />
                </div>
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
                <div className={classes.inputIcon}>
                  <Tick className={classes.stepperIcon} />
                </div>
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
                <div className={classes.inputIcon}>
                  <Tick className={classes.stepperIcon} />
                </div>
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
                <div className={classes.inputIcon}>
                  <Tick className={classes.stepperIcon} />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} className={classes.formItem}>
              <div className={classes.inputLabel}>NUMÉRO DE TÉLÉPHONE</div>
              <div className={classes.inputContainer}>
                <div className={classes.flagIcon}>
                  <img src={Flag} className={classes.flagIconImg} alt="flag" />
                </div>
                <input
                  className={classes.input}
                  type="number"
                  placeholder="07 88 45 20 12"
                />
                <div className={classes.inputIcon}>
                  <Tick className={classes.stepperIcon} />
                </div>
              </div>
            </Grid>
          </Grid>
          <div className={classes.formStepHeader}>
            <div className={classes.formStepIconWrapper}>
              <Attach className={classes.formStepIcon} />
            </div>
            <div className={classes.formStepText}>JUSTIFICATIFS</div>
          </div>
          <div className={classes.inputSIRET}>
            <div className={classes.inputLabel}>N° DE RUE ET RUE</div>
            <div className={classes.inputContainer}>
              <input
                className={classes.input}
                type="text"
                placeholder="71 rue du Faubourg Poissonnière "
              />
              <div className={classes.inputIcon}>
                <Tick className={classes.stepperIcon} />
              </div>
            </div>
          </div>
          <Grid container className={classes.stepperContainer}>
            <Grid item xs={12} md={6} className={classes.stepperInput}>
              <div className={classes.stepperInputContent}>
                <FileUpload className={classes.stepperInputIcon} />
                <div className={classes.stepperInputTexts}>
                  <span className={classes.stepperInputText}>
                    Cliquez sur le justificatif
                  </span>
                  <span className={classes.stepperInputText}>
                    pour ajouter votre document
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} className={classes.steppers}>
              {steps.map((item) => (
                <div key={item.id} className={classes.stepper}>
                  <div className={classes.stepperRow}>
                    <div className={classes.stepperIconWrapper}>
                      {item.id < step && (
                        <Tick className={classes.stepperIcon} />
                      )}
                    </div>
                    <div
                      className={`${classes.stepperTitle} ${
                        item.id >= step ? classes.stepperTitleDone : ""
                      }`}
                    >
                      {item.title}
                    </div>
                  </div>
                  <div className={classes.stepperDesc}>{item.description}</div>
                </div>
              ))}
            </Grid>
          </Grid>
          <div className={classes.buttonContainer}>
            <Button
              type="submit"
              text={"Soumettre mon dossier"}
              className={classes.submitButton}
            >
              <Flash style={{ marginRight: 10 }} />
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
