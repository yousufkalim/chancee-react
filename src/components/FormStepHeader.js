import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formStepHeader: {
    margin: '30px 0 10px 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  formStepIconWrapper: {
    height: 50,
    width: 50,
    backgroundColor: 'rgba(250,251,252,1)',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formStepIcon: {
    width: '40%',
    height: '50%',
    color: 'rgba(122,204,40,1)',
  },
  formStepText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '14px',
    color: 'rgba(122,204,40,1)',
    letterSpacing: 0.35,
    marginLeft: 10,
  },
  formStepSubHeader: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '12px',
    color: 'rgba(186,197,205,1)',
    letterSpacing: '0.41666671752929685px',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.formStepHeader}>
        <div className={classes.formStepIconWrapper}>
          <props.icon className={classes.formStepIcon} />
        </div>
        <div className={classes.formStepText}>{props.heading}</div>
      </div>
      {props.subHeading && (
        <div className={classes.formStepSubHeader}>{props.subHeading}</div>
      )}
    </>
  );
}
