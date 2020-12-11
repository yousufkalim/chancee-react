import React, { useEffect } from 'react';
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
  bottomM: { marginBottom: 40 },
}));

export default function Verifiy(props) {
  const classes = useStyles();
  const store = useSelector((state) => state);

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <div className={classes.root}>
      <Header />
      <section id="Jumbo">
        <Jumbotron
          image={JumboImage}
          head="Le profil a été"
          head2="rejeté !"
          buttonText="DÉMARRER"
          description="Contactez l'administrateur pour plus de détails !"
        />
      </section>
      <Container maxWidth="xl">
        <section id="Steps" className={classes.bottomM}>
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
