import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";

import Logo from "../assets/images/Logo.png";
import { ReactComponent as Twitter } from "../assets/images/twitter.svg";
import { ReactComponent as Facebook } from "../assets/images/facebook.svg";
import { ReactComponent as LinkedIn } from "../assets/images/linkedin.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#FAFBFB",
  },
  toolBar: {
    minHeight: 64,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,
    margin: 0,
  },
  logo: {
    height: 35,
  },
  link: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
    margin: "0 12px",
    textDecoration: "none",
  },
  socialIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  socialIconC: {
    width: 30,
    height: 30,
    marginLeft: 10,
    display: "grid",
    borderRadius: "50%",
    placeItems: "center",
    border: "1px solid #ccc",
  },
  socialIcon: {
    width: 12,
    height: 12,
  },
}));

export default function Login(props) {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="xl">
        <Toolbar className={classes.toolBar}>
          <Link to="/">
            <img src={Logo} className={classes.logo} alt="Logo" />
          </Link>
          <nav>
            <Link className={classes.link} to="/shop">
              SHOP
            </Link>
            <Link className={classes.link} to="/service">
              SERVICE
            </Link>
            <Link className={classes.link} to="/about">
              ABOUT
            </Link>
            <Link className={classes.link} to="/support">
              SUPPORT
            </Link>
          </nav>
          <nav className={classes.socialIcons}>
            <a className={classes.socialIconC} href="www.google.com">
              <Facebook className={classes.socialIcon} />
            </a>
            <a className={classes.socialIconC} href="www.google.com">
              <Twitter className={classes.socialIcon} />
            </a>
            <a className={classes.socialIconC} href="www.google.com">
              <LinkedIn className={classes.socialIcon} />
            </a>
          </nav>
        </Toolbar>
      </Container>
    </div>
  );
}
