import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ProfileImage from '../../assets/images/avatar.svg';

import Card from '../../components/Card';
import Button from '../../components/Button';
import Header from '../../components/Header2';
import RateSlider from '../../components/RateSlider';
import ProfileCard from '../../components/ProfileCard';
import VolumeSlider from '../../components/VolumeSlider';
import DistanceSlider from '../../components/DistanceSlider';
import VehicleSelector from '../../components/VehicleSelector';
import DocumentUploading from '../../components/DocumentUploading';
import AvailabilitySelector from '../../components/AvailabilitySelector';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 90,
    paddingLeft: 90,
    backgroundColor: '#F5F7FB',
  },
  content: {
    padding: 30,
    paddingBottom: 100,
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

  const [license, setLicense] = useState('');
  const [vehicleProof, setVehicleProof] = useState('');
  const [vehicles, setVehicles] = useState(new Set([1]));

  const [KM, setKM] = useState(60);
  const [rate, setRate] = useState(18);
  const [volume, setVolume] = useState(2);
  const [timeslots, setTimeSlots] = useState([]);
  const [rateCheckbox, setRateCheckbox] = useState(false);

  const [KBIS, setKBIS] = useState('');
  const [profile, setProfile] = useState('');
  const [diploma, setDiploma] = useState('');
  const [identity, setIdentity] = useState('');
  const [training, setTraining] = useState('');
  const [insurance, setInsurance] = useState('');

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
      title: 'Selfie *',
      description: 'Prenez un selfie où l’on voit clairement votre visage',
    },
    {
      id: 4,
      title: 'Preuve de diplôme',
      description: 'Facultatif',
    },
    {
      id: 5,
      title: 'Certificat de formation à l’Academie des livreurs',
      description: 'Facultatif',
    },
    {
      id: 6,
      title: 'Certificat d’assurance',
      description: 'Facultatif',
    },
  ];
  const getDocumentStep = (itemId) => {
    switch (itemId) {
      case 1:
        return { name: identity, fn: setIdentity };
      case 2:
        return { name: KBIS, fn: setKBIS };
      case 3:
        return { name: profile, fn: setProfile };
      case 4:
        return { name: diploma, fn: setDiploma };
      case 5:
        return { name: training, fn: setTraining };
      case 6:
        return { name: insurance, fn: setInsurance };
      default:
        console.log('default');
    }
  };
  const documentSteps2 = [
    {
      id: 1,
      title: 'Permis de conduire *',
      description: 'Obligatoire si sélection d’un véhicule motorisé.',
    },
    {
      id: 2,
      title: 'Preuve d’achat du véhicule *',
      description: 'Obligatoire si sélection d’un véhicule motorisé.',
    },
  ];
  const getDocumentStep2 = (itemId) => {
    switch (itemId) {
      case 1:
        return { name: license, fn: setLicense };
      case 2:
        return { name: vehicleProof, fn: setVehicleProof };
      case 3:
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
              isUser={true}
              image={ProfileImage}
              name="Anne-Gabrielle Lavigne"
              email="Anne-gabrelle@gmail.com"
              courses="485"
              street="28, rue Jean Jaures"
              postal=" 5ème étage"
              city="Paris, 75012"
              coords="06.31.31.42.53"
              rocket="32"
              rating="32"
              notes="32"
            />
          </Grid>
          <Grid item xs={12} xl={8}>
            <section id="vehicles">
              <Card>
                <Grid container>
                  <Grid item xs={8}>
                    <VehicleSelector
                      checkbox={false}
                      values={vehicles}
                      onChange={(value) => {
                        let newVehicles = new Set(vehicles);
                        newVehicles.clear();
                        newVehicles.add(value);
                        setVehicles(newVehicles);
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    {!vehicles.has(1) && !vehicles.has(3) && (
                      <DocumentUploading
                        justCheckbox={true}
                        steps={documentSteps2}
                        getStep={getDocumentStep2}
                      />
                    )}
                  </Grid>
                </Grid>
              </Card>
            </section>
          </Grid>
          <Grid item xs={12} xl={6}>
            <section id="rate">
              <Card>
                <RateSlider
                  fullWidth
                  minimum="10"
                  average="10"
                  maximum="10"
                  value={rate}
                  rateCheckbox={rateCheckbox}
                  onChange={(e, value) => setRate(value)}
                  setRateCheckbox={(event) => setRateCheckbox((st) => !st)}
                />
              </Card>
            </section>
          </Grid>
          <Grid item xs={12} xl={6}>
            <section id="documentUploading">
              <Card>
                <DocumentUploading
                  justCheckbox={true}
                  steps={documentSteps}
                  getStep={getDocumentStep}
                />
              </Card>
            </section>
          </Grid>
          <Grid item xs={12} xl={6}>
            <section id="volume">
              <Card>
                <VolumeSlider
                  value={volume}
                  onChange={(e, value) => setVolume(value)}
                />
              </Card>
            </section>
          </Grid>
          <Grid item xs={12} xl={6}>
            <section id="distance">
              <Card>
                <DistanceSlider
                  value={KM}
                  onChange={(e, value) => value >= 2 && setKM(value)}
                />
              </Card>
            </section>
          </Grid>
          <Grid item xs={12}>
            <section id="availability">
              <Card>
                <AvailabilitySelector
                  value={timeslots}
                  onChange={(value) => {
                    setTimeSlots(value);
                  }}
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
            color="#000"
            type="button"
            text="UPDATE"
            style={{ width: 150, fontSize: 18 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
