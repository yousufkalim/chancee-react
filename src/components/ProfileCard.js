import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Star } from '../assets/images/star.svg';
import { ReactComponent as Rocket } from '../assets/images/rocket.svg';
import { ReactComponent as Pencil } from '../assets/images/pencil.svg';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
  },
  root: {
    height: '100%',
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  profileEditIcon: {
    width: 30,
    height: 30,
    borderRadius: 30,
    border: '1px solid #ccc',
    display: 'grid',
    placeItems: 'center',
    position: 'absolute',
    right: 20,
  },
  profileCardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  profileEmail: {
    fontSize: 11,
    color: '#BBC9CD',
    marginBottom: 15,
  },
  profileCourses: {
    fontSize: 12,
    marginBottom: 15,
    color: '#27C1CC',
    borderRadius: 50,
    fontWeight: 'bold',
    padding: '10px 30px',
    backgroundColor: '#F0F6F7',
  },
  profileText: {
    fontSize: 12,
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  profileRatingArea: {
    borderTop: '1px solid #E7F0F0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileRating: {
    height: 35,
    fontSize: 14,
    color: '#395982',
    width: '33.33%',
    display: 'flex',
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px solid #E7F0F0',
    '& > *': {
      marginRight: 5,
    },
    '&:last-child': {
      borderRight: 'none',
    },
  },
  profileRatingIcon: {
    width: 15,
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.root}>
        <div className={classes.profileEditIcon}>
          <Pencil
            style={{ width: '50%', cursor: 'pointer' }}
            onClick={props.onClick}
          />
        </div>
        <div className={classes.profileCardContent}>
          <img
            src={props.image}
            alt="profile"
            className={classes.profileImage}
          />
          <div className={classes.profileName}>{props.name}</div>
          <div className={classes.profileEmail}>{props.email}</div>
          {props.isUser && (
            <div className={classes.profileCourses}>
              {props.courses} courses
            </div>
          )}
          <div className={classes.profileText}>
            {props.street}
            <br />
            {props.postal}
            <br />
            {props.city}
          </div>
          <div className={classes.profileText}>{props.phone}</div>
          <div className={classes.profileEmail} style={{ marginTop: 15 }}>
            NUMERO DE SIRET
          </div>
          <div className={classes.profileText}>{props.siret}</div>
        </div>
        <div className={classes.profileRatingArea}>
          <div className={classes.profileRating}>
            <Rocket className={classes.profileRatingIcon} />
            {props.rocket}
          </div>
          <div className={classes.profileRating}>
            <Star className={classes.profileRatingIcon} />
            {props.rating}
          </div>
          <div className={classes.profileRating}>({props.notes} notes)</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
