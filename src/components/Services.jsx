import React from "react";
import UiUxSvg from "../assets/images/svg/ui-ux.svg";
import DownArrow from "../assets/images/svg/down-arrow.svg";
import VisualBranding from "../assets/images/svg/visual-branding.svg";
import WebDevelopement from "../assets/images/svg/web-development.svg";
import AppDevelopement from "../assets/images/svg/app-development.svg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* <!-- ====================================== Section Services ===================================== --> */}
      <section className="Services-section" id="services">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Services.
          </h2>
          <div className="line"></div>
        </div>
        <h3 className="services-product-text fade_up">
          BUILDING DIGITAL PRODUCT WITH BETTER EXPERIENCE
        </h3>
        <p className="visoion-text fade_up">
          Our vision is to be a trailblazing force in the world of web design
          and development, recognized for our unwavering commitment to
          excellence, integrity, and customer satisfaction.
        </p>
        <div className="row services-row">
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#services-popup">
              <div className="services-img">
                <img src={UiUxSvg} alt="ui-ux" />
              </div>
              <p className="services-text">UI/UX DESIGN</p>
              <p className="molestie">
                Crafting intuitive and visually stunning user interfaces that
                enhance user experience.
              </p>
              <img
                className="down-arrow-svg"
                src={DownArrow}
                alt="down-arrow"
              />
            </Link>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#services-popup">
              <div className="services-img services-img2">
                <img src={VisualBranding} alt="visual-branding" />
              </div>
              <p className="services-text services-text2">VISUAL BRANDING</p>
              <p className="molestie">
                Creating memorable brand identities that leave a lasting
                impression.
              </p>
              <img
                className="down-arrow-svg"
                src={DownArrow}
                alt="down-arrow"
              />
            </Link>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#services-popup">
              <div className="services-img services-img3">
                <img src={WebDevelopement} alt="web-development" />
              </div>
              <p className="services-text services-text3">WEB DEVELOPMENT</p>
              <p className="molestie">
                Developing high-performance, responsive websites tailored to
                your needs.
              </p>
              <img
                className="down-arrow-svg"
                src={DownArrow}
                alt="down-arrow"
              />
            </Link>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#services-popup">
              <div className="services-img services-img4">
                <img src={AppDevelopement} alt="app-development" />
              </div>
              <p className="services-text services-text4">APP DEVELOPMENT</p>
              <p className="molestie">
                Building seamless and user-friendly mobile applications for a
                global audience.
              </p>
              <img
                className="down-arrow-svg"
                src={DownArrow}
                alt="down-arrow"
              />
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Services End ===================================== --> */}
    </>
  );
};
export default Services;
