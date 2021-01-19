import React from 'react';
import './Home.css';
import '../../wp-content/et-cache/global/et-divi-customizer-global-16074168749653.min.css';
import '../../wp-content/themes/Divi/style5697.css?ver=5.5.3';
import '../../wp-content/themes/divi-child/style1c9b.css?ver=4.6.1';
import { Link } from 'react-router-dom';
import '../../wp-includes/css/dashicons.min5697.css?ver=5.5.3';
const Home = () => {
  return (
    <div className="home page-template-default page page-id-6 et_button_custom_icon et_pb_button_helper_class et_fixed_nav et_show_nav et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_split et_pb_footer_columns1 et_cover_background et_pb_gutter windows et_pb_gutters3 et_pb_pagebuilder_layout et_smooth_scroll et_no_sidebar et_divi_theme et-db et_minified_js et_minified_css">
      <div id="page-container">
        <div id="et-main-area">
          <div id="main-content">
            <article
              id="post-6"
              className="post-6 page type-page status-publish hentry"
            >
              <div className="entry-content">
                <div id="et-boc" className="et-boc">
                  <div className="et-l et-l--post">
                    <div className="et_builder_inner_content et_pb_gutters3">
                      <div className="et_pb_section et_pb_section_0 et_pb_fullwidth_section et_section_regular">
                        <section className="et_pb_module et_pb_fullwidth_header et_pb_fullwidth_header_0 et_pb_text_align_center et_pb_bg_layout_dark et_pb_fullscreen">
                          <div className="et_pb_fullwidth_header_container center">
                            <div className="header-content-container center">
                              <div className="header-content">
                                <img
                                  src="../../wp-content/uploads/2020/09/VOC-CHANCEE-Logo-Negatif.png"
                                  title
                                  alt=""
                                  srcSet="https://www.chancee.io/wp-content/uploads/2020/09/VOC-CHANCEE-Logo-Negatif.png 888w, https://www.chancee.io/wp-content/uploads/2020/09/VOC-CHANCEE-Logo-Negatif-480x130.png 480w"
                                  sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 888px, 100vw"
                                  className="header-logo"
                                />
                                <h1
                                  className="et_pb_module_header"
                                  style={{
                                    fontSize: '75px',
                                    fontWeight: '600',
                                  }}
                                >
                                  Plateforme responsable
                                  <br />
                                  de mise en relation
                                  <br />
                                  entre livreurs et restaurants
                                </h1>
                                <span className="et_pb_fullwidth_header_subhead">
                                  Découvrez un tout nouveau concept
                                  gagnant-gagnant !
                                </span>
                                <Link
                                  className="et_pb_button et_pb_more_button et_pb_button_one"
                                  to="/delivery"
                                >
                                  Je suis livreur
                                </Link>
                                <Link
                                  className="et_pb_button et_pb_more_button et_pb_button_two"
                                  to="/restaurant"
                                >
                                  Je suis restaurateur
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="et_pb_fullwidth_header_overlay" />
                          <div className="et_pb_fullwidth_header_scroll" />
                        </section>
                      </div>
                      {/* .et_pb_section */}
                    </div>
                    {/* .et_builder_inner_content */}
                  </div>
                  {/* .et-l */}
                </div>
                {/* #et-boc */}
              </div>
              {/* .entry-content */}
            </article>
            {/* .et_pb_post */}
          </div>
          {/* #main-content */}
          <footer id="main-footer" style={{ backgroundColor: '#032d3c' }}>
            <div id="et-footer-nav">
              <div className="container">
                <ul id="menu-footer" className="bottom-nav">
                  <li
                    id="menu-item-67"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67"
                  >
                    <a href="a-propos/index.html">À propos</a>
                  </li>
                  <li
                    id="menu-item-236"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-236"
                  >
                    <a href="je-suis-livreur/index.html">Livreur</a>
                  </li>
                  <li
                    id="menu-item-235"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-235"
                  >
                    <a href="je-suis-restaurateur/index.html">Restaurateur</a>
                  </li>
                  <li
                    id="menu-item-27"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27"
                  >
                    <a href="mentions-legales/index.html">Mentions légales</a>
                  </li>
                  <li
                    id="menu-item-26"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26"
                  >
                    <a href="donnees-personnelles/index.html">
                      Données personnelles
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="footer-bottom">
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
                <div id="footer-info" style={{ color: '#f1f1f1' }}>
                  © Réalisé avec précision par
                  <a
                    href="https://www.valdoisecommunication.fr/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#f1f1f1' }}
                  >
                    Val d'Oise Communication
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
