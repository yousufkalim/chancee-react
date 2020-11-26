import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import { ReactComponent as Tick } from '../../assets/images/tick.svg';

const useStyles = makeStyles((theme) => ({
  inputLabel: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '12px',
    color: 'rgba(186,197,205,1)',
    letterSpacing: 0.4,
    marginTop: 15,
    marginBottom: 5,
  },
  inputContainer: {
    maxHeight: 52,
    backgroundColor: '#fff',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    color: 'rgba(233,239,244,1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(233,239,244,1)',
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
  },
  input: {
    width: '100%',
    height: '100%',
    padding: '14px 12px',
    color: 'rgba(50,60,71,1)',
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    '&::placeholder': {
      color: 'rgba(50,60,71,1)',
    },
  },
  inputIcon: {
    marginRight: 20,
  },
}));

export default function Input(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.inputLabel}>{props.label}</div>
      <div className={classes.inputContainer}>
        {props.left}
        <input
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
          className={classes.input}
          placeholder={props.placeholder}
          type={props.type ? props.type : 'text'}
        />
        {props.valid ? (
          <div className={classes.inputIcon}>
            <Tick className={classes.stepperIcon} />
          </div>
        ) : (
          <div className={classes.inputIcon}>
            <ErrorOutlineIcon className={classes.stepperIcon} />
          </div>
        )}
        {props.right}
      </div>
    </>
  );
}
