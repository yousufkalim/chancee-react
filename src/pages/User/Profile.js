import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { ReactComponent as Logo } from "../../assets/images/fan.svg";
import { ReactComponent as Home } from "../../assets/images/home.svg";
import { ReactComponent as Calendar } from "../../assets/images/calendar.svg";

const drawerWidth = 90;
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F5F6F9",
  },
  appBar: {
    backgroundColor: "#F5F6F9",
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    height: drawerWidth,
  },
  toolbar: {
    padding: 0,
    height: drawerWidth,
  },
  logoContainer: {
    width: drawerWidth,
    height: drawerWidth,
    backgroundColor: "#25265E",
    display: "grid",
    placeItems: "center",
  },
  logo: {},
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#4DA1FF",
    paddingTop: drawerWidth * 2,
  },
  //
  list: {
    margin: 0,
    padding: 0,
  },
  listItem: {
    margin: "0 0 20px 0",
    width: "100%",
    display: "grid",
    placeItems: "center",
    padding: 20,
    textDecoration: "none",
    borderRight: "2px solid transparent",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#4177CE",
      borderColor: "#FFC800",
    },
  },
  listItemActive: {
    backgroundColor: "#4177CE",
    borderColor: "#FFC800",
  },
  listItemIcon: {
    width: "28px",
    height: "28px",
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <NavLink to="/" className={classes.logoContainer}>
            <Logo className={classes.logo} />
          </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <ul className={classes.list}>
          <NavLink
            to="/"
            className={classes.listItem}
            activeClassName={classes.listItemActive}
          >
            <Home className={classes.listItemIcon} />
          </NavLink>
          <NavLink
            to="/lists"
            className={classes.listItem}
            activeClassName={classes.listItemActive}
          >
            <Calendar className={classes.listItemIcon} />
          </NavLink>
        </ul>
      </Drawer>
    </div>
  );
};

export default Profile;
