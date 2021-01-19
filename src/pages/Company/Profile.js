import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Flag from '../../assets/images/flag.png';

import API from '../../globals/API';
import Constants from '../../globals/Constants';
import * as actionTypes from '../../store/actions/actionTypes';
import Texts from '../../globals/Texts';

import Card from '../../components/Card';
import Modal from '../../components/Modal';
import TableButton from '../../components/TableButton';
import Input from '../../components/ProfileInput';
import ProfileCard from '../../components/ProfileCard';
import DocumentUploading from '../../components/DocumentUploading';
import AvailabilitySelector from '../../components/AvailabilitySelector';

const useStyles = makeStyles((theme) => ({
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

  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [addressLoading, setAddressLoading] = useState(false);

  const [lat, setLat] = useState('');
  const [city, setCity] = useState('');
  const [long, setLong] = useState('');
  const [SIRET, setSIRET] = useState('');
  const [phone, setPhone] = useState('');
  const [postal, setPostal] = useState('');
  const [street, setStreet] = useState('');
  const [complement, setComplement] = useState('');

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
  const [logo, setLogo] = useState('');
  const [identity, setIdentity] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // const [date, setDate] = useState('');

  const [totalRatings, setTotalRatings] = useState(0);
  const [totalOffers, setTotalOffers] = useState(0);

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
  const GET_RATINGS_OFFERS = async () => {
    try {
      const response = await API({
        uri: Constants.GET_RATINGS_OFFERS,
        token: store.token,
      });
      setTotalRatings(response.totalRatings);
      setTotalOffers(response.totalOffers);
    } catch (err) {}
  };

  useEffect(() => {
    GET_RATINGS_OFFERS();
    let timeslotsArray = defaultTimeslots;
    store.user.timeslots.map((timeslot, index) => {
      if (timeslot.slots.length > 0) {
        timeslotsArray[index].slots = timeslot.slots;
        timeslotsArray[index].checked = true;
      }
      return true;
    });
    const { user } = store;
    setLat(user.address.location[1]);
    setCity(user.address.city);
    setLong(user.address.location[0]);
    setSIRET(user.SIRET);
    setPhone(user.phone);
    setPostal(user.address.zip);
    setStreet(user.address.street);
    setComplement(user.address.complement);
    setDefaultTimeslots(timeslotsArray);
    setKBIS(user.proofs.KBIS);
    setLogo(user.proofs.profile);
    setIdentity(user.proofs.identity);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    // setDate(moment(user.dob).format('DD-MM-YYYY'));
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    // eslint-disable-next-line
  }, [store]);

  const onSubmit = async () => {
    try {
      if (!timeslots.some((item) => item.checked)) {
        alert(Texts.fieldsRequired);
      } else {
        setLoading(true);

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
        typeof logo === 'object' && formdata.append('profile', logo);
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

        formdata.append('firstName', firstName);
        formdata.append('lastName', lastName);
        formdata.append('phone', phone);
        formdata.append('SIRET', SIRET);
        formdata.append('timeslots', JSON.stringify(timeslotsArray));

        const data = await API({
          method: 'PUT',
          uri: Constants.UPDATE_COMPANY_PROFILE,
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
          body: formdata,
        });
        alert(Texts.profileSuccess);
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
    <>
      <div className={classes.content}>
        <Grid container spacing={4}>
          <Grid item xs={12} xl={4}>
            <ProfileCard
              image={Constants.BASE_URL + '/' + store.user.proofs.profile}
              name={firstName + ' ' + lastName}
              email={email}
              street={street}
              complement={complement}
              city={city}
              postal={postal}
              phone={phone}
              siret={SIRET}
              rocket={totalOffers}
              rating={Math.floor(store.user.averageRating * 100) / 100}
              notes={totalRatings}
              onClick={() => setProfileModal(true)}
            />
          </Grid>
          <Grid item xs={12} xl={8}>
            <section id="documentUploading">
              <Card>
                <AvailabilitySelector
                  defaultValue={defaultTimeslots}
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
          <TableButton
            color="black"
            text={Texts.update}
            disabled={loading}
            onClick={onSubmit}
            style={{ minWidth: 150, fontSize: 18 }}
          />
        </div>
      </div>
      <Modal
        open={profileModal}
        onClose={() => setProfileModal((st) => !st)}
        title={Texts.editProfile}
        body={
          <Grid container>
            <Grid item xs={12} md={6}>
              <Input
                label={Texts.labelFirstName}
                value={firstName}
                valid={firstName !== ''}
                onChange={({ target: { name, value } }) => setFirstName(value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label={Texts.labelLastName}
                value={lastName}
                valid={lastName !== ''}
                onChange={({ target: { name, value } }) => setLastName(value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                options={address}
                defaultValue={{
                  lat: lat,
                  lng: long,
                  city: city,
                  name: street,
                  postalCode: postal,
                }}
                inputValue={street}
                loading={addressLoading}
                onInputChange={getAddress}
                noOptionsText={Texts.inputAddress}
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
                    valid={street !== ''}
                    label={Texts.labelAddress}
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
                label={Texts.labelPostal}
                valid={postal !== ''}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                value={complement}
                valid={complement !== ''}
                label={Texts.labelComplement}
                onChange={({ target: { name, value } }) => setComplement(value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                disabled
                value={city}
                label={Texts.labelCity}
                valid={city !== ''}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                type="number"
                value={phone}
                valid={String(phone).length === 10}
                label={Texts.labelPhone}
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
                label={Texts.labelSIRET}
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
            text={Texts.done}
            onClick={() => {
              if (
                firstName === '' ||
                lastName === '' ||
                street === '' ||
                postal === '' ||
                String(phone).length !== 10 ||
                String(SIRET).length !== 14 ||
                city === ''
              ) {
                alert(Texts.fieldsRequired);
              } else {
                setProfileModal((st) => !st);
              }
            }}
          />
        }
      />
    </>
  );
};

export default Profile;
