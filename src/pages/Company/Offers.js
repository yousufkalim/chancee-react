import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

import Header from '../../components/HeaderCompany';
import Table2 from '../../components/Table2';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F5F7FB',
    paddingTop: 90,
    paddingLeft: 90,
    minHeight: '100vh',
  },
  content: {
    padding: 30,
    paddingBottom: 100,
  },
  itemRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '& > svg': {
      width: 30,
      height: 30,
      marginRight: 5,
    },
  },
  rowIcon: {
    outline: 'none',
    cursor: 'pointer',
  },
  yellowIcon: {
    color: 'orange',
  },
  tableHeader: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: '15px',
    margin: '20px 0',
  },
  tableButton: {
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    fontSize: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    padding: '5px 6px',
    backgroundColor: '#c21d12',
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [value, setValue] = React.useState(2);

  useEffect(() => {
    setData([
      [
        '21/02/2020',
        '12h - 16h',
        'Ahmad Jami',
        'Voitures',
        '220€',
        'Confirmée',
        [
          <div className={classes.itemRow}>
            <div className={classes.tableButton}>ANNULER</div>
          </div>,
        ],
      ],
      [
        '21/02/2020',
        '12h - 16h',
        'Ahmad Jami',
        'Voitures',
        '220€',
        'Confirmée',
        'Noté 4/5',
      ],
      [
        '21/02/2020',
        '12h - 16h',
        'Ahmad Jami',
        'Voitures',
        '220€',
        'Annulé par le livreur',
        'Pas d’action',
      ],
      [
        '21/02/2020',
        '12h - 16h',
        'Ahmad Jami',
        'Voitures',
        '220€',
        'Annulé par moi',
        'Pas d’action',
      ],
      [
        '21/02/2020',
        '12h - 16h',
        'Ahmad Jami',
        'Voitures',
        '220€',
        'Completé',
        [
          <div className={classes.itemRow}>
            <Rating
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              size="small"
            />
            <div
              className={classes.tableButton}
              style={{ backgroundColor: '#000', marginLeft: 5 }}
            >
              NOTER
            </div>
          </div>,
        ],
      ],
      [
        '21/02/2020',
        '12h - 16h',
        'Ahmad Jami',
        'Voitures',
        '220€',
        'Invité, non confirmé',
        [
          <div className={classes.itemRow}>
            <div className={classes.tableButton}>ANNULER</div>
          </div>,
        ],
      ],
      [
        '21/02/2020',
        '12h - 16h',
        'Ahmad Jami',
        'Voitures',
        '220€',
        'Invité, non confirmé',
        'Mission passée',
      ],
    ]);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <section id="table">
          <div className={classes.tableHeader}>TOUTES LES MISSIONS</div>
          <div className={classes.tableContainer}>
            <Table2
              headers={[
                'DATE',
                'HEURE',
                'NOM DU LIVREUR',
                'TYPE DE VEHICULE',
                'MONTANT TOTAL',
                'STATUS',
                'ACTION',
              ]}
              values={data}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
