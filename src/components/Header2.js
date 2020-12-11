import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { ReactComponent as Logo } from '../assets/images/fan.svg';
import { ReactComponent as Home } from '../assets/images/home.svg';
import { ReactComponent as Calendar } from '../assets/images/calendar.svg';
import * as actionTypes from '../store/actions/actionTypes';
import Constants from '../globals/Constants';

const drawerWidth = 90;
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#F5F6F9',
    zIndex: theme.zIndex.drawer + 1,
    height: drawerWidth,
    boxShadow: '0px 2px 25px -1px rgba(0,0,0,0.2)',
  },
  toolbar: {
    padding: 0,
    height: drawerWidth,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    width: drawerWidth,
    height: drawerWidth,
    backgroundColor: '#25265E',
    display: 'grid',
    placeItems: 'center',
  },
  logo: {},
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#4DA1FF',
    paddingTop: drawerWidth * 2,
  },
  //
  list: {
    margin: 0,
    padding: 0,
  },
  listItem: {
    margin: '0 0 20px 0',
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    padding: 20,
    textDecoration: 'none',
    borderRight: '2px solid transparent',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#4177CE',
      borderColor: '#FFC800',
    },
  },
  listItemActive: {
    backgroundColor: '#4177CE',
    borderColor: '#FFC800',
  },
  listItemIcon: {
    width: '28px',
    height: '28px',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  profileName: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    textDecoration: 'none',
    marginRight: 10,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10,
    objectFit: 'cover',
  },
  link: {
    color: '#00A1FF',
    textDecoration: 'none',
    fontWeight: 'light',
  },
}));

const Header = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id="header">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <NavLink to="/" className={classes.logoContainer}>
            <Logo className={classes.logo} />
          </NavLink>
          <div className={classes.profile}>
            <span className={classes.profileName}>
              Hello,{' '}
              <NavLink to="/" className={classes.link}>
                {store.user.firstName + ' ' + store.user.lastName}
              </NavLink>
            </span>
            <img
              src={Constants.BASE_URL + '/' + store.user.proofs.profile}
              alt="profileImage"
              className={classes.profileImage}
            />
            <div>
              <KeyboardArrowDownIcon
                className={classes.link}
                onClick={handleClick}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={NavLink} to="/profile">
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => dispatch({ type: actionTypes.LOGOUT })}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
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
            exact
            className={classes.listItem}
            activeClassName={classes.listItemActive}
          >
            <Home className={classes.listItemIcon} />
          </NavLink>
          <NavLink
            to="/invitations"
            exact
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

export default Header;
