import React from 'react';
import './About.css';
import '../../wp-content/et-cache/global/et-divi-customizer-global-16074168749653.min.css';
import '../../wp-content/themes/Divi/style5697.css?ver=5.5.3';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import One from '../../wp-content/uploads/2020/09/chiffre-affaire-2.png';
import Two from '../../wp-content/uploads/2020/09/vue-calendrier.png';
import Three from '../../wp-content/uploads/2020/09/choix-client-1.png';
import Four from '../../wp-content/uploads/2020/09/outil-ambassadeur.png';
import Five from '../../wp-content/uploads/2020/09/transparence.png';
import Six from '../../wp-content/uploads/2020/09/respect.png';
import Seven from '../../wp-content/uploads/2020/09/professionnalisme.png';
import Header from '../Header/Header';
const About = () => {
  return (
    <div className="page-template-default page page-id-65 et_button_custom_icon et_pb_button_helper_class et_fixed_nav et_show_nav et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_split et_pb_footer_columns1 et_cover_background et_pb_gutter windows et_pb_gutters3 et_pb_pagebuilder_layout et_smooth_scroll et_no_sidebar et_divi_theme et-db et_minified_js et_minified_css">
      <div id="page-container">
        <Header />
        {/* #main-header */}
        <div id="et-main-area">
          <div id="main-content">
            <article
              id="post-65"
              className="post-65 page type-page status-publish hentry"
            >
              <div className="entry-content">
                <div id="et-boc" className="et-boc">
                  <div className="et-l et-l--post">
                    <div className="et_builder_inner_content et_pb_gutters3">
                      <div className="et_pb_section et_pb_section_0 et_pb_fullwidth_section et_section_regular">
                        <section
                          className="et_pb_module et_pb_fullwidth_header et_pb_fullwidth_header_0 et_pb_text_align_center et_pb_bg_layout_dark"
                          style={{ paddingTop: '150px', height: '70vh' }}
                        >
                          <div className="et_pb_fullwidth_header_container center">
                            <div className="header-content-container center">
                              <div className="header-content">
                                <h1 className="et_pb_module_header">
                                  Pourquoi Chancee ?
                                </h1>
                                <span className="et_pb_fullwidth_header_subhead">
                                  Découvrez le concept de notre nouvelle
                                  plateforme responsable !{' '}
                                </span>
                                <Link
                                  className="et_pb_button et_pb_more_button et_pb_button_one"
                                  to="delivery"
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
                      </div>{' '}
                      {/* .et_pb_section */}
                      <div className="et_pb_section et_pb_section_1 et_section_regular">
                        <div
                          className="et_pb_row et_pb_row_0"
                          style={{ width: '100%' }}
                        >
                          <div
                            className="et_pb_column et_pb_column_1_2 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough"
                            style={{ padding: '35px' }}
                          >
                            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <h2
                                  style={{
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  Challenge livreurs
                                </h2>
                                <p>
                                  <strong style={{ fontSize: '16px' }}>
                                    Les 200 premiers livreurs enregistrés auront
                                    4 mois d’utilisation gratuite de la
                                    plateforme
                                  </strong>
                                  <br />
                                  <em style={{ fontSize: '16px' }}>
                                    (2 mois en tant que bêta testeurs et 2 mois
                                    d’utilisation)
                                  </em>
                                </p>
                              </div>
                            </div>{' '}
                            {/* .et_pb_text */}
                            <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module ">
                              <Link
                                className="et_pb_button et_pb_button_0 et_pb_bg_layout_dark"
                                to="/register"
                              >
                                Je me lance !
                              </Link>
                            </div>
                          </div>{' '}
                          {/* .et_pb_column */}
                          <div
                            className="et_pb_column et_pb_column_1_2 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child"
                            style={{ padding: '35px' }}
                          >
                            <div className="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <h2
                                  style={{
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  Challenge restaurateurs
                                </h2>
                                <p>
                                  <strong style={{ fontSize: '16px' }}>
                                    Les 200 premiers restaurants enregistrés
                                    auront 4 mois d’utilisation gratuite de la
                                    plateforme
                                  </strong>
                                  <br />
                                  <em style={{ fontSize: '16px' }}>
                                    (2 mois en tant que bêta testeurs et 2 mois
                                    d’utilisation)
                                  </em>
                                </p>
                              </div>
                            </div>{' '}
                            {/* .et_pb_text */}
                            <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_button_alignment_center et_pb_module ">
                              <Link
                                className="et_pb_button et_pb_button_1 et_pb_bg_layout_dark"
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
                          <div className="et_pb_column et_pb_column_4_4 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <p
                                  style={{
                                    fontSize: '1.03rem',
                                  }}
                                >
                                  La solution part d’un constat relativement
                                  simple : le marché n’a jamais permis à un
                                  livreur indépendant de déterminer son tarif à
                                  l’heure. <br />
                                  Pourquoi ? Parce que le système a toujours été
                                  conçu pour grapiller sur la rémunération du
                                  livreur…
                                </p>
                                <p
                                  style={{
                                    fontSize: '1.03rem',
                                  }}
                                >
                                  <strong
                                    style={{
                                      fontSize: '1.03rem',
                                    }}
                                  >
                                    Nous avons l’ambition de créer une véritable
                                    révolution sociale sur ce métier.
                                    <br />
                                  </strong>
                                  Une plateforme{' '}
                                  <strong
                                    style={{
                                      fontSize: '1.03rem',
                                    }}
                                  >
                                    vertueuse
                                  </strong>{' '}
                                  qui intégrera des parties prenantes
                                  <strong
                                    style={{
                                      fontSize: '1.03rem',
                                    }}
                                  >
                                    {' '}
                                    responsables
                                  </strong>{' '}
                                  qui ont cette envie et cette détermination
                                  d’opérer de manière plus{' '}
                                  <strong
                                    style={{
                                      fontSize: '1.03rem',
                                    }}
                                  >
                                    éthique
                                  </strong>
                                  .
                                </p>
                              </div>
                            </div>{' '}
                            {/* .et_pb_text */}
                            <div className="et_pb_module et_pb_text et_pb_text_3  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <p
                                  style={{
                                    color: '#032d3c',
                                    fontSize: '2.1rem',
                                    lineHeight: 1,
                                  }}
                                >
                                  Chancee est la première plateforme responsable
                                  de mise en relation entre livreurs et
                                  restaurants !
                                </p>
                              </div>
                            </div>{' '}
                            {/* .et_pb_text */}
                            <div className="et_pb_module et_pb_text  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="">
                                <p
                                  style={{
                                    fontSize: '1.2rem',
                                    lineHeight: 1.5,
                                  }}
                                >
                                  Chancee est la première plateforme responsable
                                  qui permettra au livreur de travailler sur des
                                  créneaux horaires choisis, au tarif de son
                                  choix, collaborer avec les clients souhaités
                                  et enfin gérer au mieux son agenda et ses
                                  revenus… Un véritable copilote business !
                                </p>
                                <p
                                  style={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.5,
                                  }}
                                >
                                  L’idée de la création de l’entreprise part
                                  d’un besoin simple&nbsp;:{' '}
                                  <strong>
                                    donner une véritable autonomie au livreur
                                    urbain indépendant
                                  </strong>
                                  . <br />
                                  Il est grand temps que le livreur prenne
                                  réellement son envol en ayant&nbsp;:
                                </p>
                              </div>
                            </div>{' '}
                            {/* .et_pb_text */}
                          </div>{' '}
                          {/* .et_pb_column */}
                        </div>{' '}
                        {/* .et_pb_row */}
                        <div className="et_pb_row et_pb_row_2">
                          <div className="et_pb_column et_pb_column_1_4  et_pb_css_mix_blend_mode_passthrough">
                            <div className="et_pb_module et_pb_blurb  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                              <div className="et_pb_blurb_content">
                                <div className="et_pb_main_blurb_image">
                                  <span className="">
                                    <img
                                      src={One}
                                      alt=""
                                      style={{ maxWidth: '59%' }}
                                      className=" et_pb_animation_top"
                                    />
                                  </span>
                                </div>
                                <div className="et_pb_blurb_container">
                                  <h3
                                    className="et_pb_module_header"
                                    style={{
                                      textAlign: 'center',
                                      fontSize: '18px',
                                      color: '#032d3c',
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    <span>
                                      Une maîtrise totale de son chiffre
                                      d’affaires prévisionnel
                                    </span>
                                  </h3>
                                </div>
                              </div>{' '}
                              {/* .et_pb_blurb_content */}
                            </div>{' '}
                            {/* .et_pb_blurb */}
                          </div>{' '}
                          {/* .et_pb_column */}
                          <div className="et_pb_column et_pb_column_1_4 et_pb_column_4  et_pb_css_mix_blend_mode_passthrough">
                            <div className="et_pb_module et_pb_blurb et_pb_blurb_1  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                              <div className="et_pb_blurb_content">
                                <div className="et_pb_main_blurb_image">
                                  <span className="">
                                    <img
                                      src={Two}
                                      alt=""
                                      style={{ maxWidth: '59%' }}
                                      className="et_pb_animation_top"
                                    />
                                  </span>
                                </div>
                                <div className="et_pb_blurb_container">
                                  <h3
                                    className="et_pb_module_header"
                                    style={{
                                      textAlign: 'center',
                                      fontSize: '18px',
                                      color: '#032d3c',
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    <span>
                                      Une visibilité sur son agenda hebdomadaire
                                    </span>
                                  </h3>
                                </div>
                              </div>{' '}
                              {/* .et_pb_blurb_content */}
                            </div>{' '}
                            {/* .et_pb_blurb */}
                          </div>{' '}
                          {/* .et_pb_column */}
                          <div className="et_pb_column et_pb_column_1_4 et_pb_column_5  et_pb_css_mix_blend_mode_passthrough">
                            <div className="et_pb_module et_pb_blurb et_pb_blurb_2  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                              <div className="et_pb_blurb_content">
                                <div className="et_pb_main_blurb_image">
                                  <span className="">
                                    <img
                                      src={Three}
                                      alt=""
                                      style={{ maxWidth: '59%' }}
                                      className=" et_pb_animation_top"
                                    />
                                  </span>
                                </div>
                                <div className="et_pb_blurb_container">
                                  <h3
                                    className="et_pb_module_header"
                                    style={{
                                      textAlign: 'center',
                                      fontSize: '18px',
                                      color: '#032d3c',
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    <span>
                                      Le choix de travailler avec des clients
                                      choisis
                                    </span>
                                  </h3>
                                </div>
                              </div>{' '}
                              {/* .et_pb_blurb_content */}
                            </div>{' '}
                            {/* .et_pb_blurb */}
                          </div>{' '}
                          {/* .et_pb_column */}
                          <div className="et_pb_column et_pb_column_1_4 et_pb_column_6  et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_module et_pb_blurb et_pb_blurb_3  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                              <div className="et_pb_blurb_content">
                                <div className="et_pb_main_blurb_image">
                                  <span className="">
                                    <img
                                      src={Four}
                                      alt=""
                                      style={{ maxWidth: '59%' }}
                                      className="et_pb_animation_top"
                                    />
                                  </span>
                                </div>
                                <div className="et_pb_blurb_container">
                                  <h3
                                    className="et_pb_module_header"
                                    style={{
                                      textAlign: 'center',
                                      fontSize: '18px',
                                      color: '#032d3c',
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    <span>
                                      Tous les outils afin d’être un ambassadeur
                                      fier de son métier
                                    </span>
                                  </h3>
                                </div>
                              </div>{' '}
                              {/* .et_pb_blurb_content */}
                            </div>{' '}
                            {/* .et_pb_blurb */}
                          </div>{' '}
                          {/* .et_pb_column */}
                        </div>{' '}
                        {/* .et_pb_row */}
                        <div className="et_pb_row et_pb_row_3">
                          <div className="et_pb_column et_pb_column_4_4 et_pb_column_7  et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_module et_pb_text et_pb_text_5  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <p
                                  style={{
                                    fontSize: '1.03rem',
                                  }}
                                >
                                  De l’autre côté, il y a les restaurateurs (ou
                                  entreprises) qui ont des besoins certains en
                                  livraison. <br />
                                  Tout le challenge est de{' '}
                                  <strong>
                                    pouvoir concevoir un service de livraison
                                    responsable
                                  </strong>
                                  &nbsp;: replacer le livreur au centre du
                                  projet tout en renforçant l’image de marque et
                                  en reprenant la main sur les coûts de
                                  livraison… Oui, la conjugaison des deux est
                                  possible&nbsp;!
                                </p>
                                <p
                                  style={{
                                    fontSize: '1.03rem',
                                  }}
                                >
                                  Le fondateur, Augustin est un véritable{' '}
                                  <strong>expert et passionné</strong> de la
                                  logistique urbaine
                                  <br />
                                  Ayant lui même été livreur, il a toujours
                                  travaillé{' '}
                                  <strong>
                                    à remettre le livreur au centre du projet
                                  </strong>{' '}
                                  à travers ses nombreuses initiatives.&nbsp;»
                                </p>
                              </div>
                            </div>{' '}
                            {/* .et_pb_text */}
                            <div className="et_pb_with_border et_pb_module et_pb_text et_pb_text_6  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <h3
                                  style={{
                                    fontWeight: 'bold',
                                    fontSize: '24px',
                                  }}
                                >
                                  Devenez actionnaire Chancee
                                </h3>
                                <p style={{ fontSize: '16px' }}>
                                  Afin de pousser l’innovation sociale, que
                                  diriez-vous, en tant que livreur indépendant
                                  de devenir actionnaire de la plateforme ?
                                </p>
                                <p style={{ fontSize: '16px' }}>
                                  On vous l’annonce c’est possible !<br />
                                  Chancee sera la première plateforme qui
                                  permettra aux meilleurs livreurs de devenir
                                  actionnaires de la plateforme
                                  <br />
                                  et bénéficier des gains générés.
                                  <br />
                                  <em style={{ fontSize: '12px' }}>
                                    Les conditions vous seront présentées dans
                                    les semaines à venir.
                                  </em>
                                </p>
                                <p style={{ fontSize: '16px' }}>
                                  La performance et le professionnalisme doivent
                                  être récompensés, peu importe les métiers et
                                  nous travaillerons à ce que{' '}
                                  <strong>
                                    les meilleurs chancers&nbsp;puissent
                                    bénéficier des gains
                                  </strong>{' '}
                                  de la plateforme en cas de succès.
                                </p>
                              </div>
                            </div>{' '}
                            {/* .et_pb_text */}
                          </div>{' '}
                          {/* .et_pb_column */}
                        </div>{' '}
                        {/* .et_pb_row */}
                      </div>{' '}
                      {/* .et_pb_section */}
                      <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
                        <div className="et_pb_row et_pb_row_4">
                          <div className="et_pb_column et_pb_column_4_4 et_pb_column_8  et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_module et_pb_text et_pb_text_7  et_pb_text_align_center et_pb_bg_layout_light">
                              <div className="et_pb_text_inner">
                                <h2
                                  style={{
                                    color: '#032d3c',
                                    fontWeight: 'bold',
                                    marginTop: 100,
                                    fontSize: '35px',
                                  }}
                                >
                                  Les valeurs Chancee
                                </h2>
                                <p
                                  style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  Nous travaillons ensemble, pour
                                  vous&nbsp;!&nbsp;
                                </p>
                              </div>
                            </div>{' '}
                            {/* .et_pb_text */}
                          </div>{' '}
                          {/* .et_pb_column */}
                        </div>{' '}
                        {/* .et_pb_row */}
                        <div className="et_pb_row et_pb_row_5">
                          <div className="et_pb_column et_pb_column_1_3 et_pb_column_9  et_pb_css_mix_blend_mode_passthrough">
                            <div className="et_pb_module et_pb_blurb et_pb_blurb_4  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                              <div className="et_pb_blurb_content">
                                <div className="et_pb_main_blurb_image">
                                  <span className="">
                                    <img
                                      src={Five}
                                      alt=""
                                      style={{ width: '59%' }}
                                      className=" "
                                    />
                                  </span>
                                </div>
                                <div className="et_pb_blurb_container">
                                  <h3
                                    style={{
                                      fontWeight: 'bold',
                                      color: '#032d3c',
                                      fontSize: '24px',
                                    }}
                                    className="et_pb_module_header"
                                  >
                                    <span>Transparence</span>
                                  </h3>
                                  <div className="et_pb_blurb_description">
                                    <p
                                      style={{
                                        fontSize: '17px',
                                        textAlign: 'center',
                                      }}
                                    >
                                      Chancee travaille tous les jours à
                                      proposer la meilleure transparence
                                      possible afin de bâtir une confiance
                                      mutuelle entre les acteurs.
                                    </p>
                                  </div>
                                </div>
                              </div>{' '}
                              {/* .et_pb_blurb_content */}
                            </div>{' '}
                            {/* .et_pb_blurb */}
                          </div>{' '}
                          {/* .et_pb_column */}
                          <div className="et_pb_column et_pb_column_1_3 et_pb_column_10  et_pb_css_mix_blend_mode_passthrough">
                            <div className="et_pb_module et_pb_blurb et_pb_blurb_5  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                              <div className="et_pb_blurb_content">
                                <div className="et_pb_main_blurb_image">
                                  <span className="">
                                    <img
                                      src={Six}
                                      alt=""
                                      style={{ width: '59%' }}
                                      className="et_pb_animation_top"
                                    />
                                  </span>
                                </div>
                                <div className="et_pb_blurb_container">
                                  <h3
                                    style={{
                                      fontWeight: 'bold',
                                      color: '#032d3c',
                                      fontSize: '24px',
                                    }}
                                    className="et_pb_module_header"
                                  >
                                    <span>Respect</span>
                                  </h3>
                                  <div className="et_pb_blurb_description">
                                    <p
                                      style={{
                                        fontSize: '17px',
                                        textAlign: 'center',
                                      }}
                                    >
                                      Nous partons du principe qu’il est très
                                      important d’honorer et de respecter chacun
                                      des métiers.
                                    </p>
                                  </div>
                                </div>
                              </div>{' '}
                              {/* .et_pb_blurb_content */}
                            </div>{' '}
                            {/* .et_pb_blurb */}
                          </div>{' '}
                          {/* .et_pb_column */}
                          <div className="et_pb_column et_pb_column_1_3 et_pb_column_11  et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_module et_pb_blurb et_pb_blurb_6  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                              <div className="et_pb_blurb_content">
                                <div className="et_pb_main_blurb_image">
                                  <span className="">
                                    <img
                                      src={Seven}
                                      alt=""
                                      style={{ width: '59%' }}
                                      className=" et_pb_animation_top"
                                    />
                                  </span>
                                </div>
                                <div className="et_pb_blurb_container">
                                  <h3
                                    style={{
                                      fontWeight: 'bold',
                                      color: '#032d3c',
                                      fontSize: '24px',
                                    }}
                                    className="et_pb_module_header"
                                  >
                                    <span>Professionnalisme</span>
                                  </h3>
                                  <div className="et_pb_blurb_description">
                                    <p
                                      style={{
                                        fontSize: '17px',
                                        textAlign: 'center',
                                      }}
                                    >
                                      Notre priorité ?<br />
                                      La satisfaction du client ET du livreur !
                                    </p>
                                  </div>
                                </div>
                              </div>{' '}
                              {/* .et_pb_blurb_content */}
                            </div>{' '}
                            {/* .et_pb_blurb */}
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
              </div>{' '}
              {/* .entry-content */}
            </article>{' '}
            {/* .et_pb_post */}
          </div>{' '}
          {/* #main-content */}
          <Footer />
          {/* #main-footer */}
        </div>{' '}
        {/* #et-main-area */}
      </div>{' '}
      {/* #page-container */}
    </div>
  );
};
export default About;
