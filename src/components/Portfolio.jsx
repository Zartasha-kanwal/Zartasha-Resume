import React, { useState, useEffect } from "react";

import $ from "jquery";
import Galleryimg1 from "../assets/images/gallery/gallery-img1.jpg";
import Galleryimg2 from "../assets/images/gallery/gallery-img2.jpg";
import Galleryimg3 from "../assets/images/gallery/gallery-img3.jpg";
import Galleryimg4 from "../assets/images/gallery/gallery-img4.jpg";
import Galleryimg5 from "../assets/images/gallery/gallery-img5.jpg";
import Galleryimg6 from "../assets/images/gallery/gallery-img6.jpg";
import Galleryimg7 from "../assets/images/gallery/gallery-img7.jpg";
import Galleryimg8 from "../assets/images/gallery/gallery-img8.jpg";
import Fancybox from "./FancyBox";
import Popup from "./PopUp";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupOpen = (e) => {
    e.preventDefault();
    setIsPopupVisible(true);
  };

  const handlePopupClose = (e) => {
    e.preventDefault();
    setIsPopupVisible(false);
  };

  // Vimeo Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Youtube Modal
  const [isModalOpenYoutube, setisModalOpenYoutube] = useState(false);

  const handleOpenModalYoutube = () => {
    setisModalOpenYoutube(true);
  };

  const handleCloseModalYoutube = () => {
    setisModalOpenYoutube(false);
  };

  // Soundcloud Modal
  const [isModalOpenSound, setIsModalOpenSound] = useState(false);

  const handleOpenModalSound = () => {
    setIsModalOpenSound(true);
  };

  const handleCloseModalSound = () => {
    setIsModalOpenSound(false);
  };

  useEffect(() => {
    // Function to initialize fancybox for the gallery

    // Event listener to toggle 'full' class on image click
    const handleImageClick = (event) => {
      event.target.classList.toggle("full");
    };

    // Attach click event to gallery images
    const galleryLinks = document.querySelectorAll(".gallery-link img");
    galleryLinks.forEach((link) => {
      link.addEventListener("click", handleImageClick);
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      galleryLinks.forEach((link) => {
        link.removeEventListener("click", handleImageClick);
      });
    };
  }, []);
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
              <div
                className="image-container popup-btn zoom_in"
              >
                <img src="./images/Adminkit.png" alt="Adminkit-demo" />
                <div className="overlay">
                  <p className="overlay-text">Adminkit-Demo</p>
                </div>
              </div>
            </a>
            <p className="Corporate zoom_in">Adminkit-Demo</p>
            <p className="Corporate-sub zoom_in">
              React.js, Tailwind CSS and JS
            </p>

            {/* Second row */}
            <div className="second-row-portfolio youtube zoom_in">
              <div className="image-container" onClick={handleOpenModalYoutube}>
                <img src="./images/Pheli.png" alt="Booking Clone" />
                <div className="overlay">
                  <p className="overlay-text">Paheli cyber security</p>
                </div>
              </div>
              <p className="Corporate">Paheli cyber security</p>
              <p className="Corporate-sub">React.js & Tailwind css</p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <div
              className="image-container zoom_in"
              id="vimeo"
              onClick={handleOpenModal}
            >
              <img src="./images/Netflix.png" alt="Paheli Cyber Security" />
              <div className="overlay">
                <p className="overlay-text">Netflix clone</p>
              </div>
            </div>
            <p className="Corporate zoom_in">Netflix clone</p>
            <p className="Corporate-sub zoom_in">Tailwind CSS</p>
          </div>

          {/* Column 3 */}
          <div className="gallery-bank-section">
            <div className="zoom_in">
              <div className="image-container">
                <a href="#popup2">
                  <img src="./images/Edumim.png" alt="Edumim Clone" />
                  <div className="overlay">
                    <p className="overlay-text">Edumim Clone</p>
                  </div>
                </a>
              </div>
              <p className="Corporate">Edumim Clone</p>
              <p className="Corporate-sub">React & Tailwind CSS</p>
            </div>

            {/* Second row */}
            <div
              className="second-row-portfolio popup-btn zoom_in"
            >
              <div className="image-container">
                <img src="./images/luminos.png" alt="Behance Clone" />
                <div className="overlay">
                  <p className="overlay-text">Luminos Clone</p>
                </div>
              </div>
              <p className="Corporate">Luminos Clone</p>
              <p className="Corporate-sub">Tailwind CSS</p>
            </div>
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

      <Popup isVisible={isPopupVisible} onClose={handlePopupClose} />
      {/* <!-- ====================================== Section Portfolio End ===================================== --> */}
      <div id="popup2" class="popup-container popup-style">
        <div class="popup-content popup-content-gallery">
          <a href="#pop" class="close">
            &times;
          </a>

          <main class="main">
            <h2 class="mobile_app">Gallery</h2>

            <div class="container">
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg1}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg1} alt="gallery-img1" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg2}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg2} alt="gallery-img2" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg3}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg3} alt="gallery-img3" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg4}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg4} alt="gallery-img4" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg5}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg5} alt="gallery-img5" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg6}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg6} alt="gallery-img6" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg7}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg7} alt="gallery-img7" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg8}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg8} alt="gallery-img8" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg3}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg3} alt="gallery-img3" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg1}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg1} alt="gallery-img1" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg2}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg2} alt="gallery-img2" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg3}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg3} alt="gallery-img3" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg4}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg4} alt="gallery-img4" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg5}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg5} alt="gallery-img5" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg1}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg1} alt="gallery-img1" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg2}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg2} alt="gallery-img2" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg3}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg3} alt="gallery-img3" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg4}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg4} alt="gallery-img4" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg5}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg5} alt="gallery-img5" />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
