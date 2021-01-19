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
import Heading from './FormStepHeader';
import Texts from '../globals/Texts';

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
  subHeading: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '12px',
    color: 'rgba(186,197,205,1)',
    letterSpacing: '0.41666671752929685px',
    textTransform: 'uppercase',
  },
  select: {
    width: '100%',
    height: 45,
    outline: 0,
    color: '#000',
    borderRadius: 4,
    padding: '14px 12px',
    border: '2px solid #ccc',
    backgroundColor: 'transparent',
    '&::placeholder': {
      color: '#000',
    },
    [theme.breakpoints.down('sm')]: {
      width: 225,
    },
  },
  slotList: {
    listStyle: 'none',
  },
}));

const Select = (props) => {
  const classes = useStyles();
  return (
    <>
      <p className={classes.subHeading}>{props.label}</p>
      <select
        name={props.name}
        value={props.value}
        selected={props.value}
        onChange={props.onChange}
        className={classes.select}
      >
        {props.values.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default function Profile(props) {
  const classes = useStyles();
  const [endHour, setEndHour] = useState(23);
  const [startHour, setStartHour] = useState(1);
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
    },
    {
      id: 2,
      name: 'Mardi',
    },
    {
      id: 3,
      name: 'Mercredi',
    },
    {
      id: 4,
      name: 'Jeudi',
    },
    {
      id: 5,
      name: 'Vendredi',
    },
    {
      id: 6,
      name: 'Samedi',
    },
    {
      id: 7,
      name: 'Dimanche',
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
            <span className={classes.text2}>
              <ul className={classes.slotList}>
                {timeslots[day.id - 1].slots.map((slot) => (
                  <li>
                    {slot.from}h à {slot.to}h
                  </li>
                ))}
              </ul>
            </span>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={dayModal}
        onClose={() => setDayModal((st) => !st)}
        title={Texts.addTimeslot}
        body={
          <>
            <Grid container>
              {timeslots[selectedDay - 1].slots.map((row, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  key={row.from + row.to}
                  className={classes.chips}
                >
                  <Chip
                    label={'Début:' + row.from + 'h ↔️ Fin:' + row.to + 'h'}
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
              <Select
                label={Texts.searchHourStart}
                value={startHour}
                onChange={({ target: { name, value } }) =>
                  Number(value) >= Number(0) &&
                  Number(value) <= Number(23) &&
                  setStartHour(value)
                }
                values={[
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                  21,
                  22,
                  23,
                ]}
              />
              <Select
                label={Texts.searchHourStart}
                value={endHour}
                onChange={({ target: { name, value } }) =>
                  Number(value) >= Number(0) &&
                  Number(value) <= Number(23) &&
                  setEndHour(value)
                }
                values={[
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                  21,
                  22,
                  23,
                ]}
              />
            </div>
          </>
        }
        actions={
          <>
            <TableButton
              fullWidth
              disabled={timeslots[selectedDay - 1].slots.length >= 3}
              onClick={() => {
                if (
                  parseInt(startHour) >= parseInt(endHour) ||
                  startHour === '' ||
                  endHour === ''
                ) {
                  alert('Horodatage invalide!');
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
                    alert(
                      "Impossible d'ajouter des plages horaires qui se chevauchent!",
                    );
                  }
                  setGetUpdate((st) => !st);
                }
              }}
              text={
                timeslots[selectedDay - 1].slots.length >= 3
                  ? 'Max 3 permis!'
                  : 'Ajouter un horodatage'
              }
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
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
                setEndHour('');
                setStartHour('');
              }}
              text="Terminé"
            />
          </>
        }
      />
    </>
  );
}
