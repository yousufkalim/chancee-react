import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Tick } from '../assets/images/tick.svg';
import { ReactComponent as Attach } from '../assets/images/Attach.svg';
import { ReactComponent as FileUploadIcon } from '../assets/images/FileUpload.svg';

import Heading from '../components/FormStepHeader';

const useStyles = makeStyles((theme) => ({
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
    minWidth: 30,
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
}));

export default function DocumentUploading(props) {
  const classes = useStyles();

  return (
    <>
      {!props.justCheckbox && (
        <Heading
          icon={Attach}
          heading={props.heading ? props.heading : 'DOCUMENTS A JOINDRE'}
        />
      )}
      <Grid container className={classes.stepperContainer}>
        {!props.justCheckbox && (
          <Grid item xs={12} md={6} className={classes.stepperInput}>
            <div className={classes.stepperInputContent}>
              <FileUploadIcon className={classes.stepperInputIcon} />
              <div className={classes.stepperInputTexts}>
                <span className={classes.stepperInputText}>
                  {props.title ? props.title : 'Cliquez sur le justificatif'}
                </span>
                <span className={classes.stepperInputText}>
                  {props.title2 ? props.title2 : 'pour ajouter votre document'}
                </span>
              </div>
            </div>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={props.justCheckbox ? 12 : 6}
          className={classes.steppers}
        >
          {props.steps.map((item) => (
            <div key={item.id} className={classes.stepper}>
              <div className={classes.stepperRow}>
                <div
                  className={classes.stepperIconWrapper}
                  onClick={() => {
                    document.getElementById(`fileinput${item.title}`).click();
                  }}
                >
                  {props.getStep(item.id).name !== '' && (
                    <Tick className={classes.stepperIcon} />
                  )}
                </div>
                <input
                  type="file"
                  hidden
                  id={`fileinput${item.title}`}
                  onChange={(e) => {
                    props.getStep(item.id).fn(e.target.files[0]);
                  }}
                />
                <div
                  className={`${classes.stepperTitle} ${
                    props.getStep(item.id).name === ''
                      ? classes.stepperTitleDone
                      : ''
                  }`}
                >
                  {item.title}
                </div>
              </div>
              <div className={classes.stepperDesc}>{item.description}</div>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
