import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../../components/HeaderCompany';
import PageHeading from '../../../components/PageHeading';
import Table from '../../../components/Table2';

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
  filters: {
    width: '100%',
    display: 'flex',
    margin: '20px 0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filtersRow: {
    width: '85%',
    display: 'flex',
    overflowX: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    '&::-webkit-scrollbar': {
      height: '3px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  },
  filter: {
    display: 'grid',
    minWidth: '20px',
    overflow: 'hidden',
    marginRight: '10px',
    placeItems: 'center',
    padding: '20px 30px',
    whiteSpace: 'nowrap',
    backgroundColor: '#fff',
  },
  filterButton: {
    outline: 0,
    color: '#FFF',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    marginRight: '10px',
    padding: '15px 30px',
    whiteSpace: 'nowrap',
    backgroundColor: '#000',
    '&:hover': {
      opacity: '0.7',
    },
  },
  tableButton: {
    outline: 0,
    fontSize: 10,
    color: '#FFF',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    padding: '5px 10px',
    whiteSpace: 'nowrap',
    backgroundColor: '#000',
    '&:hover': {
      opacity: '0.9',
    },
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const [time, setTime] = useState('13/04/2020, 12h - 22h');
  const [KM, setKM] = useState('40 km');
  const [weight, setWeight] = useState('Moyenne taille');
  const [vehicle, setVehicles] = useState('Vélo / Vélo électrique');
  const [max, setMax] = useState('Max 18€/h');
  const [min, setMin] = useState('Min. 3/5');
  const [deliveries, setDeliveries] = useState('2 livreurs');

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <PageHeading left="RESULTATS DE LA RECHERCHE" />
        <div className={classes.filters}>
          <div className={classes.filtersRow}>
            {[time, KM, weight, vehicle, max, min, deliveries].map((i) => (
              <div key={i} className={classes.filter}>
                {i}
              </div>
            ))}
          </div>
          <button className={classes.filterButton}>Modifier</button>
        </div>

        <Table
          headers={[
            'LIVREUR',
            'VOLUME',
            'TYPE DE VEHICULE',
            'TARIF HORAIRE',
            'MONTANT TOTAL',
            'NOTE MOYENNE',
            'ACTION',
          ]}
          values={[
            [
              'Henry Lafford',
              'PETIT',
              'Voiture',
              '19€',
              '220€',
              '3.5/5',
              <button className={classes.tableButton}>INVITER</button>,
            ],
            [
              'Henry Lafford',
              'PETIT',
              'Voiture',
              '19€',
              '220€',
              '3.5/5',
              <button className={classes.tableButton}>INVITER</button>,
            ],
            [
              'Henry Lafford',
              'PETIT',
              'Voiture',
              '19€',
              '220€',
              '3.5/5',
              <button className={classes.tableButton}>INVITER</button>,
            ],
          ]}
        />
      </div>
    </div>
  );
};

export default Search;
