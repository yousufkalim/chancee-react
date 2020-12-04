import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Tick } from '../assets/images/tick.svg';

const useStyles = makeStyles((theme) => ({
  inputLabel: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '12px',
    color: 'rgba(0, 0, 0, 0.5)',
    letterSpacing: 0.4,
    marginTop: 15,
    marginBottom: 5,
  },
  inputContainer: {
    height: 44,
    borderWidth: 1,
    borderRadius: 4,
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'row',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    color: 'rgba(233,239,244,1)',
    justifyContent: 'space-between',
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
    width: 40,
    height: '100%',
    display: 'grid',
    placeItems: 'center',
  },
}));

const Input = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <>
      {props.label && <div className={classes.inputLabel}>{props.label}</div>}
      <div
        className={classes.inputContainer}
        ref={ref}
        style={props.fullWidth ? { width: '100%' } : {}}
      >
        {props.left}
        <input
          type={props.type ? props.type : 'text'}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
          placeholder={props.placeholder}
          {...props.spreadProps}
          className={classes.input}
        />
        {props.valid && (
          <div className={classes.inputIcon}>
            <Tick />
          </div>
        )}
        {props.right}
      </div>
    </>
  );
});

export default Input;
