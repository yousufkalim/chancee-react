import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header2";
import Table from "../../components/Table";

import { ReactComponent as CompanyIcon } from "../../assets/images/diamond.svg";
import { ReactComponent as Tick } from "../../assets/images/Tick2.svg";
import { ReactComponent as Cross } from "../../assets/images/Cross.svg";
import { ReactComponent as Star } from "../../assets/images/star.svg";

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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px 0",
    padding: "0px 15px",
  },
  tableHeaderLeft: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
  },
  tableHeaderRight: {
    color: "#4DA1FF",
    fontSize: 22,
    fontWeight: "bold",
  },
}));

const Profile = (props) => {
  const classes = useStyles();

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
      [
        <div className={classes.itemRow}>
          <Star className={classes.yellowIcon} /> 4.3/5 (43 notes)
        </div>,
      ],
      [
        <div className={classes.itemRow}>
          <Tick
            className={classes.rowIcon}
            onClick={() => alert("Are you sure you want to do this? 1")}
          />
          <Cross
            className={classes.rowIcon}
            onClick={() => alert("Are you sure you want to do this? 1")}
          />
        </div>,
      ],
    ],
    [
      2,
      [
        <div className={classes.itemRow}>
          <CompanyIcon /> McDonalds
        </div>,
      ],
      "20/11/2020",
      "8h - 21h",
      "Moissy (77)",
      "240€",
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
      3,
      [
        <div className={classes.itemRow}>
          <CompanyIcon /> McDonalds
        </div>,
      ],
      "20/11/2020",
      "8h - 21h",
      "Moissy (77)",
      "130€",
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

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <section id="table">
          <div className={classes.tableHeader}>
            <div className={classes.tableHeaderLeft}>INVITATIONS RECUES</div>
            <div className={classes.tableHeaderRight}>
              MONTANT TOTAL ACQUIS : 43.540€
            </div>
          </div>
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
