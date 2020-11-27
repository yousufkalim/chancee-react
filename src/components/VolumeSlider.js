import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

import { ReactComponent as Cycle } from '../assets/images/cycle.svg';
import { ReactComponent as User2step21 } from '../assets/images/user2step21.svg';
import { ReactComponent as User2step22 } from '../assets/images/user2step22.svg';
import { ReactComponent as User2step23 } from '../assets/images/user2step23.svg';

import Heading from '../components/FormStepHeader';

const useStyles = makeStyles((theme) => ({
  slider1: {
    width: '2%',
    color: '#89ED4A',
    height: 54,
    '& .MuiSlider-thumb': {
      display: 'none',
    },
    '& .MuiSlider-track': {
      height: 65,
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
      border: '1px solid #89ED4A',
    },
    '& .MuiSlider-rail': {
      height: 65,
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
      backgroundColor: '#fff',
      border: '1px solid #89ED4A',
    },
    '&.Mui-disabled': {
      color: '#89ED4A',
    },
  },
  slider2: {
    width: '98%',
    color: '#89ED4A',
    height: 54,
    '& .MuiSlider-thumb': {
      display: 'none',
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    '& .MuiSlider-track': {
      height: 65,
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      border: '1px solid #89ED4A',
    },
    '& .MuiSlider-rail': {
      height: 65,
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      backgroundColor: '#fff',
      border: '1px solid #89ED4A',
    },
  },
  sliderIcons: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sliderIcon: {
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 70,
    },
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  return (
    <>
      <Heading
        icon={Cycle}
        heading={props.heading ? props.heading : 'VOLUME DE LIVRAISON'}
        subHeading={
          props.subHeading
            ? props.subHeading
            : 'QUEL EST TON VOLUME POSSIBLE DE LIVRAISON ?'
        }
      />
      <Grid container className={classes.sliderWidth}>
        <Grid item xs={12}>
          <Slider
            value={1}
            min={0}
            step={1}
            max={1}
            disabled={true}
            className={classes.slider1}
          />
          <Slider
            min={1}
            step={1}
            max={3}
            className={classes.slider2}
            value={props.value}
            onChange={props.onChange}
          />
        </Grid>
        <Grid item xs={12} className={classes.sliderIcons}>
          <User2step21
            onClick={() => props.onChange('', 1)}
            className={classes.sliderIcon}
          />
          <User2step22
            onClick={() => props.onChange('', 2)}
            className={classes.sliderIcon}
          />
          <User2step23
            onClick={() => props.onChange('', 3)}
            className={classes.sliderIcon}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
