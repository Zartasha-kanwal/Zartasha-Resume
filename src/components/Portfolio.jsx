import React, { useState, useEffect } from "react";

import $ from "jquery";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      {/* <!-- ====================================== Section Portfolio ===================================== --> */}
      <section className="portfolio-section" id="portfolio">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Portfolio.
          </h2>
          <div className="line"></div>
        </div>
        <div className="portfolios-group-main">
          {/* Column 1 */}
          <div>
            <a
              href="https://adminkit-demo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-container popup-btn zoom_in">
                <img src="./images/Adminkit.png" alt="Adminkit-demo" />
                <div className="overlay">
                  <p className="overlay-text">Adminkit-Demo</p>
                </div>
              </div>

              <p className="Corporate zoom_in">Adminkit-Demo</p>
              <p className="Corporate-sub zoom_in">
                React.js, Tailwind CSS and JS
              </p>
            </a>

            {/* Second row */}

            <a
              href="https://gta-vi-web-lime.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="second-row-portfolio youtube zoom_in">
                <div className="image-container">
                  <img src="./images/GTA-VI.png" alt="GTA-VI UI" />
                  <div className="overlay">
                    <p className="overlay-text">GTA-VI UI </p>
                  </div>
                </div>
                <p className="Corporate">GTA-VI UI</p>
                <p className="Corporate-sub">React.js, Tailwind css & GSAP</p>
              </div>
            </a>

            {/* Third row */}

            <a
              href="https://paheli-cyber-security.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="second-row-portfolio youtube zoom_in">
                <div className="image-container">
                  <img
                    src="./images/Pheli.png"
                    alt="Paheli cyber security Clone"
                  />
                  <div className="overlay">
                    <p className="overlay-text">Paheli Cyber Security </p>
                  </div>
                </div>
                <p className="Corporate">Paheli Cyber Security</p>
                <p className="Corporate-sub">React.js & Tailwind css</p>
              </div>
            </a>
          </div>

          {/* Column 2 */}
          <div>
            <a
              href="https://apple-replica-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-container zoom_in">
                <img src="./images/Apple.png" alt="Netflix" />
                <div className="overlay">
                  <p className="overlay-text">Apple.com Clone</p>
                </div>
              </div>
              <p className="Corporate zoom_in">Apple.com Clone</p>
              <p className="Corporate-sub zoom_in">Tailwind CSS + React.js</p>
            </a>

            {/* Row-2 */}
            <a
              href="https://behance-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="second-row-portfolio youtube zoom_in">
                <div className="image-container">
                  <img src="./images/Behance.png" alt="Behance.net Clone" />
                  <div className="overlay">
                    <p className="overlay-text">Behance.net Clone</p>
                  </div>
                </div>
                <p className="Corporate">Behance.net Clone</p>
                <p className="Corporate-sub">React.js & Tailwind css</p>
              </div>
            </a>

            <a
              href="https://bottle-animation-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="zoom_in">
                <div className="image-container">
                  <img src="./images/Bottle.png" alt="Animated Bottle UI" />
                  <div className="overlay">
                    <p className="overlay-text">Animated Bottle UI</p>
                  </div>
                </div>
                <p className="Corporate">Animated Bottle UI</p>
                <p className="Corporate-sub">React, Tailwind CSS & GSAP</p>
              </div>
            </a>
          </div>

          {/* Column 3 */}
          <div className="gallery-bank-section">
            <a
              href="https://amazon-react-clone-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="zoom_in">
                <div className="image-container">
                  <img src="./images/Amazon.png" alt="Amazon Clone" />
                  <div className="overlay">
                    <p className="overlay-text">Amazon clone</p>
                  </div>
                </div>
                <p className="Corporate">Amazon Clone</p>
                <p className="Corporate-sub">React & Tailwind CSS</p>
              </div>
            </a>

            {/* Second row */}
            <a
              href="https://ecommerce-frontend-bice-rho.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="second-row-portfolio popup-btn zoom_in">
                <div className="image-container">
                  <img src="./images/New-ecommerce.png" alt="Ecommerce App" />
                  <div className="overlay">
                    <p className="overlay-text">Ecommerce App</p>
                  </div>
                </div>
                <p className="Corporate">Full-stack Ecommerce App</p>
                <p className="Corporate-sub">React + Tailwind CSS</p>
              </div>
            </a>

            <a
              href="https://zentry-app-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="second-row-portfolio popup-btn zoom_in">
                <div className="image-container">
                  <img src="./images/Zentry.png" alt="Zentry UI Clone" />
                  <div className="overlay">
                    <p className="overlay-text">Zentry UI Clone</p>
                  </div>
                </div>
                <p className="Corporate">Zentry UI Clone</p>
                <p className="Corporate-sub">React.js + Tailwind CSS & GSAP</p>
              </div>
            </a>

            <a
              href="https://edumim-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="zoom_in">
                <div className="image-container">
                  <img src="./images/Edumim.png" alt="Edumim Clone" />
                  <div className="overlay">
                    <p className="overlay-text">Edumim Clone</p>
                  </div>
                </div>
                <p className="Corporate">Edumim Clone</p>
                <p className="Corporate-sub">React & Tailwind CSS</p>
              </div>
            </a>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="wrapper view-all-btn zoom_in">
          <a
            className="btn-hover"
            href="https://vercel.com/zartasha-kanwals-projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All
          </a>
        </div>
      </section>

      {/* <!-- ====================================== Section Portfolio End ===================================== --> */}
    </>
  );
};
export default Portfolio;
