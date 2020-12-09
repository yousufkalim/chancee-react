import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

import { ReactComponent as Star } from '../../assets/images/star.svg';
import { ReactComponent as Tick } from '../../assets/images/Tick2.svg';
import { ReactComponent as Cross } from '../../assets/images/Cross.svg';

import API from '../../globals/API';
import Constants from '../../globals/Constants';

import Header from '../../components/Header2';
import Table from '../../components/Table';
import Loader from '../../components/Loader';
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '20px 0',
    padding: '0px 15px',
  },
  tableHeaderLeft: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  tableHeaderRight: {
    color: '#4DA1FF',
    fontSize: 22,
    fontWeight: 'bold',
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

const Profile = (props) => {
  const classes = useStyles();
  const store = useSelector((state) => state);

  const [offers, setOffers] = useState([]);
  const [value, setValue] = useState(2);
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [acceptRejectLoading, setAcceptRejectLoading] = useState(false);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const getData = async () => {
    try {
      const offers = await API({
        uri: Constants.GET_OFFERS,
        token: store.token,
      });
      const invites = await API({
        uri: Constants.GET_INVITATIONS,
        token: store.token,
      });
      setInvitations(invites.invites);
      setOffers(offers.offers);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const acceptInvite = async (id) => {
    try {
      if (window.confirm('Are you sure about this action?')) {
        setAcceptRejectLoading(true);
        const data = await API({
          uri: Constants.ACCEPT_INVITE + `/${id}`,
          token: store.token,
        });
        setInvitations((st) => st.filter((i) => i._id !== data.offer._id));
        setOffers((st) => [...st, data.offer]);
        setAcceptRejectLoading(false);
      }
    } catch (err) {
      if (err.message === "Offer reached it's required person limit") {
        setInvitations((st) => st.filter((i) => i._id !== id));
      }
      setAcceptRejectLoading(false);
    }
  };
  const rejectInvite = async (id) => {
    try {
      if (window.confirm('Are you sure about this action?')) {
        setAcceptRejectLoading(true);
        const data = await API({
          uri: Constants.REJECT_INVITE + `/${id}`,
          token: store.token,
        });
        setInvitations((st) => st.filter((i) => i._id !== data.offer._id));
        setAcceptRejectLoading(false);
      }
    } catch (err) {
      setAcceptRejectLoading(false);
    }
  };
  const cancelOffer = async (id) => {
    try {
      if (window.confirm('Are you sure about this action?')) {
        setAcceptRejectLoading(true);
        await API({
          method: 'POST',
          uri: Constants.CANCEL_OFFER,
          token: store.token,
          body: JSON.stringify({
            userId: store.user._id,
            offerId: id,
          }),
        });
        setOffers((st) => st.filter((i) => i._id !== id));
        setAcceptRejectLoading(false);
      }
    } catch (err) {
      setAcceptRejectLoading(false);
    }
  };
  const rateUser = async (offerId, companyId) => {
    try {
      if (window.confirm('Are you sure about this action?')) {
        setAcceptRejectLoading(true);
        const response = await API({
          method: 'POST',
          uri: Constants.RATE_COMPANY,
          token: store.token,
          body: JSON.stringify({
            note: '',
            strength: value,
            offerId: offerId,
            toUserId: companyId,
          }),
        });

        let newData = offers.map((offer) => {
          if (String(offer._id) === String(offerId)) {
            offer.company = response.user;
          }
          return offer;
        });

        setOffers(newData);
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
  const checkStatus = (offer) => {
    return offer.deliveryMen.find((item) => item.personId === store.user._id)
      .status;
  };

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        {loading ? (
          <Loader.Progress />
        ) : (
          <>
            <section id="invitations">
              <div className={classes.tableHeader}>
                <div className={classes.tableHeaderLeft}>
                  INVITATIONS RECUES
                </div>
                <div className={classes.tableHeaderRight}>
                  MONTANT TOTAL ACQUIS : {store.user.totalEaring}€
                </div>
              </div>
              <div className={classes.tableContainer}>
                <Table
                  headers={[
                    'ENTREPRISE',
                    'DATE',
                    'HORAIRES',
                    'VILLE',
                    'MONTANT TOTAL',
                    'STATUS',
                    'ACTION',
                  ]}
                  values={invitations.map((item) => [
                    <Row key={item._id}>
                      <img
                        src={
                          Constants.BASE_URL + '/' + item.company.proofs.profile
                        }
                        alt="Profile"
                        className={classes.avatar}
                      />
                      {item.company.company.companyName}
                    </Row>,
                    moment(item.date).format('YYYY-MM-DD'),
                    `${item.start}h - ${item.end}h`,
                    `${item.company.address.city} (${item.company.address.zip})`,
                    `${calcPrice(
                      item.start,
                      item.end,
                      store.user.delivery.perHour,
                    )}€`,
                    <div className={classes.itemRow}>
                      <Star className={classes.yellowIcon} />{' '}
                      {item.company.averageRating}/5 ({item.company.note.length}{' '}
                      notes)
                    </div>,
                    <div className={classes.itemRow}>
                      <Tick
                        className={classes.rowIcon}
                        onClick={() =>
                          !acceptRejectLoading && acceptInvite(item._id)
                        }
                      />
                      <Cross
                        className={classes.rowIcon}
                        onClick={() =>
                          !acceptRejectLoading && rejectInvite(item._id)
                        }
                      />
                    </div>,
                  ])}
                />
              </div>
            </section>
            <section id="offers">
              <div className={classes.tableHeader}>
                <div className={classes.tableHeaderLeft}>MISSIONS VALIDÉES</div>
              </div>
              <div className={classes.tableContainer}>
                <Table
                  headers={[
                    'ENTREPRISE',
                    'DATE',
                    'HORAIRES',
                    'VILLE',
                    'MONTANT TOTAL',
                    'STATUS',
                    'ACTION',
                  ]}
                  values={offers.map((item) => [
                    <Row key={item._id}>
                      <img
                        src={
                          Constants.BASE_URL + '/' + item.company.proofs.profile
                        }
                        alt="Profile"
                        className={classes.avatar}
                      />
                      {item.company.company.companyName}
                    </Row>,
                    moment(item.date).format('YYYY-MM-DD'),
                    `${item.start}h - ${item.end}h`,
                    `${item.company.address.city} (${item.company.address.zip})`,
                    `${calcPrice(
                      item.start,
                      item.end,
                      store.user.delivery.perHour,
                    )}€`,
                    checkStatus(item),
                    checkStatus(item) === 'completed' ? (
                      item.company.rating &&
                      item.company.rating.rating.some(
                        (rating) => rating.offerId === item._id,
                      ) ? (
                        <div>
                          Noté{' '}
                          {
                            item.company.rating.rating.filter(
                              (rating) => rating.offerId === item._id,
                            )[0].strength
                          }
                          /5
                        </div>
                      ) : (
                        <div className={classes.itemRow}>
                          <Rating
                            name="rating"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            size="small"
                          />
                          <TableButton
                            color="black"
                            text="NOTER"
                            disabled={acceptRejectLoading}
                            onClick={() => rateUser(item._id, item.company._id)}
                            style={{ marginLeft: 5, height: 25 }}
                          />
                        </div>
                      )
                    ) : checkStatus(item) === 'pending' ? (
                      <TableButton
                        color="error"
                        text="ANNULER"
                        disabled={acceptRejectLoading}
                        onClick={() => cancelOffer(item._id)}
                      />
                    ) : (
                      'Pas d’action'
                    ),
                  ])}
                  // dateItem={2}
                />
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
