import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import API from '../../globals/API';
import Constants from '../../globals/Constants';

import Table from '../../components/Table';
import Loader from '../../components/Loader';
import Header from '../../components/HeaderCompany';
import TableButton from '../../components/TableButton';

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

const Offers = (props) => {
  const classes = useStyles();
  const store = useSelector((state) => state);

  const [data, setData] = useState([]);
  const [value, setValue] = React.useState(2);
  const [loading, setLoading] = React.useState(true);
  const [acceptRejectLoading, setAcceptRejectLoading] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const rows = [
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
    ];
    getData();
    // eslint-disable-next-line
  }, []);

  const getData = async () => {
    try {
      const data = await API({
        uri: Constants.GET_COMPANY_OFFERS,
        token: store.token,
      });
      setData(data.offers);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const cancelOffer = async (offerId, userId) => {
    try {
      if (window.confirm('Are you sure about this action?')) {
        setAcceptRejectLoading(true);
        await API({
          method: 'POST',
          uri: Constants.CANCEL_OFFER,
          token: store.token,
          body: JSON.stringify({
            userId: userId,
            offerId: offerId,
          }),
        });

        const newData = data.map((offer) => {
          let desiredPersons = [];
          if (offer._id === offerId) {
            offer.desiredPersons.map(
              (person) =>
                person.userId._id !== userId && desiredPersons.push(person),
            );
            offer.desiredPersons = desiredPersons;
          }
          return offer;
        });

        setData(newData);
        setAcceptRejectLoading(false);
      }
    } catch (err) {
      setAcceptRejectLoading(false);
    }
  };
  const calcPrice = (start, end, rate) => {
    let hours = end - start;
    return hours * rate;
  };

  function renderData() {
    let newArray = [];
    data.map((item) =>
      item.desiredPersons.map(
        (person) =>
          person.status === 'pending' &&
          newArray.push([
            <Row>
              <img
                src={Constants.BASE_URL + '/' + person.userId.proofs.profile}
                alt="Profile"
                className={classes.avatar}
              />
              {person.userId.firstName + ' ' + person.userId.lastName}
            </Row>,
            moment(item.date).format('YYYY-MM-DD'),
            `${item.start}h - ${item.end}h`,
            `${person.userId.address.city} (${person.userId.address.zip})`,
            `${calcPrice(
              item.start,
              item.end,
              person.userId.delivery.perHour,
            )}€`,
            `${person.status}`,
            <TableButton
              error
              text="ANNULER"
              disabled={acceptRejectLoading}
              onClick={() => cancelOffer(item._id, person.userId._id)}
            />,
          ]),
      ),
    );
    return newArray;
  }
  function renderData2() {
    let newArray = [];
    data.map((item) =>
      item.deliveryMen.map((person) =>
        newArray.push([
          <Row>
            <img
              src={Constants.BASE_URL + '/' + person.personId.proofs.profile}
              alt="Profile"
              className={classes.avatar}
            />
            {person.personId.firstName + ' ' + person.personId.lastName}
          </Row>,
          moment(item.date).format('YYYY-MM-DD'),
          `${item.start}h - ${item.end}h`,
          `${person.personId.address.city} (${person.personId.address.zip})`,
          `${calcPrice(
            item.start,
            item.end,
            person.personId.delivery.perHour,
          )}€`,
          `${person.status}`,
          <>
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => console.log(item._id, person.personId._id)}
              >
                Start
              </MenuItem>
              <MenuItem
                onClick={() => console.log(item._id, person.personId._id)}
              >
                Complete
              </MenuItem>
              <MenuItem
                onClick={() =>
                  !acceptRejectLoading &&
                  cancelOffer(item._id, person.personId._id)
                }
              >
                Reject
              </MenuItem>
            </Menu>
          </>,
        ]),
      ),
    );
    return newArray;
  }

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        {loading ? (
          <Loader.Progress />
        ) : (
          <section id="table">
            <div className={classes.tableHeader}>
              INVITED: TOUTES LES MISSIONS
            </div>
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
                values={renderData()}
              />
            </div>
            <div className={classes.tableHeader}>
              DELIVERERS: TOUTES LES MISSIONS
            </div>
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
                values={renderData2()}
              />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Offers;
