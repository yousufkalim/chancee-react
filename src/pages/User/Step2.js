import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Chip from '@material-ui/core/Chip';

import { ReactComponent as JumboImage } from '../../assets/images/Fusee.svg';
import { ReactComponent as Flash } from '../../assets/images/flash.svg';
import { ReactComponent as Calendar } from '../../assets/images/event.svg';
import { ReactComponent as Checked } from '../../assets/images/checked.svg';
import { ReactComponent as Unchecked } from '../../assets/images/unchecked.svg';

import Input from '../../components/Input';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Jumbotron from '../../components/Jumbotron';
import RateSlider from '../../components/RateSlider';
import VolumeSlider from '../../components/VolumeSlider';
import DistanceSlider from '../../components/DistanceSlider';
import VehicleSelector from '../../components/VehicleSelector';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  // steps
  stepsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  steps: {
    position: 'relative',
    width: '80%',
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  stepLine: {
    position: 'absolute',
    height: '0.999px',
    backgroundColor: 'rgba(208,215,221,1)',
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
  },
  step: {
    backgroundColor: '#fff',
    border: '1px solid rgba(208,215,221,1)',
    borderRadius: 20,
    zIndex: 2,
    color: 'rgba(50,60,71,1)',
    fontFamily: 'Roboto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: 8,
      margin: '0 10px',
      padding: '0 10px',
      height: '45px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 8,
      margin: '0 20px',
      padding: '0 20px',
      height: '35px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 12,
      margin: '0 20px',
      padding: '0 20px',
      height: '35px',
    },
  },
  stepActive: {
    backgroundColor: '#00A1FF',
    border: '1px solid #00A1FF',
    color: '#fff',
  },
  // formContainer
  formContainer: {
    marginTop: 50,
  },
  formHeader: {
    fontFamily: 'Catamaran',
    fontSize: '2em',
    color: 'rgba(50,60,71,1)',
  },
  formStepHeader: {
    margin: '30px 0 10px 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  formStepIconWrapper: {
    height: 50,
    width: 50,
    backgroundColor: 'rgba(250,251,252,1)',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formStepIcon: {
    width: '40%',
    height: '50%',
    color: 'rgba(122,204,40,1)',
  },
  formStepText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '14px',
    color: 'rgba(122,204,40,1)',
    letterSpacing: 0.35,
    marginLeft: 10,
  },
  formStepSubHeader: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '12px',
    color: 'rgba(186,197,205,1)',
    letterSpacing: '0.41666671752929685px',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  step1Section2: {
    flexDirection: 'column',
  },
  step1Section2step: {
    marginTop: 10,
    marginBottom: 30,
  },
  step1Section2stepText1: {
    fontWeight: '500',
    fontSize: '14px',
    color: '#000',
  },
  step1Section2stepText2: {
    fontSize: '10px',
    color: 'rgba(152,152,152,1)',
  },
  step1Section2Checkbox: {
    padding: 0,
    marginRight: 10,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  //
  sliderWidth: {
    width: '70%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  //
  step3Slider: {
    width: '98%',
    color: '#8B9AFC',
    height: 35,
    '& .MuiSlider-track': {
      height: 48,
      borderRadius: 6,
    },
    '& .MuiSlider-rail': {
      height: 47,
      backgroundColor: '#fff',
      borderRadius: 6,
      border: '1px solid #8B9AFC',
    },
    '& .MuiSlider-mark': {
      height: 5,
      marginTop: 55,
      backgroundColor: 'rgba(0, 0, 0, 0.54)',
    },
    '& .MuiSlider-markActive': {
      height: 5,
      marginTop: 55,
      backgroundColor: 'rgba(0, 0, 0, 0.54)',
    },
    '& .MuiSlider-markLabel': {
      marginTop: 47,
      color: 'rgba(0, 0, 0, 0.54)',
    },
    '& .MuiSlider-markLabelActive': {
      marginTop: 47,
      color: 'rgba(0, 0, 0, 0.54)',
    },
    '& .MuiSlider-thumb.MuiSlider-active': {
      boxShadow: 'none',
    },
    '& .MuiSlider-thumb.Mui-focusVisible': {
      boxShadow: 'none',
    },
    '& .MuiSlider-thumb': {
      marginTop: 14,
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: '#323C47',
      '&::after': {
        fontSize: 9,
        color: '#fff',
        display: 'flex',
        content: "'< >'",
        alignItems: 'center',
        justifyContent: 'center',
      },
      '&:hover': {
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      marginTop: 38,
      marginLeft: -46,
      // borderRadius: 4,
      color: 'transparent',
      fontSize: 20,
      // position: 'absolute'
      '&::after': {
        content: "'km'",
        position: 'absolute',
        top: 10,
        left: 35,
        color: '#FFF',
        fontSize: 14,
      },
    },
  },
  step3Icons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  step3Icon: {
    cursor: 'pointer',
  },
  //
  link: {
    color: '#00A1FF',
    textDecoration: 'none',
  },
  //
  modalHeaderContainer: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalHeader: {
    color: 'rgba(0, 0, 0, 0.54)',
    margin: 0,
  },
  modalIcon: {
    cursor: 'pointer',
    color: 'rgba(0, 0, 0, 0.54)',
  },
  modalContent: {
    padding: '0 20px',
  },
  modalChipContainer: {
    marginBottom: 10,
  },
  modalForm: {
    '& > *': {
      padding: '10px 20px',
    },
  },
  modalActions: {
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& > *': {
      marginLeft: 20,
    },
  },
  buttonContainer: {
    paddingTop: 20,
    paddingBottom: 50,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      paddingTop: 50,
    },
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const [vehicles, setVehicles] = useState(new Set());
  const [vehicleCheck1, setvehicleCheck1] = useState(false);
  const [vehicleCheck2, setvehicleCheck2] = useState(false);
  const [volume, setVolume] = useState(2);
  const [KM, setKM] = useState(60);
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
  const [rate, setRate] = useState(18);
  const [rateCheckbox, setRateCheckbox] = useState(false);
  const [conditions, setConditions] = useState(false);
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');
  const [getUpdate, setGetUpdate] = useState(false);

  const days = [
    {
      id: 1,
      name: 'Lundi',
      description: 'A partir de 8h00, pendant 10 heures',
    },
    {
      id: 2,
      name: 'Mardi',
      description: 'A partir de 8h00, pendant 10 heures',
    },
    {
      id: 3,
      name: 'Mercredi',
      description: 'A partir de 8h00, pendant 10 heures',
    },
    {
      id: 4,
      name: 'Jeudi',
      description: 'A partir de 8h00, pendant 10 heures',
    },
    {
      id: 5,
      name: 'Vendredi',
      description: 'A partir de 8h00, pendant 10 heures',
    },
    {
      id: 6,
      name: 'Samedi',
      description: 'A partir de 8h00, pendant 10 heures',
    },
    {
      id: 7,
      name: 'Dimanche',
      description: 'A partir de 8h00, pendant 10 heures',
    },
  ];
  const ProfileStepper = (data) => {
    return (
      <div className={classes.steps}>
        <div className={classes.stepLine}></div>
        {data.steps.map((i) => (
          <div
            key={i.id}
            className={
              i.active ? classes.step + ' ' + classes.stepActive : classes.step
            }
          >
            {i.id}. {i.name}
          </div>
        ))}
      </div>
    );
  };
  const FormStepHeader = (data) => {
    return (
      <>
        <div className={classes.formStepHeader}>
          <div className={classes.formStepIconWrapper}>
            <data.icon className={classes.formStepIcon} />
          </div>
          <div className={classes.formStepText}>{data.title}</div>
        </div>
        <div className={classes.formStepSubHeader}>{data.subHeading}</div>
      </>
    );
  };

  return (
    <div className={classes.root}>
      <Header />
      <section id="Jumbo">
        <Jumbotron
          image={JumboImage}
          head="Votre profil a été"
          head2="validé Anne-Gabrielle !"
          buttonText="JE ME LANCE"
          description="Votre espace personnel a été activé, encore quelques informations
          et vous recevrez les offres de nos 2300+ restaurants partenaires"
        />
      </section>
      <Container maxWidth="xl">
        <section id="Steps" className={classes.stepsContainer}>
          <ProfileStepper
            steps={[
              { id: 1, name: 'SAISIE DE VOS INFORMATIONS', active: false },
              { id: 2, name: 'ACTIVATION DU COMPTE', active: false },
              { id: 3, name: 'VALIDATION DE VOS INFORMATIONS', active: true },
            ]}
          />
        </section>
        <section id="form" className={classes.formContainer}>
          <div className={classes.formHeader}>
            Plus qu’une étape avant de démarrer !
          </div>
          <section id="vehicle">
            <Grid container spacing={6}>
              <Grid item xs={12} lg={8}>
                <VehicleSelector
                  checkbox={false}
                  values={vehicles}
                  onChange={(value) => {
                    let newVehicles = new Set(vehicles);
                    newVehicles.clear();
                    newVehicles.add(value);
                    setVehicles(newVehicles);
                  }}
                />
              </Grid>
              {!vehicles.has(1) && !vehicles.has(3) && (
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
          <section id="volume">
            <VolumeSlider
              value={volume}
              onChange={(e, value) => setVolume(value)}
            />
          </section>
          <section id="distance">
            <DistanceSlider
              value={KM}
              onChange={(e, value) => value >= 2 && setKM(value)}
            />
          </section>
          <section id="responsibility">
            <FormStepHeader
              icon={Calendar}
              title="T’ES DISPO ? 😉"
              subHeading="QUELLES-SONT TES DISPONIBILITÉS ?"
            />
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
          <section id="rate">
            <RateSlider
              minimum="10"
              average="10"
              maximum="10"
              rateCheckbox={rateCheckbox}
              setRateCheckbox={(event) => setRateCheckbox((st) => !st)}
              value={rate}
              onChange={(e, value) => setRate(value)}
            />
          </section>
          <span className={classes.incrementText}>
            Pour les missions de nuit (entre 20h et 8h), les tarifs sont
            automatiquement augmentés de 10%
          </span>
          <div style={{ marginTop: 30 }}>
            <Checkbox
              disableRipple
              color="default"
              checked={conditions}
              icon={<Unchecked />}
              checkedIcon={<Checked />}
              className={classes.step5Checkbox}
              onChange={(event) => setConditions((st) => !st)}
            />
            <span className={classes.step5CheckboxText}>
              Je suis d’accord avec les{' '}
              <Link to="/" className={classes.link}>
                Conditions d’utilisation
              </Link>
            </span>
          </div>
          <div className={classes.buttonContainer}>
            <Button type="submit" text={'Soumettre mon dossier'}>
              <Flash style={{ marginRight: 10 }} />
            </Button>
          </div>
        </section>
      </Container>
      <Footer />
      <Dialog
        open={dayModal}
        maxWidth={'md'}
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
                label={'start:' + row.start + ' ↔️ end:' + row.end}
                onDelete={() => {
                  let arry = timeslots;
                  let newArray = arry[selectedDay - 1].slots.filter(
                    (slo, index2) => index2 !== index,
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
            style={{ width: 100, backgroundColor: '#FC917C' }}
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
              setEndHour('');
              setStartHour('');
            }}
          >
            Done
          </Button>
          <Button
            style={{ width: 100, backgroundColor: '#FC917C' }}
            onClick={() => {
              if (parseInt(startHour) >= parseInt(endHour)) {
                alert('start hour should be less then endhour');
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
                  alert('Cannot add overlapping time slots!');
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
