import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import API from '../../../globals/API';
import Constants from '../../../globals/Constants';
import moment from 'moment';
import Hidden from '@material-ui/core/Hidden';
import Table from '../../../components/Table';
import Loader from '../../../components/Loader';
import PageHeading from '../../../components/PageHeading';
import TableButton from '../../../components/TableButton';

const useStyles = makeStyles((theme) => ({
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
  tableButton: {
    outline: 0,
    fontSize: 15,
    color: '#FFF',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    padding: '10px 10px',
    whiteSpace: 'nowrap',
    backgroundColor: '#000',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
}));

const Row = (props) => {
  const classes = useStyles();

  return <div className={classes.row}>{props.children}</div>;
};

const Result = (props) => {
  const classes = useStyles();
  const store = useSelector((state) => state);

  const [data, setData] = useState('');
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);
  const [inviteLoading, setInviteLoading] = useState(false);
  const [invitedUsers, setInvitedUsers] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      props.setPage(1);
      props.setKM(60);
      props.setRate(18);
      props.setVolume(2);
      props.setRating(3);
      props.setVehicles(new Set([4]));
      props.setDay(moment().format('YYYY-MM-DD'));
      props.setFrom(6);
      props.setTo(8);
      props.setDeliveries('1');
    }, 880000);
    getData();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);

  const getData = async () => {
    try {
      const filters = props.filters;
      let volume =
        filters.volume === 1
          ? 'small'
          : filters.volume === 2
          ? 'medium'
          : 'large';
      let vehicles = [];
      filters.vehicles.has(1) && vehicles.push('Bike');
      filters.vehicles.has(2) && vehicles.push('Scooter');
      filters.vehicles.has(3) && vehicles.push('Electric bike');
      filters.vehicles.has(4) && vehicles.push('Car');
      filters.vehicles.has(5) && vehicles.push('Truck');
      filters.vehicles.has(6) && vehicles.push('Large volume permit');
      setFilters({
        time: `${moment(filters.day).format('DD/MM/YYYY') || '--:--:----'}, ${
          filters.from || '00'
        }h - ${filters.to || '00'}h`,
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
          start: filters.from,
          end: filters.to,
          date: filters.day,
          range: filters.KM,
          vehicle: vehicles,
          volume: volume,
          price: filters.rate,
          requiredPerson: filters.deliveries,
          rating: filters.rating,
        }),
        token: store.token,
      });

      setData(data);
      setLoading(false);
    } catch (err) {}
  };
  const onSendInvite = async (offerId, userId) => {
    try {
      setInviteLoading(true);
      const data = await API({
        method: 'POST',
        uri: Constants.SEND_INVITE,
        body: JSON.stringify({
          _id: userId,
          offerId: offerId,
        }),
        token: store.token,
      });

      setInvitedUsers((ar) => [...ar, data.user._id]);
      setInviteLoading(false);
    } catch (err) {}
  };

  const calcPrice = (start, end, rate) => {
    let hoursToAddPerc = 0;
    if (parseInt(start) >= 0 && parseInt(start) < 8) {
      hoursToAddPerc = hoursToAddPerc + (8 - start);
    }
    if (parseInt(end) >= 20 && parseInt(end) < 24) {
      hoursToAddPerc = hoursToAddPerc + (24 - end);
    }
    let hours = Math.abs(end - start);
    let NewRate = hours * rate;
    if (hoursToAddPerc > 0) {
      NewRate = NewRate + rate * 0.1 * hoursToAddPerc;
    }
    return NewRate;
  };

  function checkVehicle(item) {
    let last = item[item.length - 1];
    last = last.replace('/ ', '');

    let newitem = item;
    newitem[newitem.length - 1] = last;
    console.log(newitem);
    return newitem.map((ite) => ite);
  }

  return loading ? (
    <Loader.PageProgress />
  ) : (
    <div className={classes.content}>
      <PageHeading left="RESULTATS DE LA RECHERCHE" />
      <div className={classes.filters}>
        <Hidden mdDown implementation="css">
          <div className={classes.filtersRow}>
            {Object.values(filters).map((i) => (
              <div key={i} className={classes.filter}>
                {Array.isArray(i) ? checkVehicle(i) : i}
              </div>
            ))}
          </div>
        </Hidden>
        <Hidden lgUp implementation="css">
          <div>
            <KeyboardArrowDownIcon
              className={classes.link}
              onClick={handleClick}
            />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {console.log(filters)}
              {Object.values(filters).map((i) => (
                <MenuItem key={i}>
                  {Array.isArray(i) ? checkVehicle(i) : i}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Hidden>
        <TableButton
          color="black"
          onClick={() => props.setPage(1)}
          text="Modifier"
        />
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
        values={data.users.map((item) => [
          <Row>
            <img
              src={Constants.BASE_URL + '/' + item.proofs.profile}
              alt="Profile"
              className={classes.avatar}
            />
            {item.firstName} {item.lastName}
          </Row>,
          item.delivery.transportType,
          item.delivery.vehicle.vehicleType,
          `${item.delivery.perHour}€`,
          `${calcPrice(
            data.offer.start,
            data.offer.end,
            item.delivery.perHour,
          )}€`,
          `${item.averageRating}/5`,
          <TableButton
            color="black"
            onClick={() => onSendInvite(data.offer._id, item._id)}
            disabled={
              inviteLoading ||
              invitedUsers.some((item2) => String(item2) === String(item._id))
            }
            text={
              invitedUsers.some((item2) => String(item2) === String(item._id))
                ? 'INVITED'
                : 'INVITER'
            }
          />,
        ])}
      />
    </div>
  );
};

export default Result;
