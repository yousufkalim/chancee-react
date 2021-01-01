import React from 'react';
import './Resturent.css';
import ScrollAnimation from 'react-animate-on-scroll';
// import '../../wp-includes/css/dist/block-library/style.min5697.css?ver=5.5.3';
import '../../wp-content/et-cache/global/et-divi-customizer-global-16074168749653.min.css';
// import '../../wp-content/plugins/quantcast-choice/public/css/style.min4c56.css?ver=2.0.2';
import '../../wp-includes/css/dashicons.min5697.css?ver=5.5.3';
import '../../wp-content/themes/Divi/style5697.css?ver=5.5.3';
// import '../../wp-content/themes/divi-child/style1c9b.css?ver=4.6.1';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const Resturent = () => {
  return (
    <div className="page-template-default page page-id-18 et_button_custom_icon et_pb_button_helper_class et_fixed_nav et_show_nav et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_split et_pb_footer_columns1 et_cover_background et_pb_gutter windows et_pb_gutters3 et_pb_pagebuilder_layout et_smooth_scroll et_no_sidebar et_divi_theme et-db et_minified_js et_minified_css">
      <Header />
      <div id="page-container">
        {/* #main-header */}
        <div id="et-main-area">
          <div id="main-content">
            <article
              id="post-18"
              className="post-18 page type-page status-publish hentry"
            >
              <div className="entry-content">
                <div id="et-boc" className="et-boc">
                  <div className="et-l et-l--post">
                    <div className="et_builder_inner_content et_pb_gutters3">
                      <div className="et_pb_section et_pb_section_0 et_pb_fullwidth_section et_section_regular">
                        <section
                          className="et_pb_module et_pb_fullwidth_header et_pb_fullwidth_header_0 et_pb_text_align_center et_pb_bg_layout_dark"
                          style={{ paddingTop: '150px' }}
                        >
                          <div className="et_pb_fullwidth_header_container center">
                            <div className="header-content-container center">
                              <div className="header-content">
                                <h1
                                  className="et_pb_module_header"
                                  style={{ fontWeight: 'bold' }}
                                >
                                  Utiliser Chancee en tant que restaurant
                                </h1>
                                <span className="et_pb_fullwidth_header_subhead">
                                  Inscrivez-vous, trouvez et choisissez le
                                  profil correspondant à vos besoins
                                </span>
                                <div className="et_pb_header_content_wrapper">
                                  <p>
                                    <strong>
                                      Rendez-vous le 1er décembre 2020 !
                                    </strong>
                                  </p>
                                </div>
                                <Link
                                  className="et_pb_button et_pb_more_button et_pb_button_one"
                                  to="/register-company"
                                >
                                  Je suis intéressé !
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="et_pb_fullwidth_header_overlay" />
                          <div className="et_pb_fullwidth_header_scroll" />
                        </section>
                      </div>{' '}
                      {/* .et_pb_section */}
                      <div className="et_pb_section et_pb_section_1 et_section_regular">
                        <div
                          className="et_pb_row et_pb_row_0"
                          style={{ width: '50%' }}
                        >
                          <div
                            className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child"
                            style={{ padding: '35px', background: '#43b8b1' }}
                          >
                            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <h2
                                  style={{
                                    fontSize: '29px',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  Challenge restaurateurs
                                </h2>
                                <p>
                                  <strong style={{ fontSize: '18px' }}>
                                    Les 200 premiers restaurants enregistrés
                                    auront 4 mois d’utilisation gratuite de la
                                    plateforme
                                  </strong>
                                  <br />
                                  <em style={{ fontSize: 18 }}>
                                    (2 mois en tant que bêta testeurs et 2 mois
                                    d’utilisation)
                                  </em>
                                </p>
                              </div>
                            </div>{' '}
                            {/* .et_pb_text */}
                            <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module ">
                              <Link
                                style={{ color: '#43b8b1' }}
                                className="et_pb_button 
                                et_pb_button_1
                                et_pb_bg_layout_light"
                                to="/register-company"
                              >
                                Je me lance !
                              </Link>
                            </div>
                          </div>{' '}
                          {/* .et_pb_column */}
                        </div>{' '}
                        {/* .et_pb_row */}
                        <div className="et_pb_row et_pb_row_1">
                          <div className="et_pb_column et_pb_column_4_4 et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <p
                                  style={{
                                    color: '#43b8b1',
                                    fontSize: '32px',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  Pourquoi choisir Chancee ?
                                </p>
                                <p style={{ fontSize: 18 }}>
                                  4 atouts pour vous convaincre !
                                </p>
                              </div>
                            </div>{' '}
                            {/* .et_pb_text */}
                            <div className="et_pb_module et_pb_code et_pb_code_0">
                              <div className="et_pb_code_inner">
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '\n/* -------------------------------- \n\nPrimary style\n\n-------------------------------- */\n\n.cd-timeline-chiffre {\n  font-size: 30px;\n  font-weight: 800;\n  font-family: "Montserrat";\n  color: #fff;\n  padding: 16px 24px;\n}\n\n.cd-timeline-chiffre-2 {\n  font-size: 30px;\n  font-weight: 800;\n  font-family: "Montserrat";\n  color: #fff;\n  padding: 16px 21px;\n}\n\n.cd-timeline-chiffre-3 {\n  font-size: 30px;\n  font-weight: 800;\n  font-family: "Montserrat";\n  color: #fff;\n  padding: 16px 22px;\n}\n\n.cd-timeline-chiffre-4 {\n  font-size: 30px;\n  font-weight: 800;\n  font-family: "Montserrat";\n  color: #fff;\n  padding: 16px 19px;\n}\n\n/* -------------------------------- \n\nModules - reusable parts of our design\n\n-------------------------------- */\n.cd-container {\n  /* this class is used to give a max-width to the element it is applied to, and center it horizontally when it reaches that max-width */\n  width: 90%;\n  max-width: 1170px;\n  margin: 0 auto;\n}\n.cd-container::after {\n  /* clearfix */\n  content: "";\n  display: table;\n  clear: both;\n}\n\n/* -------------------------------- \n\nMain components \n\n-------------------------------- */\n#cd-timeline {\n  position: relative;\n  padding: 2em 0;\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n#cd-timeline::before {\n  /* this is the vertical line */\n  content: "";\n  position: absolute;\n  top: 30px;\n  left: 18px;\n  height: 100%;\n  width: 4px;\n  background: #f4f4f4; /* #d7e4ed */\n}\n@media only screen and (min-width: 1170px) {\n  #cd-timeline {\n    margin-top: 3em;\n    margin-bottom: 3em;\n  }\n  #cd-timeline::before {\n    left: 50%;\n    margin-left: -2px;\n  }\n}\n\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n.cd-timeline-block::after {\n  clear: both;\n  content: "";\n  display: table;\n}\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n@media only screen and (min-width: 1170px) {\n  .cd-timeline-block {\n    margin: 4em 0;\n  }\n  .cd-timeline-block:first-child {\n    margin-top: 0;\n  }\n  .cd-timeline-block:last-child {\n    margin-bottom: 0;\n  }\n}\n\n.cd-timeline-img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #43b8b1;\n  box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);\n}\n.cd-timeline-img img {\n  display: block;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  margin-left: -12px;\n  margin-top: -12px;\n}\n@media only screen and (min-width: 1170px) {\n  .cd-timeline-img {\n    width: 60px;\n    height: 60px;\n    left: 50%;\n    margin-left: -30px;\n    /* Force Hardware Acceleration in WebKit */\n    -webkit-transform: translateZ(0);\n    -webkit-backface-visibility: hidden;\n  }\n .cd-timeline-img.is-hidden {\n    visibility: hidden;\n  }\n.cd-timeline-img.bounce-in {\n    visibility: visible;\n    -webkit-animation: cd-bounce-1 0.6s;\n    -moz-animation: cd-bounce-1 0.6s;\n    animation: cd-bounce-1 0.6s;\n  }\n}\n\n@-webkit-keyframes cd-bounce-1 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.5);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale(1.2);\n  }\n  100% {\n    -webkit-transform: scale(1);\n  }\n}\n@-moz-keyframes cd-bounce-1 {\n  0% {\n    opacity: 0;\n    -moz-transform: scale(0.5);\n  }\n  60% {\n    opacity: 1;\n    -moz-transform: scale(1.2);\n  }\n  100% {\n    -moz-transform: scale(1);\n  }\n}\n@keyframes cd-bounce-1 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.5);\n    -moz-transform: scale(0.5);\n    -ms-transform: scale(0.5);\n    -o-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale(1.2);\n    -moz-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    -o-transform: scale(1.2);\n    transform: scale(1.2);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n    transform: scale(1);\n  }\n}\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: #f4f4f4; /* #e8eff5 */\n  border-radius: 0.25em;\n  padding: 1em;\n  box-shadow: 0 3px 0 #d7e4ed;\n}\n.cd-timeline-content::after {\n  clear: both;\n  content: "";\n  display: table;\n}\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n.cd-timeline-content::before {\n  content: "";\n  position: absolute;\n  top: 16px;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid #f4f4f4; /* #e8eff5 */\n}\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n  .cd-timeline-content .cd-read-more,\n  .cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n@media only screen and (min-width: 1170px) {\n  .cd-timeline-content {\n    margin-left: 0;\n    padding: 1.6em;\n    width: 45%;\n  }\n  .cd-timeline-content::before {\n    top: 24px;\n    left: 100%;\n    border-color: transparent;\n    border-left-color: #f4f4f4; /* #e8eff5 */\n  }\n  .cd-timeline-block:nth-child(even) .cd-timeline-content {\n    float: right;\n  }\n  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {\n    top: 24px;\n    left: auto;\n    right: 100%;\n    border-color: transparent;\n    border-right-color: #f4f4f4; /* #e8eff5 */\n  }\n.cd-timeline-content.is-hidden {\n    visibility: hidden;\n  }\n .cd-timeline-content.bounce-in {\n    visibility: visible;\n    -webkit-animation: cd-bounce-2 0.6s;\n    -moz-animation: cd-bounce-2 0.6s;\n    animation: cd-bounce-2 0.6s;\n  }\n}\n\n@media only screen and (min-width: 1170px) {\n  /* inverse bounce effect on even content blocks */\n  .cd-timeline-block:nth-child(even)\n  .cd-timeline-content.bounce-in {\n    -webkit-animation: cd-bounce-2-inverse 0.6s;\n    -moz-animation: cd-bounce-2-inverse 0.6s;\n    animation: cd-bounce-2-inverse 0.6s;\n  }\n}\n@-webkit-keyframes cd-bounce-2 {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(20px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n  }\n}\n@-moz-keyframes cd-bounce-2 {\n  0% {\n    opacity: 0;\n    -moz-transform: translateX(-100px);\n  }\n  60% {\n    opacity: 1;\n    -moz-transform: translateX(20px);\n  }\n  100% {\n    -moz-transform: translateX(0);\n  }\n}\n@keyframes cd-bounce-2 {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n    -moz-transform: translateX(-100px);\n    -ms-transform: translateX(-100px);\n    -o-transform: translateX(-100px);\n    transform: translateX(-100px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(20px);\n    -moz-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    -o-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    -moz-transform: translateX(0);\n    -ms-transform: translateX(0);\n    -o-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@-webkit-keyframes cd-bounce-2-inverse {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n  }\n}\n@-moz-keyframes cd-bounce-2-inverse {\n  0% {\n    opacity: 0;\n    -moz-transform: translateX(100px);\n  }\n  60% {\n    opacity: 1;\n    -moz-transform: translateX(-20px);\n  }\n  100% {\n    -moz-transform: translateX(0);\n  }\n}\n@keyframes cd-bounce-2-inverse {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n    -moz-transform: translateX(100px);\n    -ms-transform: translateX(100px);\n    -o-transform: translateX(100px);\n    transform: translateX(100px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n    -moz-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    -o-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    -moz-transform: translateX(0);\n    -ms-transform: translateX(0);\n    -o-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@media only screen and (max-width: 768px){\n\n.cd-timeline-chiffre {\n  padding: 8px 14px;\n}\n\n.cd-timeline-chiffre-2 {\n  font-size: 30px;\n  font-weight: 800;\n  font-family: "Montserrat";\n  color: #fff;\n  padding: 8px 11px;\n}\n\n.cd-timeline-chiffre-3 {\n  font-size: 30px;\n  font-weight: 800;\n  font-family: "Montserrat";\n  color: #fff;\n  padding: 8px 11px;\n}\n\n.cd-timeline-chiffre-4 {\n  font-size: 30px;\n  font-weight: 800;\n  font-family: "Montserrat";\n  color: #fff;\n  padding: 8px 9px;\n}\n}\n\n',
                                  }}
                                />
                              </div>
                            </div>{' '}
                            {/* .et_pb_code */}
                            <div className="et_pb_module et_pb_code et_pb_code_1">
                              <div className="et_pb_code_inner">
                                <section
                                  id="cd-timeline"
                                  className="cd-container"
                                >
                                  <div className="cd-timeline-block">
                                    <div className="cd-timeline-img">
                                      <p className="cd-timeline-chiffre">1</p>
                                    </div>{' '}
                                    {/* cd-timeline-img */}
                                    <ScrollAnimation
                                      animateIn="fadeInLeft"
                                      duration={0.5}
                                      animateOnce={true}
                                      offset={100}
                                    >
                                      <div
                                        className="cd-timeline-content"
                                        style={{ textAlign: 'left' }}
                                      >
                                        <h3
                                          style={{
                                            color: '#032d3c',
                                            fontSize: 22,
                                            fontWeight: 'bold',
                                          }}
                                        >
                                          Votre livreur dédié
                                        </h3>
                                        <p
                                          style={{
                                            color: 'black',
                                            marginBottom: 0,
                                          }}
                                        >
                                          Sélectionnez en quelques clics votre
                                          livreur dédié correspondant à vos
                                          critères puis donnez votre avis sur sa
                                          prestation.
                                          <br />
                                          Vous êtes satisfait ? Travaillez de
                                          nouveau avec lui afin de sécuriser
                                          votre expérience client lors de la
                                          livraison.
                                        </p>
                                      </div>{' '}
                                    </ScrollAnimation>
                                    {/* cd-timeline-content */}
                                  </div>{' '}
                                  {/* cd-timeline-block */}
                                  <div className="cd-timeline-block">
                                    <div className="cd-timeline-img">
                                      <p className="cd-timeline-chiffre-2">2</p>
                                    </div>{' '}
                                    {/* cd-timeline-img */}
                                    <ScrollAnimation
                                      animateIn="fadeInRight"
                                      duration={0.5}
                                      animateOnce={true}
                                      offset={100}
                                    >
                                      <div
                                        className="cd-timeline-content"
                                        style={{ textAlign: 'left' }}
                                      >
                                        <h3
                                          style={{
                                            color: '#032d3c',
                                            fontSize: 22,
                                            fontWeight: 'bold',
                                          }}
                                        >
                                          Planifiez votre activité
                                        </h3>
                                        <p
                                          style={{
                                            color: 'black',
                                            marginBottom: '0px',
                                          }}
                                        >
                                          Vous connaissez votre activité mieux
                                          que quiconque. Profitez de Chancee
                                          pour planifier votre livreur en
                                          fonction de vos besoins. Vous avez des
                                          hausses d’activités chaque week-end ?
                                          Prévoyez un livreur de manière
                                          récurrente.
                                        </p>
                                      </div>{' '}
                                    </ScrollAnimation>
                                    {/* cd-timeline-content */}
                                  </div>{' '}
                                  {/* cd-timeline-block */}
                                  <div className="cd-timeline-block">
                                    <div className="cd-timeline-img">
                                      <p className="cd-timeline-chiffre-3">3</p>
                                    </div>{' '}
                                    {/* cd-timeline-img */}
                                    <ScrollAnimation
                                      animateIn="fadeInLeft"
                                      duration={0.5}
                                      animateOnce={true}
                                      offset={100}
                                    >
                                      <div
                                        className="cd-timeline-content"
                                        style={{ textAlign: 'left' }}
                                      >
                                        <h3
                                          style={{
                                            color: '#032d3c',
                                            fontSize: 22,
                                            fontWeight: 'bold',
                                          }}
                                        >
                                          Maîtrisez vos coûts
                                        </h3>
                                        <p
                                          style={{
                                            color: 'black',
                                            marginBottom: '0px',
                                          }}
                                        >
                                          Reprenez la main sur vos marges en
                                          développant votre propre force de
                                          livraison agile et sur-mesure.
                                        </p>
                                      </div>{' '}
                                    </ScrollAnimation>
                                    {/* cd-timeline-content */}
                                  </div>{' '}
                                  {/* cd-timeline-block */}
                                  <div className="cd-timeline-block">
                                    <div className="cd-timeline-img">
                                      <p className="cd-timeline-chiffre-4">4</p>
                                    </div>{' '}
                                    {/* cd-timeline-img */}
                                    <ScrollAnimation
                                      animateIn="fadeInRight"
                                      duration={0.5}
                                      animateOnce={true}
                                      offset={100}
                                    >
                                      <div
                                        className="cd-timeline-content"
                                        style={{ textAlign: 'left' }}
                                      >
                                        <h3
                                          style={{
                                            color: '#032d3c',
                                            fontSize: 22,
                                            fontWeight: 'bold',
                                          }}
                                        >
                                          Renforcez votre image de marque
                                        </h3>
                                        <p
                                          style={{
                                            color: 'black',
                                            marginBottom: '0px',
                                          }}
                                        >
                                          Le livreur dédié vous permet d’avoir
                                          une expérience client sécurisée, des
                                          process respectés et une image de
                                          marque renforcée lors de la livraison.
                                        </p>
                                      </div>{' '}
                                    </ScrollAnimation>
                                    {/* cd-timeline-content */}
                                  </div>{' '}
                                  {/* cd-timeline-block */}
                                </section>
                              </div>{' '}
                              {/* cd-timeline-block */}
                              {/* cd-timeline */}
                            </div>
                          </div>{' '}
                          {/* .et_pb_code */}
                        </div>{' '}
                        {/* .et_pb_column */}
                      </div>{' '}
                      {/* .et_pb_row */}
                    </div>{' '}
                    {/* .et_pb_section */}
                    <div className="et_pb_section et_section_regular">
                      <div className="et_pb_row et_pb_row_2">
                        <div className="et_pb_column et_pb_column_1_4 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough et_pb_column_empty"></div>{' '}
                        {/* .et_pb_column */}
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                <strong style={{ fontSize: '17px' }}>
                                  Découvrez le concept de notre nouvelle
                                  plateforme responsable !
                                </strong>
                              </p>
                            </div>
                          </div>{' '}
                          {/* .et_pb_text */}
                          <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_button_alignment_center et_pb_module ">
                            <Link
                              className="et_pb_button et_pb_button_0  et_pb_bg_layout_dark"
                              to="/about"
                            >
                              Je découvre
                            </Link>
                          </div>
                        </div>{' '}
                        {/* .et_pb_column */}
                        <div className="et_pb_column et_pb_column_1_4 et_pb_column_4  et_pb_css_mix_blend_mode_passthrough et-last-child et_pb_column_empty"></div>{' '}
                        {/* .et_pb_column */}
                      </div>{' '}
                      {/* .et_pb_row */}
                    </div>{' '}
                    {/* .et_pb_section */}
                    <div
                      id="contactrestaurant"
                      className="et_pb_section et_pb_section_3 et_pb_with_background et_section_regular"
                    >
                      <div className="et_pb_row et_pb_row_3">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_5  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_3  et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p
                                style={{
                                  color: '#43b8b1',
                                  fontWeight: 'bold',
                                  fontSize: '2.4rem',
                                  lineHeight: 1,
                                }}
                              >
                                Chancee, vous êtes intéressé ?
                              </p>
                              <p style={{ fontSize: 17 }}>
                                Inscrivez-vous dès maintenant et participez
                                activement à la phase de test&nbsp;!&nbsp;
                              </p>
                            </div>
                          </div>{' '}
                          {/* .et_pb_text */}
                          <div
                            id="et_pb_contact_form_0"
                            className="et_pb_module et_pb_contact_form_0 et_pb_contact_form_container clearfix"
                            data-form_unique_num={0}
                          >
                            <div className="et-pb-contact-message" />
                            <div
                              className="et_pb_contact"
                              style={{
                                textAlign: 'center',
                                paddingTop: '40px',
                              }}
                            >
                              <Link
                                style={{
                                  background: '#43b8b1',
                                  padding: '16px',
                                  width: '40%',
                                  fontWeight: 'bold',
                                  fontSize: '1.2rem',
                                  borderRadius: 50,
                                  color: '#fff',
                                }}
                                to="/register-company"
                              >
                                S'inscrire maintenant
                              </Link>
                            </div>{' '}
                            {/* .et_pb_contact */}
                          </div>{' '}
                          {/* .et_pb_text */}
                        </div>{' '}
                        {/* .et_pb_column */}
                      </div>{' '}
                      {/* .et_pb_row */}
                    </div>{' '}
                    {/* .et_pb_section */}
                  </div>
                  {/* .et_builder_inner_content */}
                </div>
                {/* .et-l */}
              </div>
              {/* #et-boc */}
            </article>
          </div>{' '}
          {/* .entry-content */}
          {/* .et_pb_post */}
        </div>{' '}
        {/* #main-content */}
        <Footer />
        {/* #main-footer */}
      </div>{' '}
      {/* #et-main-area */}
    </div>
  );
};
export default Resturent;
