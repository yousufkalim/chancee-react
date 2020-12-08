import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Calendar } from '../assets/images/event.svg';
import { ReactComponent as Checked } from '../assets/images/checked.svg';
import { ReactComponent as Unchecked } from '../assets/images/unchecked.svg';

import Modal from './Modal';
import TableButton from './TableButton';
import Input from './ProfileInput';
import Heading from './FormStepHeader';

const useStyles = makeStyles((theme) => ({
  text: {
    fontWeight: '500',
    fontSize: '14px',
    color: '#000',
  },
  text2: {
    fontSize: '10px',
    color: 'rgba(152,152,152,1)',
  },
  checkbox: {
    padding: 0,
    marginRight: 10,
    cursor: 'copy',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  chips: {
    marginBottom: 10,
  },
  marginVertical: {
    margin: '10px 0',
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const [endHour, setEndHour] = useState('23');
  const [startHour, setStartHour] = useState('2');
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
  const [firstRender, setfirstRender] = useState(true);

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
    !firstRender && props.onChange(timeslots);
    // eslint-disable-next-line
  }, [timeslots, getUpdate]);

  React.useEffect(() => {
    props.defaultValue && setTimeSlots(props.defaultValue);
    setfirstRender(false);
    // eslint-disable-next-line
  }, []);

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
                className={classes.checkbox}
              />
              <span className={classes.text}>{day.name}</span>
            </div>
            <span className={classes.text2}>{day.description}</span>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={dayModal}
        onClose={() => setDayModal((st) => !st)}
        title="Add Availability"
        body={
          <>
            <Grid container>
              {timeslots[selectedDay - 1].slots.map((row, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={row.from + row.to}
                  className={classes.chips}
                >
                  <Chip
                    label={'start:' + row.from + ' ↔️ end:' + row.to}
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
            <div>
              <Input
                fullWidth
                type="number"
                value={startHour}
                label="Start Hour"
                placeholder="Start Hour"
                onChange={(e) => {
                  if (e.target.value >= 0 && e.target.value < 23) {
                    setStartHour(e.target.value);
                  }
                }}
                valid={startHour !== '' && startHour <= 23}
              />
              <Input
                fullWidth
                type="number"
                value={endHour}
                label="End Hour"
                placeholder="End Hour"
                onChange={(e) => {
                  if (e.target.value >= 0 && e.target.value < 24) {
                    setEndHour(e.target.value);
                  }
                }}
                valid={endHour !== '' && endHour <= 23}
              />
            </div>
          </>
        }
        actions={
          <>
            <TableButton
              fullWidth
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
                // setEndHour('');
                // setStartHour('');
              }}
              text="Done"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TableButton
              fullWidth
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
                      parseInt(startHour) === parseInt(timeslot.from) ||
                      parseInt(endHour) <= parseInt(timeslot.to) ||
                      (parseInt(startHour) > parseInt(timeslot.from) &&
                        parseInt(startHour) < parseInt(timeslot.to))
                    ) {
                      shouldAdd = false;
                    }
                    return timeslot;
                  });
                  if (shouldAdd) {
                    times.push({
                      from: startHour,
                      to: endHour,
                    });
                    timeslotArray[selectedDay - 1].slots = times;
                    setTimeSlots(timeslotArray);
                  } else {
                    alert('Cannot add overlapping time slots!');
                  }
                  setGetUpdate((st) => !st);
                }
              }}
              text={
                timeslots[selectedDay - 1].slots.length >= 3
                  ? 'Max 3 allowed!'
                  : 'Add Timestamp'
              }
            />
          </>
        }
      />
    </>
  );
}
