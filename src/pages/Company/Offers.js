import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InfoIcon from '@material-ui/icons/Info';

import API from '../../globals/API';
import Constants from '../../globals/Constants';
import StatusInFrench from '../../globals/StatusInFr';
import Texts from '../../globals/Texts';

import Table from '../../components/Table';
import Loader from '../../components/Loader';
import TableButton from '../../components/TableButton';
import ProfileCardModal from '../../components/ProfileCardModal';

const useStyles = makeStyles((theme) => ({
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

  return (
    <div className={classes.row} style={props.style}>
      {props.children}
    </div>
  );
};

const Offers = (props) => {
  const classes = useStyles();
  const store = useSelector((state) => state);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [acceptRejectLoading, setAcceptRejectLoading] = useState(false);

  const [userSelectData, setUserSelectedData] = useState('');
  const [userModal, setUserModal] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    getData();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
    } catch (err) {}
  };
  const cancelOffer = async (offerId, userId) => {
    try {
      if (window.confirm(Texts.sure)) {
        setAcceptRejectLoading(true);
        const response = await API({
          method: 'POST',
          uri: Constants.CANCEL_OFFER,
          token: store.token,
          body: JSON.stringify({
            userId: userId,
            offerId: offerId,
          }),
        });

        const newData = data.map((offer) => {
          if (String(offer._id) === String(offerId)) {
            offer = response.offer;
          }
          return offer;
        });

        setData(newData);
        handleClose();
        setAcceptRejectLoading(false);
      }
    } catch (err) {
      setAcceptRejectLoading(false);
    }
  };
  const activeOffer = async (offerId, userId) => {
    try {
      if (window.confirm(Texts.sure)) {
        setAcceptRejectLoading(true);
        const response = await API({
          method: 'POST',
          uri: Constants.ACTIVE_OFFER_USER,
          token: store.token,
          body: JSON.stringify({
            userId: userId,
            offerId: offerId,
          }),
        });

        let newData = data.map((offer) => {
          if (String(offer._id) === String(offerId)) {
            offer = response.offer;
          }
          return offer;
        });

        setData(newData);
        handleClose();
        setAcceptRejectLoading(false);
      }
    } catch (err) {
      setAcceptRejectLoading(false);
    }
  };
  const startOffer = async (offerId, userId) => {
    try {
      if (window.confirm(Texts.sure)) {
        setAcceptRejectLoading(true);
        const response = await API({
          method: 'POST',
          uri: Constants.START_OFFER_USER,
          token: store.token,
          body: JSON.stringify({
            userId: userId,
            offerId: offerId,
          }),
        });

        let newData = data.map((offer) => {
          if (String(offer._id) === String(offerId)) {
            offer = response.offer;
          }
          return offer;
        });
        setData(newData);
        handleClose();
        setAcceptRejectLoading(false);
      }
    } catch (err) {
      setAcceptRejectLoading(false);
    }
  };
  const completeOffer = async (offerId, userId) => {
    try {
      if (window.confirm(Texts.sure)) {
        setAcceptRejectLoading(true);
        const response = await API({
          method: 'POST',
          uri: Constants.COMPLETE_OFFER_USER,
          token: store.token,
          body: JSON.stringify({
            userId: userId,
            offerId: offerId,
          }),
        });
        let newData = data.map((offer) => {
          if (String(offer._id) === String(offerId)) {
            offer = response.offer;
          }
          return offer;
        });
        setData(newData);
        handleClose();
        setAcceptRejectLoading(false);
      }
    } catch (err) {
      setAcceptRejectLoading(false);
    }
  };
  const rateUser = async (e, offerId, userId) => {
    e.preventDefault();
    try {
      if (window.confirm(Texts.sure)) {
        setAcceptRejectLoading(true);
        const formData = new FormData(e.target);
        let rating = 0;
        for (let value of formData.values()) {
          rating = value;
        }
        const response = await API({
          method: 'POST',
          uri: Constants.RATE_USER,
          token: store.token,
          body: JSON.stringify({
            note: '',
            strength: rating,
            offerId: offerId,
            toUserId: userId,
          }),
        });

        let newData = data.map((offer) => {
          if (String(offer._id) === String(offerId)) {
            offer.deliveryMen.map((person) => {
              if (person.personId._id === userId) {
                person.personId = response.user;
              }
              return person;
            });
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

  function renderData() {
    let newArray = [];
    data.map((item) =>
      item.desiredPersons.map(
        (person) =>
          person.status === 'pending' &&
          newArray.push([
            moment(item.date).format('DD-MM-YYYY'),
            `${item.start}h - ${item.end}h`,
            <Row key={person._id} style={{ justifyContent: 'center' }}>
              <span style={{ position: 'relative' }}>
                {person.userId.firstName + ' ' + person.userId.lastName}
                <InfoIcon
                  style={{
                    position: 'absolute',
                    top: -18,
                    right: -15,
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setUserSelectedData(person.userId);
                    setUserModal(true);
                  }}
                />
              </span>
            </Row>,
            `${person.userId.delivery.vehicle.vehicleType}`,
            `${calcPrice(
              item.start,
              item.end,
              person.userId.delivery.perHour,
            )}€`,
            `${StatusInFrench(person.status)}`,
            <TableButton
              color="error"
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
          moment(item.date).format('DD-MM-YYYY'),
          `${item.start}h - ${item.end}h`,
          <Row key={person._id} style={{ justifyContent: 'center' }}>
            <span style={{ position: 'relative' }}>
              {person.personId.firstName + ' ' + person.personId.lastName}
              <InfoIcon
                style={{
                  position: 'absolute',
                  top: -18,
                  right: -15,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setUserSelectedData(person.personId);
                  setUserModal(true);
                }}
              />
            </span>
          </Row>,
          `${person.personId.delivery.vehicle.vehicleType}`,
          `${calcPrice(
            item.start,
            item.end,
            person.personId.delivery.perHour,
          )}€`,
          `${StatusInFrench(
            person.status === 'pending'
              ? person.status + 'user'
              : person.status,
          )}`,
          <>
            {person.status !== 'completed' && person.status !== 'rejected' ? (
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
                  {person.status === 'pending' && (
                    <>
                      <MenuItem
                        disabled={acceptRejectLoading}
                        onClick={() =>
                          !acceptRejectLoading &&
                          activeOffer(item._id, person.personId._id)
                        }
                      >
                        {Texts.active}
                      </MenuItem>
                      <MenuItem
                        disabled={acceptRejectLoading}
                        onClick={() =>
                          !acceptRejectLoading &&
                          startOffer(item._id, person.personId._id)
                        }
                      >
                        {Texts.start}
                      </MenuItem>
                    </>
                  )}
                  {person.status === 'active' && (
                    <MenuItem
                      disabled={acceptRejectLoading}
                      onClick={() =>
                        !acceptRejectLoading &&
                        startOffer(item._id, person.personId._id)
                      }
                    >
                      {Texts.start}
                    </MenuItem>
                  )}
                  {person.status === 'started' && (
                    <MenuItem
                      disabled={acceptRejectLoading}
                      onClick={() =>
                        !acceptRejectLoading &&
                        completeOffer(item._id, person.personId._id)
                      }
                    >
                      {Texts.complete}
                    </MenuItem>
                  )}
                  <MenuItem
                    disabled={acceptRejectLoading}
                    onClick={() =>
                      !acceptRejectLoading &&
                      cancelOffer(item._id, person.personId._id)
                    }
                  >
                    {Texts.reject}
                  </MenuItem>
                </Menu>
              </>
            ) : person.status === 'rejected' ? (
              'Pas d’action'
            ) : person.personId.rating &&
              person.personId.rating.rating.some(
                (rating) => rating.offerId === item._id,
              ) ? (
              <div>
                Noté{' '}
                {
                  person.personId.rating.rating.filter(
                    (rating) => rating.offerId === item._id,
                  )[0].strength
                }
                /5
              </div>
            ) : (
              <form
                className={classes.itemRow}
                onSubmit={(e) => rateUser(e, item._id, person.personId._id)}
              >
                <Rating
                  name={item._id + person.personId._id}
                  size="small"
                  defaultValue={3}
                />
                <TableButton
                  color="black"
                  text="NOTER"
                  type="submit"
                  disabled={acceptRejectLoading}
                  style={{ marginLeft: 5, height: 25 }}
                />
              </form>
            )}
          </>,
        ]),
      ),
    );
    return newArray;
  }

  return (
    <>
      {loading ? (
        <Loader.PageProgress />
      ) : (
        <div className={classes.content}>
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
                dateItem={2}
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
                dateItem={2}
              />
            </div>
          </section>
        </div>
      )}
      {userSelectData !== '' && (
        <ProfileCardModal
          open={userModal}
          onClose={() => setUserModal((st) => !st)}
          title="Utilisateur Profil"
          isUser={true}
          image={Constants.BASE_URL + '/' + userSelectData.proofs.profile}
          name={userSelectData.firstName + ' ' + userSelectData.lastName}
          email={userSelectData.email}
          street={userSelectData.address.street}
          complement={userSelectData.address.complement}
          city={userSelectData.address.city}
          postal={userSelectData.address.zip}
          phone={userSelectData.phone}
          siret={userSelectData.SIRET}
          rating={userSelectData.averageRating}
        />
      )}
    </>
  );
};

export default Offers;
