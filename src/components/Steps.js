import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  steps: {
    margin: 'auto',
    position: 'relative',
    width: '80%',
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  stepLine: {
    position: 'absolute',
    height: '0.999px',
    backgroundColor: 'rgba(208,215,221,1)',
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
  },
  step: {
    backgroundColor: '#fff',
    border: '1px solid rgba(208,215,221,1)',
    borderRadius: 20,
    zIndex: 2,
    color: 'rgba(50,60,71,1)',
    fontFamily: 'Roboto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: 8,
      margin: '0 10px',
      padding: '0 10px',
      height: '45px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 8,
      margin: '0 20px',
      padding: '0 20px',
      height: '35px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 12,
      margin: '0 20px',
      padding: '0 20px',
      height: '35px',
    },
  },
  stepActive: {
    backgroundColor: '#00A1FF',
    border: '1px solid #00A1FF',
    color: '#fff',
  },
}));

export default function Steps(props) {
  const classes = useStyles();

  return (
    <div className={classes.steps}>
      <div className={classes.stepLine}></div>
      {props.steps.map((i) => (
        <div
          key={i.id}
          className={
            i.active ? classes.step + ' ' + classes.stepActive : classes.step
          }
        >
          {i.id}. {i.name}
        </div>
      ))}
    </div>
  );
}
