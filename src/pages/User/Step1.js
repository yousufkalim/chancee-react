import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';

import API from '../../globals/API';
import Constants from '../../globals/Constants';
import * as actionTypes from '../../store/actions/actionTypes';

import { ReactComponent as Point } from '../../assets/images/Point.svg';
import { ReactComponent as Flash } from '../../assets/images/flash.svg';
import { ReactComponent as Chat } from '../../assets/images/chatIcon.svg';
import { ReactComponent as Attach } from '../../assets/images/Attach.svg';
import { ReactComponent as JumboImage } from '../../assets/images/Home2.svg';
import { ReactComponent as Microphone } from '../../assets/images/microphone.svg';

import Steps from '../../components/Steps';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Flag from '../../assets/images/flag.png';
import Input from '../../components/ProfileInput';
import Jumbotron from '../../components/Jumbotron';
import Heading from '../../components/FormStepHeader';
import DocumentUploading from '../../components/DocumentUploading';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
  },
  formContainer: {
    marginTop: 50,
  },
  // formHeader
  formHeader: {
    fontFamily: 'Catamaran',
    fontSize: '2em',
    color: 'rgba(50,60,71,1)',
  },
  formItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  flagIcon: {
    width: 55,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(233,239,244,1)',
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
  submitButton: {
    maxWidth: '40%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addressLoading, setAddressLoading] = useState(false);

  const [lat, setLat] = useState('');
  const [city, setCity] = useState('');
  const [long, setLong] = useState('');
  const [SIRET, setSIRET] = useState('');
  const [phone, setPhone] = useState('');
  const [postal, setPostal] = useState('');
  const [street, setStreet] = useState('');
  const [complement, setComplement] = useState('');

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
            id: item.properties.id,
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
  const onSubmit = async () => {
    try {
      if (
        identity === '' ||
        profile === '' ||
        KBIS === '' ||
        phone.length !== 10 ||
        SIRET.length !== 14 ||
        street === '' ||
        postal === '' ||
        city === ''
      ) {
        alert('Fields are required!');
      } else {
        setLoading(true);
        var formdata = new FormData();
        formdata.append('KBIS', KBIS);
        formdata.append('phone', phone);
        formdata.append('SIRET', SIRET);
        formdata.append('profile', profile);
        diploma !== '' && formdata.append('diploma', diploma);
        formdata.append('identity', identity);
        training !== '' && formdata.append('training', training);
        insurance !== '' && formdata.append('insurance', insurance);
        formdata.append(
          'address',
          JSON.stringify({
            city: city,
            street: street,
            zipcode: postal,
            location: [long, lat],
            complement: complement,
          }),
        );

        const data = await API({
          method: 'PUT',
          uri: Constants.USER_STEP1,
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
          body: formdata,
        });
        alert('Step 1 was completed successfully!');
        dispatch({
          type: actionTypes.SET_USER,
          user: data.user,
        });
      }
    } catch (err) {
      setLoading(false);
    }
  };

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
          head="Bienvenue sur"
          head2="Chancee !"
          buttonText="DÉMARRER"
          description="Nous configurons votre espace personnel, plus que quelques étapes et
          votre profil sera disponible auprès de nos 2300+ restaurants
          partenaires"
          icons={[Chat, Microphone]}
        />
      </section>
      <Container maxWidth="xl">
        <section id="Steps">
          <Steps
            steps={[
              { id: 1, name: 'SAISIE DE VOS INFORMATIONS', active: true },
              { id: 2, name: 'VALIDATION DE VOS INFORMATIONS', active: false },
              { id: 3, name: 'ACTIVATION DU COMPTE', active: false },
            ]}
          />
        </section>
        <section id="form" className={classes.formContainer}>
          <div className={classes.formHeader}>
            Validons ensemble vos informations
          </div>
          <section id="formStep1">
            <Heading icon={Point} heading="ADRESSE POSTALE" />
            <Grid container className={classes.form}>
              <Grid item xs={12} md={6} className={classes.formItem}>
                <Autocomplete
                  options={address}
                  inputValue={street}
                  loading={addressLoading}
                  onInputChange={getAddress}
                  noOptionsText="Input your address!"
                  onChange={(event, value) => {
                    setLat(value.lat);
                    setLong(value.lng);
                    setCity(value.city);
                    setStreet(value.name);
                    setPostal(value.postalCode);
                  }}
                  getOptionSelected={(option, value) => {
                    return option.name === value.name;
                  }}
                  getOptionLabel={(option) => {
                    return option.name;
                  }}
                  renderInput={(params) => (
                    <Input
                      valid={postal !== ''}
                      label="N° DE RUE ET RUE *"
                      ref={params.InputProps.ref}
                      spreadProps={params.inputProps}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6} className={classes.formItem}>
                <Input
                  disabled
                  value={postal}
                  label="CODE POSTAL *"
                  valid={postal !== ''}
                />
              </Grid>
              <Grid item xs={12} md={6} className={classes.formItem}>
                <Input
                  value={complement}
                  valid={complement !== ''}
                  label="COMPLÉMENT D’ADRESSE"
                  onChange={({ target: { name, value } }) =>
                    setComplement(value)
                  }
                />
              </Grid>
              <Grid item xs={12} md={6} className={classes.formItem}>
                <Input
                  disabled
                  value={city}
                  label="VILLE *"
                  valid={city !== ''}
                />
              </Grid>
              <Grid item xs={12} md={6} className={classes.formItem}>
                <Input
                  type="number"
                  value={phone}
                  valid={phone.length === 10}
                  label="NUMÉRO DE TÉLÉPHONE *"
                  onChange={(e) => {
                    e.target.value.length <= 10 && setPhone(e.target.value);
                  }}
                  left={
                    <div className={classes.flagIcon}>
                      <img
                        src={Flag}
                        className={classes.flagIconImg}
                        alt="flag"
                      />
                    </div>
                  }
                />
              </Grid>
            </Grid>
          </section>
          <section id="formStep2">
            <Heading icon={Attach} heading="JUSTIFICATIFS" />
            <Grid container>
              <Grid item xs={12} md={6} className={classes.formItem}>
                <Input
                  type="number"
                  value={SIRET}
                  valid={SIRET.length === 14}
                  label="SIRET *"
                  onChange={(e) => {
                    e.target.value.length <= 14 && setSIRET(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <section id="documentUploading">
              <DocumentUploading
                steps={documentSteps}
                getStep={getDocumentStep}
              />
            </section>
          </section>
          <div className={classes.buttonContainer}>
            <Button
              type="submit"
              onClick={onSubmit}
              disabled={loading}
              className={classes.submitButton}
              text={loading ? 'Loading...' : 'Soumettre mon dossier'}
            >
              <Flash style={{ marginRight: 10 }} />
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
