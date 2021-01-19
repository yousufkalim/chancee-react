import React, { useEffect } from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

import Card from '../../../components/Card';
import RateSlider from '../../../components/RateSlider';
import PageHeading from '../../../components/PageHeading';
import VolumeSlider from '../../../components/VolumeSlider';
import DistanceSlider from '../../../components/DistanceSlider';
import VehicleSelector from '../../../components/VehicleSelector';
import TableButton from '../../../components/TableButton';
import Texts from '../../../globals/Texts';

import { ReactComponent as Calendar } from '../../../assets/images/calendar.svg';
import { ReactComponent as SearchAvatar } from '../../../assets/images/searchavatar.svg';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: 30,
    paddingBottom: 100,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 20,
    },
  },
  svg: {
    [theme.breakpoints.down('lg')]: {
      width: 332,
    },
    [theme.breakpoints.down('sm')]: {
      width: 332,
      marginLeft: -51,
    },
    [theme.breakpoints.up('xs')]: {
      width: 280,
      marginLeft: -51,
    },
  },
  rate: {
    fontSize: '3.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
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
    [theme.breakpoints.down('sm')]: {
      width: 225,
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
    [theme.breakpoints.down('sm')]: {
      width: 225,
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

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [props.page]);

  return (
    <div className={classes.content}>
      <PageHeading left={Texts.searchTitle} />
      <Card>
        <Grid container spacing={8}>
          <Grid item xs={12} xl={6}>
            <DistanceSlider
              value={props.KM}
              onChange={(e, value) => value >= 2 && props.setKM(value)}
            />
          </Grid>
          <Grid item xs={12} xl={6}>
            <RateSlider
              search={true}
              value={props.rate}
              onChange={(e, value) => props.setRate(value)}
            />
          </Grid>
          <Grid item xs={12} xl={6}>
            <VolumeSlider
              value={props.volume}
              onChange={(e, value) => props.setVolume(value)}
            />
          </Grid>
          <Grid item xs={12} xl={6}>
            <div id="rating" style={{ marginBottom: '20px' }}>
              <div className={classes.subHeading}>{Texts.searchRating} :</div>
              <Rating
                className={classes.rate}
                value={props.rating}
                onChange={(event, newValue) => {
                  newValue && props.setRating(newValue);
                }}
                name="ratging"
              />
            </div>
            <div id="hours">
              <div className={classes.sliderHeader}>
                <div className={classes.sliderHeaderIcon}>
                  <Calendar className={classes.sliderHeaderIconSVG} />
                </div>
                <div className={classes.sliderHeaderText}>
                  {Texts.searchDate}:
                </div>
              </div>

              <Input
                type="date"
                name="day"
                value={props.day}
                label={Texts.searchDay}
                min={moment().format('YYYY-MM-DD')}
                onChange={({ target: { name, value } }) => props.setDay(value)}
              />
              <Select
                label={Texts.searchHourStart}
                value={props.from}
                onChange={({ target: { name, value } }) =>
                  Number(value) >= Number(0) &&
                  Number(value) <= Number(23) &&
                  props.setFrom(value)
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
                label={Texts.searchHourEnd}
                value={props.to}
                onChange={({ target: { name, value } }) =>
                  Number(value) >= Number(0) &&
                  Number(value) <= Number(23) &&
                  props.setTo(value)
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
                label={Texts.searchDeliveries}
                value={props.deliveries}
                onChange={({ target: { name, value } }) =>
                  Number(value) >= Number(1) &&
                  Number(value) <= Number(30) &&
                  props.setDeliveries(value)
                }
                values={[
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
                  24,
                  25,
                  26,
                  27,
                  28,
                  29,
                  30,
                ]}
              />
            </div>
          </Grid>
          <Grid item xs={12} xl={6}>
            <VehicleSelector
              checkbox={false}
              values={props.vehicles}
              onChange={(value) => {
                let newVehicles = new Set(props.vehicles);
                let isPresent = newVehicles.has(value);
                if (isPresent) {
                  newVehicles.delete(value);
                } else {
                  newVehicles.add(value);
                }
                props.setVehicles(newVehicles);
              }}
            />
          </Grid>
          <Grid item xs={12} xl={6}>
            <div className={classes.center}>
              <SearchAvatar className={classes.svg} />
              <TableButton
                fullWidth
                text={Texts.searchStart}
                style={{ marginTop: 20 }}
                onClick={() => props.setPage(2)}
              />
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Search;
