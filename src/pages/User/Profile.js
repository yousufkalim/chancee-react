import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';

import API from '../../globals/API';
import Constants from '../../globals/Constants';
import * as actionTypes from '../../store/actions/actionTypes';

import Card from '../../components/Card';
import Modal from '../../components/Modal';
import TableButton from '../../components/TableButton';
import Header from '../../components/Header2';
import Flag from '../../assets/images/flag.png';
import Input from '../../components/ProfileInput';
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
    minHeight: '100vh',
    backgroundColor: '#F5F7FB',
  },
  content: {
    padding: 30,
    paddingBottom: 50,
  },
  buttonContainer: {
    paddingTop: 20,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      paddingTop: 50,
    },
  },
  flagIcon: {
    width: 55,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(233,239,244,1)',
  },
}));

const Profile = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const [license, setLicense] = useState('');
  const [vehicleProof, setVehicleProof] = useState('');
  const [vehicles, setVehicles] = useState(new Set([1]));

  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addressLoading, setAddressLoading] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

  const [lat, setLat] = useState('');
  const [city, setCity] = useState('');
  const [long, setLong] = useState('');
  const [SIRET, setSIRET] = useState('');
  const [phone, setPhone] = useState('');
  const [postal, setPostal] = useState('');
  const [street, setStreet] = useState('');
  const [complement, setComplement] = useState('');

  const [KM, setKM] = useState(60);
  const [rate, setRate] = useState(18);
  const [volume, setVolume] = useState(2);
  const [timeslots, setTimeSlots] = useState([]);
  const [defaultTimeslots, setDefaultTimeslots] = useState([
    { day: 1, checked: false, slots: [] },
    { day: 2, checked: false, slots: [] },
    { day: 3, checked: false, slots: [] },
    { day: 4, checked: false, slots: [] },
    { day: 5, checked: false, slots: [] },
    { day: 6, checked: false, slots: [] },
    { day: 7, checked: false, slots: [] },
  ]);

  const [KBIS, setKBIS] = useState('');
  const [profile, setProfile] = useState('');
  const [diploma, setDiploma] = useState('');
  const [identity, setIdentity] = useState('');
  const [training, setTraining] = useState('');
  const [insurance, setInsurance] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // const [date, setDate] = useState('');

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [average, setAverage] = useState(0);

  // can add a name field also to differentiate
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
  const getAddress = async (event, value, reason) => {
    setStreet(value);
    if (value !== '') {
      setAddressLoading(true);
      const data = await API({
        uri:
          'https://api-adresse.data.gouv.fr/search/?q=' +
          value +
          '&type=housenumber&autocomplete=1&limit=15',
      });
      setAddress(
        data.features.map((item) => {
          return {
            name: item.properties.label,
            city: item.properties.city,
            postalCode: item.properties.postcode,
            lat: item.geometry.coordinates[1],
            lng: item.geometry.coordinates[0],
          };
        }),
      );
      setAddressLoading(false);
    } else {
      setAddress([]);
    }
  };

  useEffect(() => {
    getRates();
    let timeslotsArray = defaultTimeslots;
    store.user.timeslots.map((timeslot, index) => {
      if (timeslot.slots.length > 0) {
        timeslotsArray[index].slots = timeslot.slots;
        timeslotsArray[index].checked = true;
      }
      return timeslot;
    });

    const { user } = store;
    let vehicleType = 1;
    if (user.delivery.vehicle.vehicleType === 'Bike') vehicleType = 1;
    if (user.delivery.vehicle.vehicleType === 'Scooter') vehicleType = 2;
    if (user.delivery.vehicle.vehicleType === 'Electric bike') vehicleType = 3;
    if (user.delivery.vehicle.vehicleType === 'Car') vehicleType = 4;
    if (user.delivery.vehicle.vehicleType === 'Truck') vehicleType = 5;
    if (user.delivery.vehicle.vehicleType === 'Large volume permit')
      vehicleType = 6;
    let volume =
      user.delivery.transportType === 'small'
        ? 1
        : user.delivery.transportType === 'medium'
        ? 2
        : 3;

    user.delivery.vehicle.licence && setLicense(user.delivery.vehicle.licence);
    user.delivery.vehicle.purchaseProof &&
      setVehicleProof(user.delivery.vehicle.purchaseProof);
    setVehicles(new Set([vehicleType]));
    setLat(user.address.location[1]);
    setCity(user.address.city);
    setLong(user.address.location[0]);
    setSIRET(user.SIRET);
    setPhone(user.phone);
    setPostal(user.address.zip);
    setStreet(user.address.street);
    setComplement(user.address.complement);
    setKM(Number(user.delivery.range));
    setRate(user.delivery.perHour);
    setVolume(volume);
    setDefaultTimeslots(timeslotsArray);
    setKBIS(user.proofs.KBIS);
    setProfile(user.proofs.profile);
    setDiploma(user.proofs.diploma);
    setIdentity(user.proofs.identity);
    setTraining(user.proofs.training);
    setInsurance(user.proofs.insurance);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    // setDate(moment(user.dob).format('YYYY-MM-DD'));
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    // eslint-disable-next-line
  }, [store]);
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
        !timeslots.some((item) => item.checked)
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

        const timeslotsArray = timeslots.map((item) => {
          item.slots.map((slot) => {
            if (slot._id) {
              delete slot._id;
            }
            return slot;
          });
          return item;
        });

        var formdata = new FormData();
        typeof identity === 'object' && formdata.append('identity', identity);
        typeof KBIS === 'object' && formdata.append('KBIS', KBIS);
        typeof profile === 'object' && formdata.append('profile', profile);
        typeof diploma === 'object' && formdata.append('diploma', diploma);
        typeof training === 'object' && formdata.append('training', training);
        typeof insurance === 'object' &&
          formdata.append('insurance', insurance);
        typeof license === 'object' && formdata.append('licence', license);
        typeof vehicleProof === 'object' &&
          formdata.append('purchaseProof', vehicleProof);

        formdata.append(
          'address',
          JSON.stringify({
            street: street,
            location: [long, lat],
            zipcode: postal,
            complement: complement,
            city: city,
          }),
        );
        formdata.append('phone', phone);
        formdata.append('SIRET', SIRET);
        formdata.append('perHour', parseInt(rate));
        formdata.append('vehicleType', vehicleType);
        formdata.append('range', parseInt(KM));
        formdata.append('transportType', transportType);
        formdata.append('timeslots', JSON.stringify(timeslotsArray));

        const data = await API({
          method: 'PUT',
          uri: Constants.UPDATE_PROFILE,
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
          body: formdata,
        });
        alert('Profile Update was successfull!');
        setLoading(false);
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
      <div className={classes.content}>
        <Grid container spacing={4}>
          <Grid item xs={12} xl={4}>
            <ProfileCard
              isUser={true}
              image={Constants.BASE_URL + '/' + store.user.proofs.profile}
              name={firstName + ' ' + lastName}
              email={email}
              courses="485"
              street={street}
              complement={complement}
              city={city}
              postal={postal}
              phone={phone}
              siret={SIRET}
              rocket="32"
              rating={store.user.averageRating}
              notes="32"
              onClick={() => setProfileModal(true)}
            />
          </Grid>
          {/* <section id="vehicles"> */}
          <Grid item xs={12} xl={8}>
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
          </Grid>
          {/* </section> */}
          <Grid item xs={12} xl={6}>
            {/* <section id="rate"> */}
            <Card>
              <RateSlider
                fullWidth
                minimum={min}
                average={average}
                maximum={max}
                value={rate}
                noCheckbox={true}
                onChange={(e, value) => setRate(value)}
              />
            </Card>
            {/* </section> */}
          </Grid>
          <Grid item xs={12} xl={6}>
            {/* <section id="documentUploading"> */}
            <Card>
              <DocumentUploading
                justCheckbox={true}
                steps={documentSteps}
                getStep={getDocumentStep}
              />
            </Card>
            {/* </section> */}
          </Grid>
          <Grid item xs={12} xl={6}>
            {/* <section id="volume"> */}
            <Card>
              <VolumeSlider
                value={volume}
                onChange={(e, value) => setVolume(value)}
              />
            </Card>
            {/* </section> */}
          </Grid>
          <Grid item xs={12} xl={6}>
            {/* <section id="distance"> */}
            <Card>
              <DistanceSlider
                value={KM}
                onChange={(e, value) => value >= 2 && setKM(value)}
              />
            </Card>
            {/* </section> */}
          </Grid>
          <Grid item xs={12}>
            {/* <section id="availability"> */}
            <Card>
              <AvailabilitySelector
                defaultValue={defaultTimeslots}
                value={timeslots}
                onChange={(value) => {
                  setTimeSlots(value);
                }}
              />
            </Card>
            {/* </section> */}
          </Grid>
        </Grid>
        <div
          className={classes.buttonContainer}
          style={{ justifyContent: 'flex-end' }}
        >
          <TableButton
            color="black"
            text={'UPDATE'}
            disabled={loading}
            onClick={onSubmit}
            style={{ width: 150, fontSize: 18 }}
          />
        </div>
      </div>
      <Modal
        open={profileModal}
        onClose={() => setProfileModal((st) => !st)}
        title="Edit Profile"
        body={
          <Grid container>
            <Grid item xs={12} md={6}>
              <Autocomplete
                options={address}
                defaultValue={{
                  name: street,
                  city: city,
                  postalCode: postal,
                  lat: lat,
                  lng: long,
                }}
                inputValue={street}
                loading={addressLoading}
                onInputChange={getAddress}
                noOptionsText="Input your address!"
                onChange={(event, value) => {
                  if (value) {
                    setLat(value.lat);
                    setLong(value.lng);
                    setCity(value.city);
                    setStreet(value.name);
                    setPostal(value.postalCode);
                  }
                }}
                getOptionLabel={(option) => {
                  return option.name;
                }}
                renderInput={(params) => (
                  <Input
                    inputValue={street}
                    valid={postal !== ''}
                    label="N° DE RUE ET RUE *"
                    ref={params.InputProps.ref}
                    spreadProps={params.inputProps}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                disabled
                value={postal}
                label="CODE POSTAL *"
                valid={postal !== ''}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                value={complement}
                valid={complement !== ''}
                label="COMPLÉMENT D’ADRESSE"
                onChange={({ target: { name, value } }) => setComplement(value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                disabled
                value={city}
                label="VILLE *"
                valid={city !== ''}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                type="number"
                value={phone}
                valid={String(phone).length === 10}
                label="NUMÉRO DE TÉLÉPHONE *"
                onChange={(e) => {
                  e.target.value.length <= 10 && setPhone(e.target.value);
                }}
                left={
                  <div className={classes.flagIcon}>
                    <img src={Flag} alt="flag" />
                  </div>
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                type="number"
                value={SIRET}
                valid={String(SIRET).length === 14}
                label="SIRET *"
                onChange={(e) => {
                  e.target.value.length <= 14 && setSIRET(e.target.value);
                }}
              />
            </Grid>
          </Grid>
        }
        actions={
          <TableButton
            fullWidth
            text="Done"
            onClick={() => {
              if (
                street === '' ||
                postal === '' ||
                String(phone).length !== 10 ||
                String(SIRET).length !== 14 ||
                city === ''
              ) {
                alert('Fields are required!');
              } else {
                setProfileModal((st) => !st);
              }
            }}
          />
        }
      />
    </div>
  );
};

export default Profile;
