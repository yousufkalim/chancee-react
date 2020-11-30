import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

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
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontSize: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    padding: '3px 6px',
    backgroundColor: '#c21d12',
  },
}));

const Profile = (props) => {
  const classes = useStyles();
  const store = useSelector((state) => state);

  const [offers, setOffers] = useState([]);
  const [value, setValue] = React.useState(2);
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const invitationsArray = [
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
        [
          <div className={classes.itemRow}>
            <Star className={classes.yellowIcon} /> 4.3/5 (43 notes)
          </div>,
        ],
        [
          <div className={classes.itemRow}>
            <Tick
              className={classes.rowIcon}
              onClick={() => alert('Are you sure you want to do this? 1')}
            />
            <Cross
              className={classes.rowIcon}
              onClick={() => alert('Are you sure you want to do this? 1')}
            />
          </div>,
        ],
      ],
      [
        [
          <div className={classes.itemRow}>
            <CompanyIcon /> McDonalds
          </div>,
        ],
        '20/11/2020',
        '8h - 21h',
        'Moissy (77)',
        '240€',
        [
          <div className={classes.itemRow}>
            <Star className={classes.yellowIcon} /> 4.3/5 (43 notes)
          </div>,
        ],
        [
          <div className={classes.itemRow}>
            <Tick className={classes.rowIcon} />
            <Cross className={classes.rowIcon} />
          </div>,
        ],
      ],
      [
        [
          <div className={classes.itemRow}>
            <CompanyIcon /> McDonalds
          </div>,
        ],
        '20/11/2020',
        '8h - 21h',
        'Moissy (77)',
        '130€',
        [
          <div className={classes.itemRow}>
            <Star className={classes.yellowIcon} /> 4.3/5 (43 notes)
          </div>,
        ],
        [
          <div className={classes.itemRow}>
            <Tick className={classes.rowIcon} />
            <Cross className={classes.rowIcon} />
          </div>,
        ],
      ],
    ];
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
      const data = await API({
        uri: Constants.GET_OFFERS,
        token: store.token,
      });
      console.log({ data });
      // setInvitations(invitationsArray);
      // setOffers(offersArray);
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
                  values={invitations}
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
                  values={offers}
                  dateItem={2}
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
