import React from "react";
import BasicPlanSvg from "../assets/images/svg/basic-plain.svg";
import StandardPlanSvg from "../assets/images/svg/strandard-plan.svg";
import GoldPlanSvg from "../assets/images/svg/gold-plan.svg";
import ColanIcon from "../assets/images/svg/colan-icon.svg";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const Pricing = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* <!-- ====================================== Section Pricing ===================================== --> */}
      <section className="Pricing-section" id="pricing">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Pricing.
          </h2>
          <div className="line"></div>
        </div>
        <div className="pricing-section-main zoom_in">
          <div className="basic-plain-box-main">
            <div className="basic-plain-box">
              <img src={BasicPlanSvg} alt="basic-plain" />
              <p className="basic-plain-text">Basic Plan</p>
            </div>
            <div className="basic-plain-box-sub">
              <p className="mon">
                50<sup>$</sup>
              </p>
            </div>
          </div>
          <div className="development-box">
            <div>
              <h3 className="pricing-plaines-name">Single-Page Website</h3>
              <h3 className="pricing-plaines-name">Fully Responsive Design</h3>
              <h3 className="pricing-plaines-name">Basic SEO Optimization</h3>
              <h3 className="pricing-plaines-name">1 Revision Included</h3>
              <h3 className="pricing-plaines-name">
                Fast & Professional Delivery
              </h3>
            </div>
            <div className="choose-plain-btn-main">
              <div className="wrapper">
                <a className="btn-hover" href="#">
                  Choose Plan
                </a>
              </div>
              <p className="taxes">10% tax will be added at checkout</p>
            </div>
          </div>
        </div>
        <div className="pricing-section-main zoom_in">
          <div className="basic-plain-box-main">
            <div className="basic-plain-box basic-plain-box2">
              <img src={StandardPlanSvg} alt="strandard-plan" />
              <p className="basic-plain-text">Standard Plan</p>
            </div>
            <div className="basic-plain-box-sub">
              <p className="mon">
                100<sup>$</sup>
              </p>
            </div>
          </div>
          <div className="development-box">
            <div>
              <h3 className="pricing-plaines-name">Multi-Page Website</h3>
              <h3 className="pricing-plaines-name">
                Responsive & Modern UI Design
              </h3>
              <h3 className="pricing-plaines-name"> SEO & Performance Boost</h3>
              <h3 className="pricing-plaines-name">2 Revisions Included</h3>
              <h3 className="pricing-plaines-name">
                Contact form & Social Links
              </h3>
            </div>
            <div className="choose-plain-btn-main">
              <div className="wrapper">
                <a className="btn-hover" href="#">
                  Choose Plan
                </a>
              </div>
              <p className="taxes">10% tax will be added at checkout</p>
            </div>
          </div>
        </div>
        <div className="pricing-section-main mb-0 zoom_in">
          <div className="basic-plain-box-main">
            <div className="basic-plain-box basic-plain-box3">
              <img src={GoldPlanSvg} alt="gold-plan" />
              <p className="basic-plain-text">Gold Plan</p>
            </div>
            <div className="basic-plain-box-sub">
              <p className="mon">
                200<sup>$</sup>
              </p>
            </div>
          </div>
          <div className="development-box">
            <div>
              <h3 className="pricing-plaines-name">Advanced Website Design</h3>
              <h3 className="pricing-plaines-name">Advanced Animations & UI</h3>
              <h3 className="pricing-plaines-name">
                {" "}
                Custom Forms & Dashboards
              </h3>
              <h3 className="pricing-plaines-name">Final Refinements</h3>
              <h3 className="pricing-plaines-name">
                Complete Project Assistance
              </h3>
            </div>
            <div className="choose-plain-btn-main">
              <div className="wrapper">
                <a className="btn-hover" href="#">
                  Choose Plan
                </a>
              </div>
              <p className="taxes">10% tax will be added at checkout</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Pricing End ===================================== --> */}
      {/* <!-- ====================================== Section Testimonials ===================================== --> */}
      <section className="testimonials-section">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Testimonials.
          </h2>
          <div className="line"></div>
        </div>
        <p className="testament fade_up">
          My clients' words reflect my commitment to excellence and my ability
          to turn their visions into reality. See how we've made a lasting
          impact on their brands and projects.
        </p>

        <Slider className="Testimonials" {...settings}>
          <div>
            <div className="colan-icon-img-main">
              <img src={ColanIcon} alt="colan-icon" />
            </div>
            <p className="avix">
              Thanks to Zartasha’s game-changing website design and development,
              my online presence has reached new heights. My website has never
              looked better! She transformed my vision into reality with her
              expertise and attention to detail.
            </p>
            <p className="client-name">Olivia Segio</p>
            <p className="kello">Oria Studio</p>
          </div>
          <div>
            <div className="colan-icon-img-main">
              <img src={ColanIcon} alt="colan-icon" />
            </div>
            <p className="avix">
              Zartasha has been a game-changer for my online presence. She took
              my vision and turned it into a stunning reality. The results speak
              for themselves—my website has never looked better!
            </p>
            <p className="client-name">Marilina Harless</p>
            <p className="kello">Kello Auxa</p>
          </div>
          <div>
            <div className="colan-icon-img-main">
              <img src={ColanIcon} alt="colan-icon" />
            </div>
            <p className="avix">
              Thanks to Zartasha's exceptional website design and development,
              my online presence has never been stronger. She took my vision and
              turned it into a stunning reality, exceeding all expectations.
            </p>
            <p className="client-name">Olivia Segio</p>
            <p className="kello">Oria Studio</p>
          </div>
          <div>
            <div className="colan-icon-img-main">
              <img src={ColanIcon} alt="colan-icon" />
            </div>
            <p className="avix">
              Zartasha has completely transformed my online presence. She turned
              my vision into a beautifully designed, high-performing website
              that truly stands out. The quality and attention to detail
              exceeded my expectations!
            </p>
            <p className="client-name">Marilina Harless</p>
            <p className="kello">Kello Auxa</p>
          </div>
        </Slider>
      </section>
      {/* <!-- ====================================== Section Testimonials ===================================== --> */}
    </>
  );
};
export default Pricing;
