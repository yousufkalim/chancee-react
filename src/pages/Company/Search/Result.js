import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import API from '../../../globals/API';
import Constants from '../../../globals/Constants';

import Table from '../../../components/Table';
import Loader from '../../../components/Loader';
import Header from '../../../components/HeaderCompany';
import PageHeading from '../../../components/PageHeading';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F5F7FB',
    paddingTop: 90,
    paddingLeft: 90,
    minHeight: '100vh',
  },
  content: {
    padding: 30,
    height: '100%',
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
    maxWidth: 170,
    display: 'grid',
    borderRadius: 6,
    minWidth: '20px',
    overflowX: 'auto',
    overflowY: 'hidden',
    marginRight: '10px',
    placeItems: 'center',
    padding: '20px 25px',
    whiteSpace: 'nowrap',
    backgroundColor: '#fff',
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0,
    },
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
  const store = useSelector((state) => state);

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const filtersData = {
      time: '13/04/2020, 12h - 22h',
      KM: '40 km',
      weight: 'Moyenne taille',
      vehicles: 'Vélo / Vélo électrique',
      max: 'Max 18€/h',
      min: 'Min. 3/5',
      deliveries: '2 livreurs',
    };
    const rows = [
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
    ];
    getData();
    // eslint-disable-next-line
  }, []);

  const getData = async () => {
    try {
      const filters = props.location.state.filters;
      let volume =
        filters.volume === 1
          ? 'small'
          : filters.volume === 2
          ? 'medium'
          : 'large';
      let vehicles = [];
      filters.vehicles.has(1) && vehicles.push('Bike');
      filters.vehicles.has(2) && vehicles.push('Electric bike');
      filters.vehicles.has(3) && vehicles.push('Scooter');
      filters.vehicles.has(4) && vehicles.push('Car');
      filters.vehicles.has(5) && vehicles.push('Truck');
      filters.vehicles.has(6) && vehicles.push('Large volume permit');
      setFilters({
        time: `${filters.day || '--:--:----'}, ${filters.from || '00'}h - ${
          filters.to || '00'
        }h`,
        KM: `${filters.KM} km`,
        weight: `${volume} taille`,
        vehicles:
          vehicles.length > 0
            ? vehicles.map((veh) => veh + ' / ')
            : 'All vehicules',
        max: `Max ${filters.rate}€/h`,
        min: `Min. ${filters.rating}/5`,
        deliveries: `${filters.deliveries || 0} livreurs`,
      });
      const data = await API({
        method: 'POST',
        uri: Constants.SEARCH,
        body: JSON.stringify({
          vehicleType: vehicles,
          transportType: volume,
          range: filters.KM,
          perHour: filters.rate,
          desiredPerson: filters.deliveries,
          rating: filters.rating,
          day: filters.day,
          startTime: filters.from,
          endTime: filters.to,
        }),
        token: store.token,
      });
      setData(data.users);
      setLoading(false);
    } catch (err) {}
  };

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <PageHeading left="RESULTATS DE LA RECHERCHE" />
        <div className={classes.filters}>
          <div className={classes.filtersRow}>
            {Object.values(filters).map((i) => (
              <div key={i} className={classes.filter}>
                {i}
              </div>
            ))}
          </div>
          <button
            className={classes.filterButton}
            onClick={() => props.history.goBack()}
          >
            Modifier
          </button>
        </div>

        {loading ? (
          <Loader.Progress />
        ) : (
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
            values={data}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
