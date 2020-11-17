import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";

import { ReactComponent as JumboImage } from "../../assets/images/ProfileStep1.svg";
import { ReactComponent as Microphone } from "../../assets/images/microphone.svg";
import { ReactComponent as Chat } from "../../assets/images/chatIcon.svg";
import { ReactComponent as Point } from "../../assets/images/Point.svg";
import { ReactComponent as Attach } from "../../assets/images/Attach.svg";
import { ReactComponent as Flash } from "../../assets/images/flash.svg";
import { ReactComponent as FileUpload } from "../../assets/images/FileUpload.svg";
import { ReactComponent as Tick } from "../../assets/images/tick.svg";

import { ReactComponent as Calendar } from "../../assets/images/event.svg";
import { ReactComponent as Checked } from "../../assets/images/checked.svg";
import { ReactComponent as Unchecked } from "../../assets/images/unchecked.svg";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Flag from "../../assets/images/flag.png";
import Input from "../../components/Input";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  // jumbotron
  jumbo: {
    alignItems: "center",
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
  formStepSubHeader: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "12px",
    color: "rgba(186,197,205,1)",
    letterSpacing: "0.41666671752929685px",
    textTransform: "uppercase",
    marginBottom: 10,
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
  //
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
  //
  modalHeaderContainer: {
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalHeader: {
    color: "rgba(0, 0, 0, 0.54)",
    margin: 0,
  },
  modalIcon: {
    cursor: "pointer",
    color: "rgba(0, 0, 0, 0.54)",
  },
  modalContent: {
    padding: "0 20px",
  },
  modalChipContainer: {
    marginBottom: 10,
  },
  modalForm: {
    "& > *": {
      padding: "10px 20px",
    },
  },
  modalActions: {
    padding: "10px 20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > *": {
      marginLeft: 20,
    },
  },
  // buttonContainer: {
  //   paddingTop: 20,
  //   paddingBottom: 50,
  //   width: "100%",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   [theme.breakpoints.up("md")]: {
  //     paddingTop: 50,
  //   },
  // },
}));

export default function Profile(props) {
  const classes = useStyles();
  const [step, setStep] = useState(3);
  const [selectedDay, setSelectedDay] = useState(1);
  const [timeslots, setTimeSlots] = useState([
    { day: 1, checked: false, slots: [] },
    { day: 2, checked: false, slots: [] },
    { day: 3, checked: false, slots: [] },
    { day: 4, checked: false, slots: [] },
    { day: 5, checked: false, slots: [] },
    { day: 6, checked: false, slots: [] },
    { day: 7, checked: false, slots: [] },
  ]);
  const [dayModal, setDayModal] = React.useState(false);
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [getUpdate, setGetUpdate] = useState(false);

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
      title: "Logo d’entreprise",
      description:
        "Attachez le logo de votre entreprise, qui sera présenté aux livreurs",
    },
  ];
  const days = [
    {
      id: 1,
      name: "Lundi",
      description: "A partir de 8h00, pendant 10 heures",
    },
    {
      id: 2,
      name: "Mardi",
      description: "A partir de 8h00, pendant 10 heures",
    },
    {
      id: 3,
      name: "Mercredi",
      description: "A partir de 8h00, pendant 10 heures",
    },
    {
      id: 4,
      name: "Jeudi",
      description: "A partir de 8h00, pendant 10 heures",
    },
    {
      id: 5,
      name: "Vendredi",
      description: "A partir de 8h00, pendant 10 heures",
    },
    {
      id: 6,
      name: "Samedi",
      description: "A partir de 8h00, pendant 10 heures",
    },
    {
      id: 7,
      name: "Dimanche",
      description: "A partir de 8h00, pendant 10 heures",
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
            <Grid item xs={12} md={6} className={classes.formItem}>
              <div className={classes.inputLabel}>NUMERO DE SIRET</div>
              <div className={classes.inputContainer}>
                <input
                  className={classes.input}
                  type="text"
                  placeholder="313 313 334 19076"
                />
                <div className={classes.inputIcon}>
                  <Tick className={classes.stepperIcon} />
                </div>
              </div>
            </Grid>
          </Grid>
          <section>
            <div className={classes.formStepHeader}>
              <div className={classes.formStepIconWrapper}>
                <Calendar className={classes.formStepIcon} />
              </div>
              <div className={classes.formStepText}>HORAIRES D’OUVERTURE</div>
            </div>
            <div className={classes.formStepSubHeader}>
              QUELS SONT LES HORAIRES CLASSIQUES D’OUVERTURE DE L’ENTREPRISE ?
            </div>
            <Grid container>
              {days.map((day) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={day.id}
                  className={classes.step1Section2step}
                >
                  <div>
                    <Checkbox
                      disableRipple
                      checked={timeslots[day.id - 1].checked}
                      color="default"
                      icon={<Unchecked />}
                      onChange={(event) => {
                        setSelectedDay(day.id);
                        setDayModal(true);
                      }}
                      checkedIcon={<Checked />}
                      className={classes.step1Section2Checkbox}
                    />
                    <span className={classes.step1Section2stepText1}>
                      {day.name}
                    </span>
                  </div>
                  <span className={classes.step1Section2stepText2}>
                    {day.description}
                  </span>
                </Grid>
              ))}
            </Grid>
          </section>
          <div className={classes.formStepHeader}>
            <div className={classes.formStepIconWrapper}>
              <Attach className={classes.formStepIcon} />
            </div>
            <div className={classes.formStepText}>DOCUMENTS A JOINDRE</div>
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
      <Dialog
        open={dayModal}
        maxWidth={"md"}
        fullWidth={true}
        onClose={() => setDayModal((st) => !st)}
      >
        <div className={classes.modalHeaderContainer}>
          <h2 className={classes.modalHeader}>Add Availability</h2>
          <CloseIcon
            onClick={() => setDayModal((st) => !st)}
            className={classes.modalIcon}
          />
        </div>
        <Grid container className={classes.modalContent}>
          {timeslots[selectedDay - 1].slots.map((row, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={row.start + row.end}
              className={classes.modalChipContainer}
            >
              <Chip
                label={"start:" + row.start + " ↔️ end:" + row.end}
                onDelete={() => {
                  let arry = timeslots;
                  let newArray = arry[selectedDay - 1].slots.filter(
                    (slo, index2) => index2 !== index
                  );
                  arry[selectedDay - 1].slots = newArray;
                  setTimeSlots(arry);
                  setGetUpdate((st) => !st);
                }}
                color="default"
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.modalForm}>
          <div>
            <span>Start Hour</span>
            <Input
              type="number"
              color="#FC917C"
              placeholder="Start Hour"
              value={startHour}
              onChange={(e) => {
                if (e.target.value >= 0 && e.target.value < 23) {
                  setStartHour(e.target.value);
                }
              }}
            />
          </div>
          <div>
            <span>End Hour</span>
            <Input
              type="number"
              color="#FC917C"
              placeholder="End Hour"
              value={endHour}
              onChange={(e) => {
                if (e.target.value >= 0 && e.target.value < 24) {
                  setEndHour(e.target.value);
                }
              }}
            />
          </div>
        </div>
        <div className={classes.modalActions}>
          <Button
            style={{ width: 100, backgroundColor: "#FC917C" }}
            onClick={() => {
              if (timeslots[selectedDay - 1].slots.length > 0) {
                let newSlots = timeslots;
                newSlots[selectedDay - 1].checked = true;
                setTimeSlots(newSlots);
              } else {
                let newSlots = timeslots;
                newSlots[selectedDay - 1].checked = false;
                setTimeSlots(newSlots);
              }
              setDayModal(false);
              setEndHour("");
              setStartHour("");
            }}
          >
            Done
          </Button>
          <Button
            style={{ width: 100, backgroundColor: "#FC917C" }}
            onClick={() => {
              if (parseInt(startHour) >= parseInt(endHour)) {
                alert("start hour should be less then endhour");
              } else {
                let timeslotArray = timeslots;
                let times = timeslotArray[selectedDay - 1].slots;
                let shouldAdd = true;
                times.map((timeslot) => {
                  if (
                    parseInt(startHour) === parseInt(timeslot.start) ||
                    parseInt(endHour) <= parseInt(timeslot.end) ||
                    (parseInt(startHour) > parseInt(timeslot.start) &&
                      parseInt(startHour) < parseInt(timeslot.end))
                  ) {
                    shouldAdd = false;
                  }
                });
                if (shouldAdd) {
                  times.push({
                    start: startHour,
                    end: endHour,
                  });
                  timeslotArray[selectedDay - 1].slots = times;
                  setTimeSlots(timeslotArray);
                } else {
                  alert("Cannot add overlapping time slots!");
                }
                setGetUpdate((st) => !st);
              }
            }}
          >
            Add Row
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
