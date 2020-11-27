import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Calendar } from '../assets/images/event.svg';
import { ReactComponent as Checked } from '../assets/images/checked.svg';
import { ReactComponent as Unchecked } from '../assets/images/unchecked.svg';

import Input from './Input';
import Button from './Button';
import Heading from './FormStepHeader';

const useStyles = makeStyles((theme) => ({
  step1Section2: {
    flexDirection: 'column',
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
      margin: '0px 10px',
    },
  },
  marginVertical: {
    margin: '10px 0',
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const [endHour, setEndHour] = useState('');
  const [startHour, setStartHour] = useState('');
  const [selectedDay, setSelectedDay] = useState(1);
  const [getUpdate, setGetUpdate] = useState(false);
  const [dayModal, setDayModal] = React.useState(false);
  const [timeslots, setTimeSlots] = useState([
    { day: 1, checked: false, slots: [] },
    { day: 2, checked: false, slots: [] },
    { day: 3, checked: false, slots: [] },
    { day: 4, checked: false, slots: [] },
    { day: 5, checked: false, slots: [] },
    { day: 6, checked: false, slots: [] },
    { day: 7, checked: false, slots: [] },
  ]);

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

  React.useEffect(() => {
    props.onChange(timeslots);
    // eslint-disable-next-line
  }, [timeslots, getUpdate]);

  return (
    <>
      <Heading
        icon={Calendar}
        heading={props.heading ? props.heading : 'T’ES DISPO ? 😉'}
        subHeading={
          props.subHeading
            ? props.subHeading
            : 'QUELLES-SONT TES DISPONIBILITÉS ?'
        }
      />
      <Grid container>
        {days.map((day) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={day.id}
            className={classes.marginVertical}
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
              <span className={classes.step1Section2stepText1}>{day.name}</span>
            </div>
            <span className={classes.step1Section2stepText2}>
              {day.description}
            </span>
          </Grid>
        ))}
      </Grid>
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
            style={{ backgroundColor: '#FC917C' }}
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
            style={{ backgroundColor: '#FC917C' }}
            disabled={timeslots[selectedDay - 1].slots.length >= 3}
            onClick={() => {
              if (
                parseInt(startHour) >= parseInt(endHour) ||
                startHour === '' ||
                endHour === ''
              ) {
                alert('Invalid Timestamp!');
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
            {timeslots[selectedDay - 1].slots.length >= 3
              ? 'Max 3 allowed!'
              : 'Add Timestamp'}
          </Button>
        </div>
      </Dialog>
    </>
  );
}
