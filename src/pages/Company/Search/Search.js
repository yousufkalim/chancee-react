import React, { useState } from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

import Card from '../../../components/Card';
import Button from '../../../components/Button';
import Header from '../../../components/HeaderCompany';
import RateSlider from '../../../components/RateSlider';
import PageHeading from '../../../components/PageHeading';
import VolumeSlider from '../../../components/VolumeSlider';
import DistanceSlider from '../../../components/DistanceSlider';
import VehicleSelector from '../../../components/VehicleSelector';

import { ReactComponent as Calendar } from '../../../assets/images/calendar.svg';
import { ReactComponent as SearchAvatar } from '../../../assets/images/searchavatar.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F5F7FB',
    paddingTop: 90,
    paddingLeft: 90,
    minHeight: '100vh',
  },
  content: {
    padding: 30,
    paddingBottom: 100,
  },
  subHeading: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '12px',
    color: 'rgba(186,197,205,1)',
    letterSpacing: '0.41666671752929685px',
    textTransform: 'uppercase',
  },
  sliderHeader: {
    margin: '0px 0 10px 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderHeaderIcon: {
    height: 50,
    width: 50,
    backgroundColor: 'rgba(250,251,252,1)',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderHeaderIconSVG: {
    width: '40%',
    height: '50%',
    color: 'rgba(122,204,40,1)',
  },
  sliderHeaderText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '14px',
    color: 'rgba(122,204,40,1)',
    letterSpacing: 0.35,
    marginLeft: 10,
  },
  input: {
    width: 281,
    height: 37,
    outline: 0,
    color: '#000',
    padding: '14px 12px',
    borderRadius: 6,
    border: '2px solid #ccc',
    backgroundColor: 'transparent',
    '&::placeholder': {
      color: '#000',
    },
  },
  select: {
    width: 281,
    height: 37,
    outline: 0,
    color: '#000',
    borderRadius: 6,
    padding: '0 12px',
    border: '2px solid #ccc',
    backgroundColor: 'transparent',
    '&::placeholder': {
      color: '#000',
    },
  },
  center: {
    width: '100%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
  },
}));

const Input = (props) => {
  const classes = useStyles();
  return (
    <>
      <p className={classes.subHeading}>{props.label}</p>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={classes.input}
        min={props.min}
        max={props.max}
      />
    </>
  );
};
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

const Search = (props) => {
  const classes = useStyles();
  const [KM, setKM] = useState(60);
  const [rate, setRate] = useState(18);
  const [volume, setVolume] = useState(2);
  const [rating, setRating] = useState(3);
  const [vehicles, setVehicles] = useState(new Set([4]));
  const [day, setDay] = useState(moment().format('YYYY-MM-DD'));
  const [from, setFrom] = useState(6);
  const [to, setTo] = useState(8);
  const [deliveries, setDeliveries] = useState('1');

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <PageHeading left="RECHERCHER UN LIVREUR" />
        <Card>
          <Grid container spacing={8}>
            <Grid item xs={12} xl={6}>
              <DistanceSlider
                value={KM}
                onChange={(e, value) => value >= 2 && setKM(value)}
              />
            </Grid>
            <Grid item xs={12} xl={6}>
              <RateSlider
                search={true}
                value={rate}
                onChange={(e, value) => setRate(value)}
              />
            </Grid>
            <Grid item xs={12} xl={6}>
              <VolumeSlider
                value={volume}
                onChange={(e, value) => setVolume(value)}
              />
            </Grid>
            <Grid item xs={12} xl={6}>
              <div id="rating" style={{ marginBottom: '20px' }}>
                <div className={classes.subHeading}>NOTE MINIMUM :</div>
                <Rating
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                  style={{ fontSize: '3.5rem' }}
                  name="ratging"
                />
              </div>
              <div id="hours">
                <div className={classes.sliderHeader}>
                  <div className={classes.sliderHeaderIcon}>
                    <Calendar className={classes.sliderHeaderIconSVG} />
                  </div>
                  <div className={classes.sliderHeaderText}>
                    DATE ET HEURE DE LA MISSION:
                  </div>
                </div>
                <Input
                  type="date"
                  name="day"
                  value={day}
                  label="JOUR :"
                  min={moment().format('YYYY-MM-DD')}
                  onChange={({ target: { name, value } }) => setDay(value)}
                />
                <Select
                  label="HEURE DE DEMARRAGE :"
                  value={from}
                  onChange={({ target: { name, value } }) =>
                    Number(value) >= Number(0) &&
                    Number(value) <= Number(23) &&
                    setFrom(value)
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
                  label="HEURE DE FIN :"
                  value={to}
                  onChange={({ target: { name, value } }) =>
                    Number(value) >= Number(0) &&
                    Number(value) <= Number(23) &&
                    setTo(value)
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
                <Input
                  label="NOMBRE DE LIVREURS SOUHAITES :"
                  type="number"
                  name="deliveries"
                  value={deliveries}
                  onChange={({ target: { name, value } }) =>
                    Number(value) > Number(0) &&
                    Number(value) <= 50 &&
                    setDeliveries(value)
                  }
                />
              </div>
            </Grid>
            <Grid item xs={12} xl={6}>
              <VehicleSelector
                checkbox={false}
                values={vehicles}
                onChange={(value) => {
                  let newVehicles = new Set(vehicles);
                  let isPresent = newVehicles.has(value);
                  if (isPresent) {
                    newVehicles.delete(value);
                  } else {
                    newVehicles.add(value);
                  }
                  setVehicles(newVehicles);
                }}
              />
            </Grid>
            <Grid item xs={12} xl={6}>
              <div className={classes.center}>
                <SearchAvatar />
                <Button
                  text="RECHERCHER"
                  style={{ marginTop: 20 }}
                  onClick={() =>
                    props.history.push(`${props.match.url}/result`, {
                      filters: {
                        KM,
                        rate,
                        volume,
                        rating,
                        vehicles,
                        day,
                        from,
                        to,
                        deliveries,
                      },
                    })
                  }
                />
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
};

export default Search;
