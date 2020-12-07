import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

import { ReactComponent as Star } from '../../assets/images/star.svg';
import { ReactComponent as Tick } from '../../assets/images/Tick2.svg';
import { ReactComponent as Cross } from '../../assets/images/Cross.svg';
import { ReactComponent as CompanyIcon } from '../../assets/images/diamond.svg';

import API from '../../globals/API';
import Constants from '../../globals/Constants';

import Header from '../../components/Header2';
import Table from '../../components/Table';
import Loader from '../../components/Loader';

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
  tableButton: {
    outline: 0,
    fontSize: 15,
    color: '#FFF',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    padding: '10px 10px',
    whiteSpace: 'nowrap',
    backgroundColor: '#c21d12',
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
    const offersArray = [
      [
        [
          <div className={classes.itemRow}>
            <CompanyIcon /> Starbucks
          </div>,
        ],
        '20/11/2020',
        '8h - 13h',
        'Moissy (77)',
        '130€',
        'Confirmée',
        [
          <div className={classes.itemRow}>
            <div className={classes.tableButton}>ANNULER</div>
          </div>,
        ],
      ],
      [
        [
          <div className={classes.itemRow}>
            <CompanyIcon /> Starbucks
          </div>,
        ],
        '19/11/2020',
        '8h - 21h',
        'Moissy (77)',
        '240€',
        'Confirmée',
        [
          <div className={classes.itemRow}>
            <div className={classes.tableButton}>ANNULER</div>
          </div>,
        ],
      ],
      [
        [
          <div className={classes.itemRow}>
            <CompanyIcon /> Starbucks
          </div>,
        ],
        '14/11/2020',
        '8h - 13h',
        'Moissy (77)',
        '130€',
        'Réalisée',
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
        [
          <div className={classes.itemRow}>
            <CompanyIcon /> Starbucks
          </div>,
        ],
        '14/11/2020',
        '8h - 13h',
        'Moissy (77)',
        '130€',
        'Réalisée',
        'Noté 4/5',
      ],
    ];
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
      setAcceptRejectLoading(true);
      const data = await API({
        uri: Constants.ACCEPT_INVITE + `/${id}`,
        token: store.token,
      });
      setInvitations((st) => st.filter((i) => i._id !== data.offer._id));
      setOffers((st) => [...st, data.offer]);
      setAcceptRejectLoading(false);
    } catch (err) {
      setAcceptRejectLoading(false);
    }
  };
  const rejectInvite = async (id) => {
    try {
      setAcceptRejectLoading(true);
      const data = await API({
        uri: Constants.REJECT_INVITE + `/${id}`,
        token: store.token,
      });
      setInvitations((st) => st.filter((i) => i._id !== data.offer._id));
      setAcceptRejectLoading(false);
    } catch (err) {
      setAcceptRejectLoading(false);
    }
  };
  const cancelOffer = async (id) => {
    try {
      setAcceptRejectLoading(true);
      await API({
        uri: Constants.CANCEL_OFFER + `/${id}`,
        token: store.token,
      });
      setOffers((st) => st.filter((i) => i._id !== id));
      setAcceptRejectLoading(false);
    } catch (err) {
      setAcceptRejectLoading(false);
    }
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
                  MONTANT TOTAL ACQUIS : 43.540€
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
                    [
                      <Row>
                        <img
                          src={
                            Constants.BASE_URL +
                            '/' +
                            item.company.proofs.profile
                          }
                          alt="Profile"
                          className={classes.avatar}
                        />
                        {item.company.company.companyName}
                      </Row>,
                    ],
                    moment(item.date).format('YYYY-MM-DD'),
                    `${item.start}h - ${item.end}h`,
                    `${item.company.address.city} (${item.company.address.zip})`,
                    `${item.price}€`,
                    [
                      <div className={classes.itemRow}>
                        <Star className={classes.yellowIcon} />{' '}
                        {item.company.averageRating}/5 (
                        {item.company.note.length} notes)
                      </div>,
                    ],
                    [
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
                    ],
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
                    <Row>
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
                    `${item.price}€`,
                    `${item.status === 'pending' ? 'Confirmée' : 'Started'}€`,
                    <div
                      className={classes.tableButton}
                      onClick={() =>
                        !acceptRejectLoading && rejectInvite(item._id)
                      }
                    >
                      ANNULER
                    </div>,
                  ])}
                  // dateItem={2}
                />
              </div>
              {console.log(
                offers,
                offers.map((item) => [
                  <Row>
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
                  `${item.price}€`,
                  `${item.status === 'pending' ? 'Confirmée' : 'Started'}`,
                  <div
                    className={classes.tableButton}
                    onClick={() =>
                      !acceptRejectLoading && cancelOffer(item._id)
                    }
                  >
                    ANNULER
                  </div>,
                ]),
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
