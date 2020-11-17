import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Chip from "@material-ui/core/Chip";

import Header from "../../components/HeaderCompany";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ProfileImage from "../../assets/images/avatar.svg";

import { ReactComponent as Star } from "../../assets/images/star.svg";
import { ReactComponent as Rocket } from "../../assets/images/rocket.svg";
import { ReactComponent as Checked } from "../../assets/images/checked.svg";
import { ReactComponent as Unchecked } from "../../assets/images/unchecked.svg";
import { ReactComponent as Calendar } from "../../assets/images/event.svg";
import { ReactComponent as Pencil } from "../../assets/images/pencil.svg";

import { ReactComponent as Attach } from "../../assets/images/Attach.svg";
import { ReactComponent as FileUpload } from "../../assets/images/FileUpload.svg";
import { ReactComponent as Tick } from "../../assets/images/tick.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F5F7FB",
    paddingTop: 90,
    paddingLeft: 90,
    minHeight: "100vh",
  },
  content: {
    padding: 30,
    paddingBottom: 20,
  },
  card: {
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
  },
  //
  profileCard: {
    height: "100%",
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  rateCard: {
    padding: 20,
  },
  profileEditIcon: {
    width: 30,
    height: 30,
    borderRadius: 30,
    border: "1px solid #ccc",
    display: "grid",
    placeItems: "center",
    position: "absolute",
    right: 20,
  },
  profileCardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
  },
  profileEmail: {
    fontSize: 11,
    color: "#BBC9CD",
    marginBottom: 15,
  },
  profileCourses: {
    fontSize: 12,
    marginBottom: 30,
    color: "#27C1CC",
    borderRadius: 50,
    fontWeight: "bold",
    padding: "10px 30px",
    backgroundColor: "#F0F6F7",
  },
  profileText: {
    fontSize: 12,
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  profileRatingArea: {
    borderTop: "1px solid #E7F0F0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profileRating: {
    height: 35,
    fontSize: 14,
    color: "#395982",
    width: "33.33%",
    display: "flex",
    fontWeight: "bold",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid #E7F0F0",
    "& > *": {
      marginRight: 5,
    },
    "&:last-child": {
      borderRight: "none",
    },
  },
  profileRatingIcon: {
    width: 15,
  },
  //
  vehicleCard: {
    padding: 20,
    height: "100%",
  },
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
  //
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
      // borderRadius: 4,
      color: "transparent",
      fontSize: 20,
      // position: 'absolute'
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
  step3Icons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  step3Icon: {
    cursor: "pointer",
  },
  //
  step5SliderContainer: {
    border: "1px dashed rgba(186,197,205,1)",
    padding: 20,
    borderRadius: 6,
  },
  step5Slider: {
    width: "98%",
    color: "#FC917C",
    height: 54,
    "& .MuiSlider-track": {
      height: 65,
      borderRadius: 6,
      border: "1px solid #FC917C",
    },
    "& .MuiSlider-rail": {
      height: 65,
      backgroundColor: "#fff",
      borderRadius: 6,
      border: "1px solid #FC917C",
    },
    "& .MuiSlider-mark": {
      height: 5,
      marginTop: 72,
      backgroundColor: "rgba(0, 0, 0, 0.54)",
    },
    "& .MuiSlider-markActive": {
      height: 5,
      marginTop: 72,
      backgroundColor: "rgba(0, 0, 0, 0.54)",
    },
    "& .MuiSlider-markLabel": {
      marginTop: 64,
      color: "rgba(0, 0, 0, 0.54)",
    },
    "& .MuiSlider-markLabelActive": {
      marginTop: 64,
      color: "rgba(0, 0, 0, 0.54)",
    },
    "& .MuiSlider-thumb.MuiSlider-active": {
      boxShadow: "none",
    },
    "& .MuiSlider-thumb.Mui-focusVisible": {
      boxShadow: "none",
    },
    "& .MuiSlider-thumb": {
      marginTop: 24,
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
      marginLeft: -82,
      color: "transparent",
      fontSize: 20,
      "&::after": {
        content: "'€ / heure'",
        position: "absolute",
        top: 10,
        left: 30,
        whiteSpace: "nowrap",
        color: "#FFF",
        fontSize: 14,
      },
    },
  },
  step5Details: {
    padding: "20px",
  },
  step5Detail: {
    color: "red",
    fontSize: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "8px 0",
  },
  step5Checkbox: {
    width: 25,
    padding: 0,
    marginRight: 10,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  step5CheckboxText: {
    fontWeight: "500",
    fontSize: "14px",
    color: "rgba(186,197,205,1)",
  },
  link: {
    color: "#00A1FF",
    textDecoration: "none",
  },
  incrementText: {
    color: "#000",
    marginTop: 10,
    fontSize: "14px",
    display: "block",
    fontWeight: "500",
    marginLeft: 10,
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
}));

const Profile = (props) => {
  const classes = useStyles();
  const [selectedDay, setSelectedDay] = useState(1);
  const [step, setStep] = useState(3);
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

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <Grid container spacing={4}>
          <Grid item xs={12} xl={4}>
            <div className={classes.card}>
              <div className={classes.profileCard}>
                <div className={classes.profileEditIcon}>
                  <Pencil style={{ width: "50%" }} />
                </div>
                <div className={classes.profileCardContent}>
                  <img
                    src={ProfileImage}
                    alt="profile"
                    className={classes.profileImage}
                  />
                  <div className={classes.profileName}>
                    Anne-Gabrielle Lavigne
                  </div>
                  <div className={classes.profileEmail}>
                    Anne-gabrelle@gmail.com
                  </div>
                  <div
                    className={classes.profileText}
                    style={{ marginTop: 20 }}
                  >
                    28, rue Jean Jaures
                    <br />
                    5ème étage
                    <br />
                    Paris, 75012
                  </div>
                  <div className={classes.profileText}>06.31.31.42.53</div>
                  <div
                    className={classes.profileEmail}
                    style={{ marginTop: 20 }}
                  >
                    NUMERO DE SIRET
                  </div>
                  <div className={classes.profileText}>313 313 334 19076</div>
                </div>
                <div className={classes.profileRatingArea}>
                  <div className={classes.profileRating}>
                    <Rocket className={classes.profileRatingIcon} />
                    32
                  </div>
                  <div className={classes.profileRating}>
                    <Star className={classes.profileRatingIcon} />
                    32
                  </div>
                  <div className={classes.profileRating}>(32 notes)</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} xl={8}>
            <div className={classes.card}>
              <div className={classes.rateCard}>
                <section>
                  <div className={classes.formStepHeader}>
                    <div className={classes.formStepIconWrapper}>
                      <Calendar className={classes.formStepIcon} />
                    </div>
                    <div className={classes.formStepText}>T’ES DISPO ? 😉</div>
                  </div>
                  <div className={classes.formStepSubHeader}>
                    QUELLES-SONT TES DISPONIBILITÉS ?
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
                  <div className={classes.formStepHeader}>
                    <div className={classes.formStepIconWrapper}>
                      <Attach className={classes.formStepIcon} />
                    </div>
                    <div className={classes.formStepText}>
                      DOCUMENTS A JOINDRE
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
                          <div className={classes.stepperDesc}>
                            {item.description}
                          </div>
                        </div>
                      ))}
                    </Grid>
                  </Grid>
                </section>
              </div>
            </div>
          </Grid>
        </Grid>
        <div
          className={classes.buttonContainer}
          style={{ justifyContent: "flex-end" }}
        >
          <Button
            type="button"
            text={"UPDATE"}
            color="#000"
            style={{ width: 150, fontSize: 18 }}
          />
        </div>
      </div>
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
};

export default Profile;
