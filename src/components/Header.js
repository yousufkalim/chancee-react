import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import * as actionTypes from "../store/actions/actionTypes";
import ProfileImage from "../assets/images/login.png";
import { ReactComponent as Logo } from "../assets/images/Logo.svg";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    minHeight: 64,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    height: 35,
  },
  link: {
    color: "#000",
    fontSize: 12,
    fontWeight: "light",
    margin: "0 12px",
    textDecoration: "none",
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    color: "#000",
    fontSize: 10,
    fontWeight: "bold",
    textDecoration: "none",
  },
}));

export default function Login(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="xl">
      <Toolbar className={classes.toolBar}>
        <Logo className={classes.logo} />
        <nav>
          <Link className={classes.link} to="/">
            Product
          </Link>
          <Link className={classes.link} to="/">
            Pricing
          </Link>
          <Link className={classes.link} to="/">
            Contacts
          </Link>
          <Link className={classes.link} to="/">
            Team
          </Link>
        </nav>
        <div>
          <div className={classes.profile} onClick={handleClick}>
            <img
              src={ProfileImage}
              alt="profileImage"
              className={classes.profileImage}
            />
            <span className={classes.profileName}>Anne-Gabrielle</span>
          </div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/profile">
              Profile
            </MenuItem>
            <MenuItem component={Link} to="/account">
              My account
            </MenuItem>
            <MenuItem onClick={() => dispatch({ type: actionTypes.LOGOUT })}>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </Container>
  );
}
