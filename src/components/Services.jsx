import React from "react";
import UiUxSvg from "../assets/images/svg/ui-ux.svg";
import DownArrow from "../assets/images/svg/down-arrow.svg";
import VisualBranding from "../assets/images/svg/visual-branding.svg";
import WebDevelopement from "../assets/images/svg/web-development.svg";
import AppDevelopement from "../assets/images/svg/app-development.svg";

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
          BUILDING DIGITAL EXPERIENCES WITH MODERN FRONTEND TECHNOLOGIES
        </h3>

        <p className="visoion-text fade_up">
          I specialize in crafting interactive, responsive, and user-friendly
          web applications. Using the latest tools and frameworks, I focus on
          clean code, modern UI/UX, and performance-driven development.
        </p>

        <div className="row services-row">
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <div className="services-img">
              <img src={UiUxSvg} alt="ui-ux" />
            </div>
            <p className="services-text">UI/UX DESIGN</p>
            <p className="molestie">
              Designing intuitive, visually appealing interfaces that create
              seamless user experiences.
            </p>
            <img className="down-arrow-svg" src={DownArrow} alt="down-arrow" />
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <div className="services-img services-img2">
              <img src={VisualBranding} alt="visual-branding" />
            </div>
            <p className="services-text services-text2">FRONTEND DEVELOPMENT</p>
            <p className="molestie">
              Building responsive web applications using React.js, Next.js,
              TypeScript, and Tailwind CSS.
            </p>
            <img className="down-arrow-svg" src={DownArrow} alt="down-arrow" />
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <div className="services-img services-img3">
              <img src={WebDevelopement} alt="web-development" />
            </div>
            <p className="services-text services-text3">
              REACT & NEXT.JS PROJECTS
            </p>
            <p className="molestie">
              Developing modern, high-performance websites and web apps with
              dynamic functionality and smooth interactions.
            </p>
            <img className="down-arrow-svg" src={DownArrow} alt="down-arrow" />
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <div className="services-img services-img4">
              <img src={AppDevelopement} alt="app-development" />
            </div>
            <p className="services-text services-text4">
              PERSONAL PROJECTS & CLONES
            </p>
            <p className="molestie">
              Creating clones of popular websites and experimenting with
              animations for better UI/UX experiences.
            </p>
            <img className="down-arrow-svg" src={DownArrow} alt="down-arrow" />
          </div>
        </div>
      </section>

      {/* <!-- ====================================== Section Services End ===================================== --> */}
    </>
  );
};
export default Services;
