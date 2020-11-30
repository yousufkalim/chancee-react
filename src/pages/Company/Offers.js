import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

import API from '../../globals/API';
import Constants from '../../globals/Constants';

import Table from '../../components/Table';
import Loader from '../../components/Loader';
import Header from '../../components/HeaderCompany';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 90,
    paddingLeft: 90,
    minHeight: '100vh',
    backgroundColor: '#F5F7FB',
  },
  content: {
    padding: 30,
    height: '100%',
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
  const store = useSelector((state) => state);

  const [data, setData] = useState([]);
  const [value, setValue] = React.useState(2);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const rows = [
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
    ];
    getData();
    // eslint-disable-next-line
  }, []);

  const getData = async () => {
    try {
      const data = await API({
        uri: Constants.GET_OFFERS,
        token: store.token,
      });
      console.log({ data });
      // setData(offersArray);
      // setLoading(false)
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        {loading ? (
          <Loader.Progress />
        ) : (
          <section id="table">
            <div className={classes.tableHeader}>TOUTES LES MISSIONS</div>
            <div className={classes.tableContainer}>
              <Table
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
        )}
      </div>
    </div>
  );
};

export default Profile;
