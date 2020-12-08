import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import API from '../globals/API';
import Constants from '../globals/Constants';

import LoginBG from '../assets/images/login.png';
import Input from '../components/Input';
import TableButton from '../components/TableButton';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${LoginBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subHeading: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 40,
  },
  form: {
    width: 280,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formItem: {
    width: '100%',
    margin: '10px 0',
  },
  icon: {
    color: '#fff',
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    width: '100%',
    margin: '30px 0 20px 0',
  },
  forgotText: {
    color: '#7D76BA',
    fontSize: 10,
    margin: '5px 0',
    textDecoration: 'none',
  },
  forgotTextWhite: {
    color: '#FFF',
    fontSize: 10,
    margin: '5px 0',
    textDecoration: 'none',
  },
  forgotRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default function PasswordForgot(props) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    email: '',
  });
  const [errors, setErrors] = React.useState({
    email: false,
  });

  const onSubmit = async () => {
    try {
      if (values.email === '') {
        setErrors({ ...errors, email: true });
      } else {
        setLoading(true);
        await API({
          method: 'POST',
          uri: Constants.PASSWORD_RECOVER,
          body: JSON.stringify({
            email: values.email,
          }),
        });
        alert('Email sent successfully!');
        props.history.replace('/');
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Forgot Password</Typography>
      <Typography className={classes.subHeading}>
        Enter your email to reset password
      </Typography>
      <div className={classes.form}>
        <div className={classes.formItem}>
          <Input
            type="email"
            name="email"
            placeholder="Nom d’utilisateur"
            value={values.email}
            onChange={(event) => {
              const re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
              if (!re.test(String(event.target.value).toLowerCase())) {
                setErrors({ ...errors, email: true });
              } else {
                setErrors({ ...errors, email: false });
              }
              setValues({ ...values, email: event.target.value });
            }}
            error={errors.email && 'Something'}
          />
        </div>
        <div className={classes.submitButton}>
          <TableButton
            fullWidth
            style={{ height: 46, borderRadius: 4, fontWeight: 'bold' }}
            text={'Submit'}
            onClick={onSubmit}
            disabled={loading}
          />
        </div>
      </div>
      <div className={classes.forgotRow}>
        <div className={classes.forgotText}>Vous ave d j un compte ?</div>
        &nbsp;&nbsp;&nbsp;
        <Link to="/" className={classes.forgotTextWhite}>
          Conne ion
        </Link>
      </div>
    </div>
  );
}
