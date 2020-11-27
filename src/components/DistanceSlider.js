import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

import { ReactComponent as GPS } from '../assets/images/gps.svg';

import Heading from '../components/FormStepHeader';

const useStyles = makeStyles((theme) => ({
  slider: {
    width: '100%',
    color: '#8B9AFC',
    height: 54,
    '& .MuiSlider-track': {
      height: 65,
      borderRadius: 6,
      border: '1px solid #8B9AFC',
    },
    '& .MuiSlider-rail': {
      height: 65,
      backgroundColor: '#fff',
      borderRadius: 6,
      border: '1px solid #8B9AFC',
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
        content: "'km'",
        position: 'absolute',
        top: 4,
        left: 30,
        whiteSpace: 'nowrap',
        color: '#FFF',
        fontSize: 20,
      },
    },
  },
}));

const DistanceSlider = (props) => {
  const classes = useStyles();

  return (
    <>
      <Heading
        icon={GPS}
        heading={props.heading ? props.heading : 'TON RAYON D’ACTION'}
        subHeading={
          props.subHeading
            ? props.subHeading
            : 'QUEL EST VOTRE RAYON D’ACTION, EN KM ?'
        }
      />
      <Grid container>
        <Grid item xs={12}>
          <Slider
            min={0}
            step={1}
            max={100}
            marks={[
              {
                value: 2,
                label: '2km',
              },
              {
                value: 100,
                label: '100km',
              },
            ]}
            value={props.value}
            valueLabelDisplay="on"
            onChange={props.onChange}
            className={classes.slider}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DistanceSlider;
