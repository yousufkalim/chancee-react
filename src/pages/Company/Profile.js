import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ProfileImage from '../../assets/images/avatar.svg';

import Card from '../../components/Card';
import Button from '../../components/Button';
import Header from '../../components/HeaderCompany';
import ProfileCard from '../../components/ProfileCard';
import DocumentUploading from '../../components/DocumentUploading';
import AvailabilitySelector from '../../components/AvailabilitySelector';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F5F7FB',
    paddingTop: 90,
    paddingLeft: 90,
    minHeight: '100vh',
  },
  content: {
    padding: 30,
    paddingBottom: 20,
  },
  buttonContainer: {
    paddingTop: 20,
    paddingBottom: 50,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      paddingTop: 50,
    },
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  const [KBIS, setKBIS] = useState('');
  const [logo, setLogo] = useState('');
  const [identity, setIdentity] = useState('');
  const [timeslots, setTimeSlots] = useState([]);

  const documentSteps = [
    {
      id: 1,
      title: 'Justificatif d’identité en cours de validité *',
      description: 'CNI Recto/Verso, Passeport ou titre de séjour',
    },
    {
      id: 2,
      title: 'Kbis de moins de 3 mois *',
      description:
        'Kbis version électronique ou version papier numérisée (300dpi minimum)',
    },
    {
      id: 3,
      title: 'Logo d’entreprise *',
      description:
        'Attachez le logo de votre entreprise, qui sera présenté aux livreurs',
    },
  ];
  const getDocumentStep = (itemId) => {
    switch (itemId) {
      case 1:
        return { name: identity, fn: setIdentity };
      case 2:
        return { name: KBIS, fn: setKBIS };
      case 3:
        return { name: logo, fn: setLogo };
      default:
        console.log('default');
    }
  };

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <Grid container spacing={4}>
          <Grid item xs={12} xl={4}>
            <ProfileCard
              image={ProfileImage}
              name="Anne-Gabrielle Lavigne"
              email="Anne-gabrelle@gmail.com"
              street="28, rue Jean Jaures"
              postal=" 5ème étage"
              city="Paris, 75012"
              coords="06.31.31.42.53"
              siret="313 313 334 19076"
              rocket="32"
              rating="32"
              notes="32"
            />
          </Grid>
          <Grid item xs={12} xl={8}>
            <section id="documentUploading">
              <Card>
                <AvailabilitySelector
                  value={timeslots}
                  onChange={(value) => {
                    setTimeSlots(value);
                  }}
                />
                <DocumentUploading
                  steps={documentSteps}
                  getStep={getDocumentStep}
                />
              </Card>
            </section>
          </Grid>
        </Grid>
        <div
          className={classes.buttonContainer}
          style={{ justifyContent: 'flex-end' }}
        >
          <Button
            type="button"
            text={'UPDATE'}
            color="#000"
            style={{ width: 150, fontSize: 18 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
