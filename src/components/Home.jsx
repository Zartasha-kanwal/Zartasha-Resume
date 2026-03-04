import { useEffect, useState } from "react";
import EmailSvg from "../assets/images/svg/email-svg.svg";
import Linkedin from "../assets/images/svg/Linkedin-svg.svg";
import Freelancer from "../assets/images/svg/Freelancer-svg.svg";
import Upwork from "../assets/images/svg/Upwork-svg.svg";
import HomeSvg from "../assets/images/svg/home-svg.svg";
import AboutSvg from "../assets/images/svg/about-svg.svg";
import ResumeSvg from "../assets/images/svg/resume-svg.svg";
import ServicesSvg from "../assets/images/svg/services-svg.svg";
import PortfolioSvg from "../assets/images/svg/portfolio-svg.svg";
import PricingSvg from "../assets/images/svg/pricing-svg.svg";
import ContactSvg from "../assets/images/svg/contact-svg.svg";
import clientImg1 from "../assets/images/clients-img1.jpg";
import clientImg2 from "../assets/images/clients-img2.jpg";
import clientImg3 from "../assets/images/clients-img3.jpg";
import clientImg4 from "../assets/images/clients-img4.jpg";
import zartasha from "../assets/images/zartasha-main-img.webp";
import sidebarprofileimage from "../assets/images/sidebar-image.png";
import CircularImg from "../assets/images/circular-img.png";
import FlowerImg from "../assets/images/flower.png";
import AboutSection from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Contact from "./Contact";
import $ from "jquery";
import CV from "../assets/Zartasha-Resume.pdf";
import { Link } from "react-router-dom";

// Map menu ids to their SVGs
const menuIcons = {
  home: HomeSvg,
  about: AboutSvg,
  resume: ResumeSvg,
  services: ServicesSvg,
  portfolio: PortfolioSvg,
  pricing: PricingSvg,
  contact: ContactSvg,
};

const openCV = () => {
  window.open(CV, "_blank");
};

const Home = () => {
  // Rotating texts
  const firstTexts = ["Designer", "Developer", "Freelancer"];
  const secondTexts = ["Freelancer", "Back-End Web Developer", "Full Stack Developer"];
  const intervalTime = 600;

  const [firstTextIndex, setFirstTextIndex] = useState(0);
  const [secondTextIndex, setSecondTextIndex] = useState(0);

  useEffect(() => {
    const firstTextTimeout = setTimeout(() => {
      setFirstTextIndex((prevIndex) => (prevIndex + 1) % firstTexts.length);
    }, intervalTime * 3);
    return () => clearTimeout(firstTextTimeout);
  }, [firstTextIndex, firstTexts.length]);

  useEffect(() => {
    const secondTextTimeout = setTimeout(() => {
      setSecondTextIndex((prevIndex) => (prevIndex + 1) % secondTexts.length);
    }, intervalTime * 3);
    return () => clearTimeout(secondTextTimeout);
  }, [secondTextIndex, secondTexts.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstTextIndex((prevIndex) => (prevIndex + 1) % firstTexts.length);
      setSecondTextIndex((prevIndex) => (prevIndex + 1) % secondTexts.length);
    }, intervalTime * 7);
    return () => clearInterval(interval);
  }, [firstTexts.length, secondTexts.length]);

// Toggle Btn
// eslint-disable-next-line no-unused-vars
const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.querySelector(".side-menu");
    const menuItems = document.querySelectorAll(".menu-list-main li");

    const handleMenuToggle = () => {
      setMenuOpen((prev) => !prev);
      menuToggle.classList.toggle("open");
      sideMenu.classList.toggle("show");
    };

    const handleMenuItemClick = (event) => {
      event.preventDefault();
      const linkElement = event.currentTarget.querySelector("a");
      if (linkElement) {
        const targetId = linkElement.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
        menuToggle.classList.remove("open");
        sideMenu.classList.remove("show");
      }
    };

    if (menuToggle && sideMenu && menuItems.length > 0) {
      menuToggle.addEventListener("click", handleMenuToggle);
      menuItems.forEach((item) => {
        item.addEventListener("click", handleMenuItemClick);
      });

      $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
      });

      return () => {
        menuToggle.removeEventListener("click", handleMenuToggle);
        menuItems.forEach((item) => {
          item.removeEventListener("click", handleMenuItemClick);
        });
      };
    }
  }, []);

  const [activeLink, setActiveLink] = useState("");

  const handleClick = (event, id) => {
    event.preventDefault();
    setActiveLink(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button id="menu-toggle" className="menu-toggle-button">
        <span className="hamburger" id="hamburger-1">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
      </button>

      <div className="side-menu">
        <div className="profile-img-main">
          <img className="zoom_in" src={sidebarprofileimage} alt="profile-img" />
          <h1 className="fade_up">Zartasha <span>Kanwal</span></h1>
          <h2 className="designer fade_up">{firstTexts[firstTextIndex]}</h2>
          <div className="profile-media-icons-main fade_up">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zartashakanwal529@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-media-icons"
            >
              <img src={EmailSvg} alt="email-svg" />
            </a>
            <Link to="https://www.linkedin.com/in/zartasha-kanwal" className="profile-media-icons">
              <img src={Linkedin} alt="linkedin-svg" width="20" height="20" />
            </Link>
            <Link to="https://www.freelancer.com/u/zartashak?sb=t" className="profile-media-icons">
              <img src={Freelancer} alt="freelancer-svg" width="25" height="25" />
            </Link>
            <Link to="https://www.upwork.com/freelancers/~01da65ee9b58b0f9e1?mp_source=share" className="profile-media-icons">
              <img src={Upwork} alt="upwork-svg" width="25" height="25" />
            </Link>
            <Link to="https://www.fiverr.com/s/XLK04G0" className="profile-media-icons">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/fiverr.svg"
                alt="fiverr-icon"
                width="25"
                height="25"
                style={{ filter: "invert(1)" }}
              />
            </Link>
          </div>
        </div>

        {/* Menu List */}
        <div className="menu-list-main">
          <ul>
            {["home", "about", "resume", "services", "portfolio", "pricing", "contact"].map((id) => (
              <li key={id} className={`active-menu-action ${activeLink === id ? "active" : ""}`}>
                <a className="fade_right" href={`#${id}`} onClick={(e) => handleClick(e, id)}>
                  <img src={menuIcons[id]} alt={`${id}-svg`} />
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div id="wrap">
          <button onClick={openCV} className="btn-slide">
            <span className="circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  className="download-svg"
                  d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="title">View CV</span>
            <span className="title-hover">Click Here</span>
          </button>
        </div>
      </div>

      <div className="main-containe" data-bs-spy="scroll">
        <section className="section-one overflow-hidden" id="home">
          <div className="row">
            <div className="col-xxl-6 col-lg-6">
              <h2 className="jessica-main-text zoom_in">
                Zartasha <span>Kanwal</span>
              </h2>
              <h3 className="back-End-dev designer2">Front-end Web Developer</h3>
              <p className="best fade_down">
                I truly appreciate your trust. My clients choose me and my work because they know I deliver the best.
              </p>
              <div className="section-one-btns-main fade_down">
                <div className="wrapper">
                  <a className="btn-hover" href="#portfolio">View Work</a>
                </div>
                <div className="wrapper">
                  <a className="btn-hover btn-hover2" href="#contact">Contact Me</a>
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-lg-6 position-relative">
              <img className="flower" src={FlowerImg} alt="flower" />
              <img className="circular-img" src={CircularImg} alt="circular-img" />
              <img className="jessica-main-img zoom_in" src={zartasha} alt="jessica-main-img" />
              <div className="worked-box">
                <p className="worked-more">Worked with more than 100 people</p>
                <div className="client-img-main position-relative">
                  <img className="client-img client-img1" src={clientImg1} alt="clients-img1" />
                  <img className="client-img client-img2" src={clientImg2} alt="clients-img2" />
                  <img className="client-img client-img3" src={clientImg3} alt="clients-img3" />
                  <img className="client-img client-img4" src={clientImg4} alt="clients-img4" />
                  <p className="worked-more worked-more2">100+ Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
        <Resume />
        <Services />
        <Portfolio />
        <Pricing />
        <Contact />
      </div>
    </>
  );
};

export default Home;