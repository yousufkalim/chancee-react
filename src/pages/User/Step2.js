import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import API from '../../globals/API';
import Constants from '../../globals/Constants';
import * as actionTypes from '../../store/actions/actionTypes';

import { ReactComponent as JumboImage } from '../../assets/images/Fusee.svg';
import { ReactComponent as Flash } from '../../assets/images/flash.svg';
import { ReactComponent as Checked } from '../../assets/images/checked.svg';
import { ReactComponent as Unchecked } from '../../assets/images/unchecked.svg';

import Steps from '../../components/Steps';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Jumbotron from '../../components/Jumbotron';
import RateSlider from '../../components/RateSlider';
import VolumeSlider from '../../components/VolumeSlider';
import DistanceSlider from '../../components/DistanceSlider';
import VehicleSelector from '../../components/VehicleSelector';
import AvailabilitySelector from '../../components/AvailabilitySelector';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  formContainer: {
    marginTop: 50,
  },
  formHeader: {
    fontFamily: 'Catamaran',
    fontSize: '2em',
    color: 'rgba(50,60,71,1)',
  },
  step1Section2stepText1: {
    fontWeight: '500',
    fontSize: '14px',
    color: '#000',
  },
  step1Section2stepText2: {
    fontSize: '10px',
    color: 'rgba(152,152,152,1)',
  },
  step1Section2Checkbox: {
    padding: 0,
    marginRight: 10,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  link: {
    color: '#00A1FF',
    textDecoration: 'none',
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
  marginVertical: {
    margin: '30px 0',
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const [loading, setLoading] = useState(false);

  const [vehicles, setVehicles] = useState(new Set([1]));
  const [vehicleCheck1, setvehicleCheck1] = useState(false);
  const [vehicleCheck2, setvehicleCheck2] = useState(false);
  const [volume, setVolume] = useState(2);
  const [KM, setKM] = useState(60);
  const [timeslots, setTimeSlots] = useState([]);
  const [rate, setRate] = useState(18);
  const [rateCheckbox, setRateCheckbox] = useState(false);
  const [conditions, setConditions] = useState(false);

  const onSubmit = async () => {
    try {
      if (
        (!vehicles.has(1) &&
          !vehicles.has(3) &&
          (!vehicleCheck1 || !vehicleCheck2)) ||
        !rateCheckbox ||
        !timeslots.some((item) => item.checked) ||
        !conditions
      ) {
        alert('Fields are required!');
      } else {
        alert('Submit');
        // setLoading(true);

        // const data = await API({
        //   method: 'PUT',
        //   uri: Constants.USER_STEP2,
        //   body: JSON.stringify({}),
        //   token: store.token,
        // });
        // console.log(data);

        // dispatch({
        //   type: actionTypes.SET_USER,
        //   user: data.user,
        // });
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <Header />
      <section id="Jumbo">
        <Jumbotron
          image={JumboImage}
          head="Votre profil a été"
          head2="validé Anne-Gabrielle !"
          buttonText="JE ME LANCE"
          description="Votre espace personnel a été activé, encore quelques informations
          et vous recevrez les offres de nos 2300+ restaurants partenaires"
        />
      </section>
      <Container maxWidth="xl">
        <section id="Steps">
          <Steps
            steps={[
              { id: 1, name: 'SAISIE DE VOS INFORMATIONS', active: false },
              { id: 2, name: 'VALIDATION DE VOS INFORMATIONS', active: false },
              { id: 3, name: 'ACTIVATION DU COMPTE', active: true },
            ]}
          />
        </section>
        <section id="form" className={classes.formContainer}>
          <div className={classes.formHeader}>
            Plus qu’une étape avant de démarrer !
          </div>
          <section id="vehicle">
            <Grid container spacing={6}>
              <Grid item xs={12} lg={8}>
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
              <Grid item xs={12} lg={4}>
                {!vehicles.has(1) &&
                  !vehicles.has(3) &&
                  [
                    {
                      value: vehicleCheck1,
                      fn: setvehicleCheck1,
                      title: 'Permis de conduire',
                      desc: 'Obligatoire si sélection d’un véhicule motorisé.',
                    },
                    {
                      value: vehicleCheck2,
                      fn: setvehicleCheck2,
                      title: 'Preuve d’achat du véhicule',
                      desc: 'Obligatoire si sélection d’un véhicule motorisé.',
                    },
                  ].map((item, index) => (
                    <div key={index} className={classes.marginVertical}>
                      <div>
                        <Checkbox
                          checked={item.value}
                          onChange={(event) => item.fn(event.target.checked)}
                          disableRipple
                          color="default"
                          checkedIcon={<Checked />}
                          icon={<Unchecked />}
                          className={classes.step1Section2Checkbox}
                        />
                        <span className={classes.step1Section2stepText1}>
                          {item.title}
                        </span>
                      </div>
                      <span className={classes.step1Section2stepText2}>
                        {item.desc}
                      </span>
                    </div>
                  ))}
              </Grid>
            </Grid>
          </section>
          <section id="volume">
            <VolumeSlider
              value={volume}
              onChange={(e, value) => setVolume(value)}
            />
          </section>
          <section id="distance">
            <DistanceSlider
              value={KM}
              onChange={(e, value) => value >= 2 && setKM(value)}
            />
          </section>
          <section id="availability">
            <AvailabilitySelector
              value={timeslots}
              onChange={(value) => {
                setTimeSlots(value);
              }}
            />
          </section>
          <section id="rate">
            <RateSlider
              minimum="10"
              average="10"
              maximum="10"
              rateCheckbox={rateCheckbox}
              setRateCheckbox={(event) => setRateCheckbox((st) => !st)}
              value={rate}
              onChange={(e, value) => setRate(value)}
            />
          </section>
          <span className={classes.incrementText}>
            Pour les missions de nuit (entre 20h et 8h), les tarifs sont
            automatiquement augmentés de 10%
          </span>
          <div style={{ marginTop: 30 }}>
            <Checkbox
              disableRipple
              color="default"
              checked={conditions}
              icon={<Unchecked />}
              checkedIcon={<Checked />}
              className={classes.step1Section2Checkbox}
              onChange={(event) => setConditions((st) => !st)}
            />
            <span className={classes.step5CheckboxText}>
              Je suis d’accord avec les{' '}
              <Link to="/" className={classes.link}>
                Conditions d’utilisation
              </Link>
            </span>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              type="submit"
              onClick={onSubmit}
              disabled={loading}
              text={loading ? 'Loading...' : 'Soumettre mon dossier'}
            >
              <Flash style={{ marginRight: 10 }} />
            </Button>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
}
