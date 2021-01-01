import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Footer = () => {
  $('#about').on('click', () => {
    $(window).scrollTop(0);
  });
  $('#delivery').on('click', () => {
    $(window).scrollTop(0);
  });
  $('#resturent').on('click', () => {
    $(window).scrollTop(0);
  });
  $('#legal').on('click', () => {
    $(window).scrollTop(0);
  });
  $('#personal').on('click', () => {
    $(window).scrollTop(0);
  });
  return (
    <div>
      <footer id="main-footer " style={{ background: '#032d3c' }}>
        <div id="et-footer-nav">
          <div className="container">
            <ul id="menu-footer" className="bottom-nav">
              <li id="menu-item-67" className="menu-item">
                <Link style={{ color: '#fff' }} id="about" to="/about">
                  À propos
                </Link>
              </li>
              <li
                id="menu-item-236"
                className="menu-item menu-item-type-post_type menu-item-object-page  page_item page-item-16 "
              >
                <Link
                  to="/delivery"
                  id="delivery"
                  style={{ color: '#fff' }}
                  aria-current="page"
                >
                  Livreur
                </Link>
              </li>
              <li
                id="menu-item-235"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-235"
              >
                <Link id="resturent" to="/resturent" style={{ color: '#fff' }}>
                  Restaurateur
                </Link>
              </li>
              <li
                id="menu-item-27"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27"
              >
                <Link to="/legal" id="legal" style={{ color: '#fff' }}>
                  Mentions légales
                </Link>
              </li>
              <li
                id="menu-item-26"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26"
              >
                <Link to="/personal" id="personal" style={{ color: '#fff' }}>
                  Données personnelles
                </Link>
              </li>
            </ul>{' '}
          </div>
        </div>{' '}
        {/* #et-footer-nav */}
        <div id="footer-bottom" style={{ background: '#032d3c' }}>
          <div className="container clearfix">
            <ul className="et-social-icons">
              <li className="et-social-icon et-social-facebook">
                <a href="www.facebook.com" className="icon">
                  <span>Facebook</span>
                </a>
              </li>
              <li className="et-social-icon et-social-twitter">
                <a href="www.twitter.com" className="icon">
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
            <div id="footer-info" style={{ color: '#ffff' }}>
              © Réalisé avec précision par{' '}
              <a
                href="https://www.valdoisecommunication.fr/"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#fff' }}
              >
                Val d'Oise Communication
              </a>
            </div>{' '}
          </div>{' '}
          {/* .container */}
        </div>
      </footer>{' '}
    </div>
  );
};

export default Footer;
