import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as JumboImage } from '../assets/images/Home2.svg';

import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
  },
}));

export default function Verifiy(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Jumbotron
        image={JumboImage}
        head="Profile submitted for"
        head2="verification !"
        buttonText="DÉMARRER"
        description="Wait for the admin to verify your account !"
      />
    </div>
  );
}
