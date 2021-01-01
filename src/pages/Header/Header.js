import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../wp-content/uploads/2020/09/VOC-CHANCEE-Logo-Negatif.png';
import $ from 'jquery';

import './Header.css';
const Header = () => {
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 130 ||
        document.documentElement.scrollTop > 130
      ) {
        $('#main-header').css('background-color', '#032d3c');
        $('#main-header').css('padding-bottom', '0px');
        $('#main-header').css('padding-top', '40px');
        $('#Logo').css('width', '40%');
        $('#Logo').css('margin-top', '-30px');
        $('#link2').css('font-size', '16px');
        $('#link1').css('font-size', '16px');
        $('#link1').css('margin-right', '-350px');
        $('#link2').css('margin-left', '-350px');
      } else {
        if (window.matchMedia('(max-width: 768px)').matches) {
          $('#Logo').css('width', '50%');
        } else {
          $('#main-header').css('background', 'transparent');
          $('#main-header').css('padding-bottom', '60px');
          $('#main-header').css('padding-top', '60px');
          $('#Logo').css('width', '90%');
          $('#Logo').css('margin-top', '-50px');
          $('#link2').css('font-size', '18px');
          $('#link1').css('font-size', '18px');
          $('#link1').css('margin-right', '-100px');
          $('#link2').css('margin-left', '-100px');
        }
      }
    });
    if (window.matchMedia('(max-width: 1024px)').matches) {
      $('#link1').css('margin-right', '0px');
      $('#link2').css('margin-left', '0px');
      $('#link2').css('font-size', '100%');
      $('#link1').css('font-size', '100%');
      $('#Logo').css('width', '50%');
    } else {
      $('#link1').css('margin-right', '-100px');
      $('#link2').css('margin-left', '-100px');
    }
  }, []);
  return (
    <div style={{ color: '#fff' }}>
      <header
        // data-height-onload={100}
        id="main-header"
        style={{
          background: 'transparent',
          color: '#fff',
          paddingTop: '60px',
          paddingBottom: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="newheader"
      >
        <div className="container clearfix et_menu_container">
          <div
            className="logo_container"
            id="menu"
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Link
              id="link1"
              style={{
                color: '#fff',
                width: '100%',
                fontWeight: 'bold',
                fontSize: '18px',
                textAlign: 'center',
                marginRight: '-100px',
              }}
              to="/delivery"
            >
              Je suis livreur
            </Link>
            {/* <span className="logo_helper" /> */}
            <Link to="/">
              <img
                src={Logo}
                alt="CHANCEE"
                id="Logo"
                width={'90%'}
                style={{ marginTop: '-50px' }}
                height={'100px'}
              />
            </Link>
            <Link
              id="link2"
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '18px',
                width: '100%',
                textAlign: 'center',
                marginLeft: '-100px',
              }}
              to="/resturent"
            >
              Je suis restaurateur
            </Link>
          </div>
          <div id="et-top-navigation" data-height={100} data-fixed-height={40}>
            {/*   <nav id="top-menu-nav">
              <ul id="top-menu" className="nav">
                <li
                  id="menu-item-25"
                  className="transparent-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-25"
                >
                  <Link to="/delivery">Je suis livreur</Link>
                </li>
                <li
                  id="menu-item-24"
                  className="transparent-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-24"
                >
                  <Link to="/resturent">Je suis restaurateur</Link>
                </li>
              </ul>{" "}
              
            </nav>*/}
            {/* <div id="et_mobile_nav_menu">
              <div className="mobile_nav closed">
                <span className="select_page">Sélectionner une page</span>
                <span className="mobile_menu_bar mobile_menu_bar_toggle" />
              </div>
            </div>{" "} */}
          </div>
          {/* #et-top-navigation */}
        </div>{' '}
        {/* .container */}
        {/* <div className="et_search_outer">
          <div className="container et_search_form_container">
            <form
              role="search"
              method="get"
              className="et-search-form"
              action="https://www.chancee.io/"
            >
              <input
                type="search"
                className="et-search-field"
                placeholder="Rechercher …"
                defaultValue
                name="s"
                title="Rechercher:"
              />{" "}
            </form>
            <span className="et_close_search_field" />
          </div>
        </div> */}
      </header>{' '}
    </div>
  );
};

export default Header;
