import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

import { ReactComponent as Cycle } from '../assets/images/cycle.svg';
import { ReactComponent as User2step21 } from '../assets/images/user2step21.svg';
import { ReactComponent as User2step22 } from '../assets/images/user2step22.svg';
import { ReactComponent as User2step23 } from '../assets/images/user2step23.svg';

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
  // step2
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
      <div className={classes.sliderHeader}>
        <div className={classes.sliderHeaderIcon}>
          <Cycle className={classes.sliderHeaderIconSVG} />
        </div>
        <div className={classes.sliderHeaderText}>VOLUME DE LIVRAISON</div>
      </div>
      <div className={classes.sliderSubHeading}>
        QUEL EST TON VOLUME POSSIBLE DE LIVRAISON ?
      </div>
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
