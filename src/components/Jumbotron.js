import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Button from '../components/Button';

const useStyles = makeStyles((theme) => ({
  jumbo: {
    margin: '50px 0',
  },
  jumboImage: {
    width: '85%',
    [theme.breakpoints.down('md')]: {
      height: 200,
    },
  },
  jumboDetails: {
    padding: 40,
  },
  jumboTexts: {
    marginBottom: 20,
  },
  jumboText: {
    lineHeight: '54px',
    fontFamily: 'Catamaran',
    fontSize: '42px',
    color: 'rgba(50,60,71,1)',
  },
  jumboTextBold: {
    lineHeight: '54px',
    fontFamily: 'Catamaran',
    fontWeight: 'bold',
    fontSize: '42px',
    color: 'rgba(50,60,71,1)',
  },
  jumboButton: {
    maxWidth: 150,
    marginBottom: 20,
  },
  jumboDescription: {
    maxWidth: 512,
    lineHeight: '28px',
    fontFamily: 'Roboto',
    fontSize: '16px',
    color: 'rgba(152,152,152,1)',
    marginBottom: 20,
  },
  jumboIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  jumboIcon: {
    height: 30,
    marginRight: 10,
  },
}));

export default function Profile(props) {
  const classes = useStyles();

  return (
    <div className={classes.jumbo}>
      <Grid container alignItems="center">
        <Grid item xs={12} md={6}>
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <props.image className={classes.jumboImage} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.jumboDetails}>
          <div className={classes.jumboTexts}>
            <span className={classes.jumboText}>{props.head}</span>
            <br />
            <span className={classes.jumboTextBold}>{props.head2}</span>
          </div>
          <div className={classes.jumboButton}>
            <Button text={props.buttonText} disabled />
          </div>
          <div className={classes.jumboDescription}>{props.description}</div>
          <div className={classes.jumboIcons}>
            {props.icons &&
              props.icons.map((Icon, index) => (
                <Icon key={index} className={classes.jumboIcon} />
              ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
