import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

import Header from "../../components/Header2";
import Table from "../../components/Table";

import { ReactComponent as CompanyIcon } from "../../assets/images/diamond.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F5F7FB",
    paddingTop: 90,
    paddingLeft: 90,
    minHeight: "100vh",
  },
  content: {
    padding: 30,
    paddingBottom: 100,
  },
  itemRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "& > svg": {
      width: 30,
      height: 30,
      marginRight: 5,
    },
  },
  rowIcon: {
    outline: "none",
    cursor: "pointer",
  },
  yellowIcon: {
    color: "orange",
  },
  tableHeader: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: "15px",
    margin: "20px 0",
  },
  tableButton: {
    color: "#fff",
    border: "none",
    borderRadius: 6,
    fontSize: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    padding: "3px 6px",
    backgroundColor: "#c21d12",
  },
}));

const Profile = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const rows = [
    [
      1,
      [
        <div className={classes.itemRow}>
          <CompanyIcon /> Starbucks
        </div>,
      ],
      "20/11/2020",
      "8h - 13h",
      "Moissy (77)",
      "130€",
      "Confirmée",
      [<div className={classes.tableButton}>ANNULER</div>],
    ],
    [
      2,
      [
        <div className={classes.itemRow}>
          <CompanyIcon /> Starbucks
        </div>,
      ],
      "19/11/2020",
      "8h - 21h",
      "Moissy (77)",
      "240€",
      "Confirmée",
      [<div className={classes.tableButton}>ANNULER</div>],
    ],
    [
      3,
      [
        <div className={classes.itemRow}>
          <CompanyIcon /> Starbucks
        </div>,
      ],
      "14/11/2020",
      "8h - 13h",
      "Moissy (77)",
      "130€",
      "Réalisée",
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
            style={{ backgroundColor: "#000", marginLeft: 5 }}
          >
            NOTER
          </div>
        </div>,
      ],
    ],
    [
      4,
      [
        <div className={classes.itemRow}>
          <CompanyIcon /> Starbucks
        </div>,
      ],
      "14/11/2020",
      "8h - 13h",
      "Moissy (77)",
      "130€",
      "Réalisée",
      "Noté 4/5",
    ],
  ];

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <section id="table">
          <div className={classes.tableHeader}>MISSIONS VALIDÉES</div>
          <div className={classes.tableContainer}>
            <Table
              headers={[
                "ENTREPRISE",
                "DATE",
                "HORAIRES",
                "VILLE",
                "MONTANT TOTAL",
                "STATUS",
                "ACTION",
              ]}
              rows={rows}
              dateItem={2}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
