import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

import { ReactComponent as GPS } from '../assets/images/gps.svg';

const useStyles = makeStyles((theme) => ({
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
  sliderSubHeading: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '12px',
    color: 'rgba(186,197,205,1)',
    letterSpacing: '0.41666671752929685px',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
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
      <div className={classes.sliderHeader}>
        <div className={classes.sliderHeaderIcon}>
          <GPS className={classes.sliderHeaderIconSVG} />
        </div>
        <div className={classes.sliderHeaderText}>TON RAYON D’ACTION</div>
      </div>
      <div className={classes.sliderSubHeading}>
        QUEL EST VOTRE RAYON D’ACTION, EN KM ?
      </div>
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
