import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    margin: '20px 0',
    padding: '0px 15px',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
  },
}));

const Heading = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.headerText}>{props.left}</div>
      <div className={classes.headerText}>{props.right}</div>
    </div>
  );
};

export default Heading;
