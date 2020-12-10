import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import API from '../../globals/API';
import Constants from '../../globals/Constants';
import * as actionTypes from '../../store/actions/actionTypes';

import { ReactComponent as Flash } from '../../assets/images/flash.svg';
import { ReactComponent as Checked } from '../../assets/images/checked.svg';
import { ReactComponent as JumboImage } from '../../assets/images/Fusee.svg';
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
import DocumentUploading from '../../components/DocumentUploading';
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

  const [license, setLicense] = useState('');
  const [vehicleProof, setVehicleProof] = useState('');
  const [vehicles, setVehicles] = useState(new Set([1]));

  const [KM, setKM] = useState(60);
  const [rate, setRate] = useState(18);
  const [volume, setVolume] = useState(2);
  const [timeslots, setTimeSlots] = useState([]);
  const [conditions, setConditions] = useState(false);
  const [rateCheckbox, setRateCheckbox] = useState(false);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [average, setAverage] = useState(0);

  const documentSteps = [
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
  const getDocumentStep = (itemId) => {
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

  useEffect(() => {
    getRates();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    // eslint-disable-next-line
  }, []);

  const getRates = async () => {
    try {
      const rates = await API({
        uri: Constants.GET_AVERAGE_RATES,
        token: store.token,
      });
      setMin(rates.min);
      setMax(rates.max);
      setAverage(rates.average);
    } catch (err) {
      getRates();
    }
  };

  const onSubmit = async () => {
    try {
      if (
        (!vehicles.has(1) &&
          !vehicles.has(3) &&
          (license === '' || vehicleProof === '')) ||
        !rateCheckbox ||
        !timeslots.some((item) => item.checked) ||
        !conditions
      ) {
        alert('Fields are required!');
      } else {
        setLoading(true);
        let transportType =
          Number(volume) === 1
            ? 'small'
            : Number(volume) === 2
            ? 'medium'
            : 'large';
        let vehicleType;
        if (vehicles.has(1)) {
          vehicleType = 'Bike';
        } else if (vehicles.has(2)) {
          vehicleType = 'Scooter';
        } else if (vehicles.has(3)) {
          vehicleType = 'Electric bike';
        } else if (vehicles.has(4)) {
          vehicleType = 'Car';
        } else if (vehicles.has(5)) {
          vehicleType = 'Truck';
        } else {
          vehicleType = 'Large volume permit';
        }
        var formdata = new FormData();
        if (!vehicles.has(1) && !vehicles.has(3)) {
          formdata.append('licence', license);
          formdata.append('purchaseProof', vehicleProof);
        }
        formdata.append('timeslots', JSON.stringify(timeslots));
        formdata.append(
          'delivery',
          JSON.stringify({
            vehicle: {
              vehicleType: vehicleType,
            },
            range: KM,
            perHour: rate,
            transportType: transportType,
          }),
        );

        const data = await API({
          method: 'PUT',
          uri: Constants.USER_STEP2,
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
          token: store.token,
          body: formdata,
        });
        alert('Profile was completed successfully!');
        dispatch({
          type: actionTypes.SET_USER,
          user: data.user,
        });
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
                <section id="documentUploading">
                  {!vehicles.has(1) && !vehicles.has(3) && (
                    <DocumentUploading
                      steps={documentSteps}
                      getStep={getDocumentStep}
                      justCheckbox={true}
                    />
                  )}
                </section>
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
              minimum={min}
              average={average}
              maximum={max}
              value={rate}
              rateCheckbox={rateCheckbox}
              onChange={(e, value) => setRate(value)}
              setRateCheckbox={(event) => setRateCheckbox((st) => !st)}
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
