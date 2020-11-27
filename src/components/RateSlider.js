import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

import { ReactComponent as Checked } from '../assets/images/checked.svg';
import { ReactComponent as Unchecked } from '../assets/images/unchecked.svg';
import { ReactComponent as CoinStack } from '../assets/images/coinStack.svg';

import Heading from '../components/FormStepHeader';

const useStyles = makeStyles((theme) => ({
  slider: {
    width: '100%',
    color: '#FC917C',
    height: 54,
    '& .MuiSlider-track': {
      height: 65,
      borderRadius: 6,
      border: '1px solid #FC917C',
    },
    '& .MuiSlider-rail': {
      height: 65,
      backgroundColor: '#fff',
      borderRadius: 6,
      border: '1px solid #FC917C',
    },
    '& .MuiSlider-mark': {
      height: 5,
      marginTop: 72,
      backgroundColor: 'rgba(0, 0, 0, 0.54)',
    },
    '& .MuiSlider-markActive': {
      height: 5,
      marginTop: 72,
      backgroundColor: 'rgba(0, 0, 0, 0.54)',
    },
    '& .MuiSlider-markLabel': {
      marginTop: 64,
      color: 'rgba(0, 0, 0, 0.54)',
    },
    '& .MuiSlider-markLabelActive': {
      marginTop: 64,
      color: 'rgba(0, 0, 0, 0.54)',
    },
    '& .MuiSlider-thumb.MuiSlider-active': {
      boxShadow: 'none',
    },
    '& .MuiSlider-thumb.Mui-focusVisible': {
      boxShadow: 'none',
    },
    '& .MuiSlider-thumb': {
      marginTop: 24,
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
      marginLeft: -104,
      color: 'transparent',
      fontSize: 20,
      '&::after': {
        content: "'€ / heure'",
        position: 'absolute',
        top: 4,
        left: 30,
        whiteSpace: 'nowrap',
        color: '#FFF',
        fontSize: 20,
      },
    },
  },
  sliderInfo: {
    padding: '20px',
  },
  sliderInfoText: {
    color: 'red',
    fontSize: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '8px 0',
  },
  sliderCheckbox: {
    width: 25,
    padding: 0,
    marginRight: 10,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  sliderCheckboxText: {
    fontWeight: '500',
    fontSize: '14px',
    color: 'rgba(186,197,205,1)',
  },
  link: {
    color: '#00A1FF',
    textDecoration: 'none',
  },
}));

const RateSlider = (props) => {
  const classes = useStyles();

  return (
    <>
      <Heading
        icon={CoinStack}
        heading={props.heading ? props.heading : 'FIXE TES TARIFS'}
        subHeading={
          props.subHeading ? props.subHeading : 'QUEL EST TON TARIF PAR HEURE ?'
        }
      />
      <Grid container>
        <Grid
          item
          xs={12}
          md={props.search ? 12 : 8}
          style={
            !props.search
              ? {
                  border: '1px dashed rgba(186,197,205,1)',
                  padding: 20,
                  borderRadius: 6,
                }
              : {}
          }
        >
          {!props.search && (
            <>
              <Checkbox
                disableRipple
                color="default"
                icon={<Unchecked />}
                checkedIcon={<Checked />}
                className={classes.sliderCheckbox}
                checked={props.rateCheckbox}
                onChange={props.setRateCheckbox}
              />
              <span className={classes.sliderCheckboxText}>
                Je souhaite recevoir des offres avec une{' '}
                <Link to="/" className={classes.link}>
                  Rémunération à l’heure
                </Link>
              </span>
            </>
          )}
          <Slider
            min={8}
            step={1}
            max={26}
            marks={[
              {
                value: 8,
                label: '8€',
              },
              {
                value: 26,
                label: '26€',
              },
            ]}
            valueLabelDisplay="on"
            className={classes.slider}
            value={props.value}
            onChange={props.onChange}
          />
          {!props.search && (
            <Grid item xs={12} className={classes.sliderInfo} container>
              <Grid item xs={12} md={9} className={classes.sliderInfoText}>
                <span>TARIF MINIMUM PAR LES AUTRES LIVREURS:</span>
                <span>{props.minimum}€</span>
              </Grid>
              <Grid item xs={12} md={9} className={classes.sliderInfoText}>
                <span>TARIF MOYEN PAR LES AUTRES LIVREURS:</span>
                <span>{props.average}€</span>
              </Grid>
              <Grid item xs={12} md={9} className={classes.sliderInfoText}>
                <span>TARIF MAXIMAL PAR LES AUTRES LIVREURS:</span>
                <span>{props.maximum}€</span>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default RateSlider;
