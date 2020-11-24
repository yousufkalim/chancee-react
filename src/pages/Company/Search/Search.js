import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';

import Card from '../../../components/Card';
import Header from '../../../components/HeaderCompany';
import RateSlider from '../../../components/RateSlider';
import PageHeading from '../../../components/PageHeading';
import VolumeSlider from '../../../components/VolumeSlider';
import DistanceSlider from '../../../components/DistanceSlider';
import VehicleSelector from '../../../components/VehicleSelector';
import Button from '../../../components/Button';

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
  center: {
    width: '100%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const [KM, setKM] = useState(60);
  const [rate, setRate] = useState(18);
  const [volume, setVolume] = useState(2);
  const [rating, setRating] = useState(3);
  const [vehicles, setVehicles] = useState(new Set());
  const [day, setDay] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [deliveries, setDeliveries] = useState('');

  const Input = (data) => {
    return (
      <>
        <p className={classes.subHeading}>{data.label}</p>
        <input
          type={props.type}
          name={data.name}
          value={data.value}
          onChange={data.onChange}
          className={classes.input}
        />
      </>
    );
  };

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
                  label="JOUR :"
                  name="day"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />
                <Input
                  label="HEURE DE DEMARRAGE :"
                  type="number"
                  name="from"
                  value={from}
                  onChange={(e) =>
                    Number(e.target.value) > Number(0) &&
                    Number(e.target.value) < Number(23) &&
                    setFrom(e.target.value)
                  }
                />
                <Input
                  label="HEURE DE FIN :"
                  type="number"
                  name="to"
                  value={to}
                  onChange={(e) =>
                    Number(e.target.value) > Number(0) &&
                    Number(e.target.value) < Number(23) &&
                    setTo(e.target.value)
                  }
                />
                <Input
                  label="NOMBRE DE LIVREURS SOUHAITES :"
                  type="number"
                  name="deliveries"
                  value={deliveries}
                  onChange={(e) => setDeliveries(e.target.value)}
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
                    props.history.push(`${props.match.url}/result`)
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
