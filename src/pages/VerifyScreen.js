import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';

import { ReactComponent as JumboImage } from '../assets/images/Home2.svg';

import Steps from '../components/Steps';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
  },
}));

export default function Verifiy(props) {
  const classes = useStyles();
  const store = useSelector((state) => state);

  return (
    <div className={classes.root}>
      <Header />
      <section id="Jumbo">
        <Jumbotron
          image={JumboImage}
          head="Profile submitted for"
          head2="verification !"
          buttonText="DÉMARRER"
          description="Wait for the admin to verify your account !"
        />
      </section>
      <Container maxWidth="xl">
        <section id="Steps">
          <Steps
            steps={
              store.user.role === 'company'
                ? [
                    {
                      id: 1,
                      name: 'SAISIE DE VOS INFORMATIONS',
                      active: false,
                    },
                    {
                      id: 2,
                      name: 'VALIDATION DE VOS INFORMATIONS',
                      active: true,
                    },
                  ]
                : [
                    {
                      id: 1,
                      name: 'SAISIE DE VOS INFORMATIONS',
                      active: false,
                    },
                    {
                      id: 2,
                      name: 'VALIDATION DE VOS INFORMATIONS',
                      active: true,
                    },
                    { id: 3, name: 'ACTIVATION DU COMPTE', active: false },
                  ]
            }
          />
        </section>
      </Container>
    </div>
  );
}
