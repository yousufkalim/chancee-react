import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Rating from '@material-ui/lab/Rating';
import Modal from './Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    paddingTop: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: '50%',
    objectFit: 'cover',
  },
  name: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 35,
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  column: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  label: {
    fontSize: 13,
    color: '#000',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 13,
    color: '#000',
  },
  rating: {},
}));

const Profile = (props) => {
  const classes = useStyles();

  return (
    <Modal
      maxWidth="md"
      open={props.open}
      onClose={props.onClose}
      title={props.title}
      body={
        <div className={classes.root}>
          <img
            src={props.image}
            alt="profile"
            className={classes.profileImage}
          />
          <div className={classes.name}>{props.name}</div>
          <div className={classes.row}>
            <div>
              <div className={classes.column}>
                <label className={classes.label}>Email</label>
                <span className={classes.text}>{props.email}</span>
              </div>
              <div className={classes.column}>
                <label className={classes.label}>Phone</label>
                <span className={classes.text}>{props.phone}</span>
              </div>
              <div className={classes.column}>
                <label className={classes.label}>NUMERO DE SIRET</label>
                <span className={classes.text}>{props.siret}</span>
              </div>
            </div>
            <div>
              <div className={classes.column}>
                <label className={classes.label}>Street</label>
                <span className={classes.text}>{props.street}</span>
              </div>
              <div className={classes.column}>
                <label className={classes.label}>City</label>
                <span className={classes.text}>{props.city}</span>
              </div>
              <div className={classes.column}>
                <label className={classes.label}>Zip</label>
                <span className={classes.text}>{props.postal}</span>
              </div>
            </div>
          </div>
          <div className={classes.row} style={{ marginTop: 20 }}>
            <Rating
              className={classes.rating}
              name={'UserRatingInCard'}
              size="large"
              defaultValue={props.rating}
              readOnly
            />
          </div>
        </div>
      }
    />
  );
};

export default Profile;
