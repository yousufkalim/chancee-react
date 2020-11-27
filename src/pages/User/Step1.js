import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';

import API from '../../globals/API';
import Constants from '../../globals/Constants';
import * as actionTypes from '../../store/actions/actionTypes';

import { ReactComponent as Tick } from '../../assets/images/tick.svg';
import { ReactComponent as Point } from '../../assets/images/Point.svg';
import { ReactComponent as Flash } from '../../assets/images/flash.svg';
import { ReactComponent as Chat } from '../../assets/images/chatIcon.svg';
import { ReactComponent as Attach } from '../../assets/images/Attach.svg';
import { ReactComponent as JumboImage } from '../../assets/images/Home2.svg';
import { ReactComponent as Microphone } from '../../assets/images/microphone.svg';
import { ReactComponent as FileUploadIcon } from '../../assets/images/FileUpload.svg';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Flag from '../../assets/images/flag.png';
import Jumbotron from '../../components/Jumbotron';

import Input from './Input';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
  },
  // steps
  stepsContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  steps: {
    position: 'relative',
    width: '80%',
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  stepLine: {
    position: 'absolute',
    height: '0.999px',
    backgroundColor: 'rgba(208,215,221,1)',
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
  },
  step: {
    backgroundColor: '#fff',
    border: '1px solid rgba(208,215,221,1)',
    borderRadius: 20,
    zIndex: 2,
    color: 'rgba(50,60,71,1)',
    fontFamily: 'Roboto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: 8,
      margin: '0 10px',
      padding: '0 10px',
      height: '45px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: 8,
      margin: '0 20px',
      padding: '0 20px',
      height: '35px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 12,
      margin: '0 20px',
      padding: '0 20px',
      height: '35px',
    },
  },
  stepActive: {
    backgroundColor: '#00A1FF',
    border: '1px solid #00A1FF',
    color: '#fff',
  },
  // formContainer
  formContainer: {
    marginTop: 50,
  },
  // formHeader
  formHeader: {
    fontFamily: 'Catamaran',
    fontSize: '2em',
    color: 'rgba(50,60,71,1)',
  },
  // formStepHeader
  formStepHeader: {
    margin: '40px 20px 0 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  formStepIconWrapper: {
    height: 50,
    width: 50,
    backgroundColor: 'rgba(250,251,252,1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formStepIcon: {
    width: '40%',
    height: '50%',
    color: 'rgba(122,204,40,1)',
  },
  formStepText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '14px',
    color: 'rgba(122,204,40,1)',
    letterSpacing: 0.35,
    marginLeft: 10,
  },
  form: {},
  formItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  // form Input
  inputLabel: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '12px',
    color: 'rgba(186,197,205,1)',
    letterSpacing: 0.4,
    marginTop: 15,
    marginBottom: 5,
  },
  inputContainer: {
    maxHeight: 52,
    backgroundColor: '#fff',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    color: 'rgba(233,239,244,1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(233,239,244,1)',
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
  },
  inputSIRET: {
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
  flagIcon: {
    backgroundColor: 'rgba(233,239,244,1)',
    width: '12%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagIconImg: {},
  input: {
    width: '100%',
    height: '100%',
    padding: '14px 12px',
    color: 'rgba(50,60,71,1)',
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    '&::placeholder': {
      color: 'rgba(50,60,71,1)',
    },
  },
  // steppers
  stepperContainer: {
    marginTop: 15,
  },
  stepperInput: {
    border: '1px dashed rgba(208,215,221,1)',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  stepperInputContent: {
    width: '60%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperInputIcon: {},
  stepperInputTexts: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperInputText: {
    fontSize: 20,
    fontWeight: 'light',
    color: '#000',
  },
  steppers: {
    display: 'flex',
    flexDirection: 'column',
  },
  stepper: {
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 4,
    zIndex: 2,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 20,
    },
  },
  stepperRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepperIconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(208,215,221,1)',
    borderRadius: 4,
    width: 30,
    height: 30,
    color: 'rgba(166,229,15,1)',
  },
  stepperIcon: {
    width: 18,
    height: 18,
  },
  stepperTitle: {
    marginLeft: 15,
    color: 'rgba(166,229,15,1)',
    fontFamily: 'Roboto',
    fontSize: '16px',
  },
  stepperTitleDone: {
    color: '#000',
  },
  stepperDesc: {
    marginTop: 4,
    fontFamily: 'Roboto',
    fontSize: '14px',
    color: 'rgba(152,152,152,1)',
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

  const steps = [
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
  const ProfileStepper = (data) => {
    return (
      <div className={classes.steps}>
        <div className={classes.stepLine}></div>
        {data.steps.map((i) => (
          <div
            key={i.id}
            className={
              i.active ? classes.step + ' ' + classes.stepActive : classes.step
            }
          >
            {i.id}. {i.name}
          </div>
        ))}
      </div>
    );
  };
  const FormStepHeader = (data) => {
    return (
      <>
        <div className={classes.formStepHeader}>
          <div className={classes.formStepIconWrapper}>{data.icon}</div>
          <div className={classes.formStepText}>{data.title}</div>
        </div>
      </>
    );
  };
  const getStep = (itemId) => {
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
        phone.length < 10 ||
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
            street: street,
            location: [lat, long],
            zipcode: postal,
            complement: complement,
            city: city,
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
        console.log(data);
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
        <section id="Steps" className={classes.stepsContainer}>
          <ProfileStepper
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
            <FormStepHeader
              icon={<Point className={classes.formStepIcon} />}
              title="ADRESSE POSTALE"
            />
            <Grid container className={classes.form}>
              <Grid item xs={12} md={6} className={classes.formItem}>
                <div className={classes.inputLabel}>N° DE RUE ET RUE *</div>
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
                    <div
                      ref={params.InputProps.ref}
                      className={classes.inputContainer}
                    >
                      <input
                        type="text"
                        {...params.inputProps}
                        className={classes.input}
                      />
                      {postal !== '' && (
                        <div
                          style={{
                            marginRight: 20,
                          }}
                        >
                          <Tick />
                        </div>
                      )}
                    </div>
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
                  valid={phone !== ''}
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
            <FormStepHeader
              icon={<Attach className={classes.formStepIcon} />}
              title="JUSTIFICATIFS"
            />
            <Grid container>
              <Grid item xs={12} md={6} className={classes.formItem}>
                <Input
                  type="number"
                  value={SIRET}
                  valid={SIRET !== ''}
                  label="SIRET *"
                  onChange={(e) => {
                    e.target.value.length <= 14 && setSIRET(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.stepperContainer}>
              <Grid item xs={12} md={6} className={classes.stepperInput}>
                <div className={classes.stepperInputContent}>
                  <FileUploadIcon className={classes.stepperInputIcon} />
                  <div className={classes.stepperInputTexts}>
                    <span className={classes.stepperInputText}>
                      Cliquez sur le justificatif
                    </span>
                    <span className={classes.stepperInputText}>
                      pour ajouter votre document
                    </span>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} className={classes.steppers}>
                {steps.map((item) => (
                  <div key={item.id} className={classes.stepper}>
                    <div className={classes.stepperRow}>
                      <div
                        className={classes.stepperIconWrapper}
                        onClick={() => {
                          document
                            .getElementById(`fileinput${item.id}`)
                            .click();
                        }}
                      >
                        {getStep(item.id).name !== '' && (
                          <Tick className={classes.stepperIcon} />
                        )}
                      </div>
                      <input
                        type="file"
                        hidden
                        id={`fileinput${item.id}`}
                        onChange={(e) => {
                          getStep(item.id).fn(e.target.files[0]);
                        }}
                      />
                      <div
                        className={`${classes.stepperTitle} ${
                          getStep(item.id).name === ''
                            ? classes.stepperTitleDone
                            : ''
                        }`}
                      >
                        {item.title}
                      </div>
                    </div>
                    <div className={classes.stepperDesc}>
                      {item.description}
                    </div>
                  </div>
                ))}
              </Grid>
            </Grid>
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
