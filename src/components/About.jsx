import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section About ===================================== --> */}
      <section className="About-section jos" id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div>
        <p className="section-sub-text about-sub-text zoom_in">
          Hi, I’m <span>Zartasha Kanwal,</span> Front-End Developer with
          expertise in React.js, Tailwind CSS, and Bootstrap along with a strong
          foundation in HTML, CSS, and JavaScript.I specialize in building
          modern, responsive, and visually appealing web applications. I focus
          on writing clean, efficient code and creating seamless user
          experiences. Passionate about UI/UX, I continuously explore the latest
          web technologies to deliver high-quality projects. I’m open to
          freelance opportunities and collaborations to bring creative ideas to
          life. Let’s build something amazing!
        </p>
        <div className="about-detail-main">
          <p className="about-detail">Name</p>
          <p className="about-detail-info">Zartasha Kanwal</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Nationality</p>
          <p className="about-detail-info">PAKISTAN</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=zartashakanwal529@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="about-detail-info email"
          >
            zartashakanwal529@gmail.com
          </a>
        </div>

        <div className="about-detail-main">
          <p className="about-detail">Experience</p>
          <p className="about-detail-info">6+ years</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Freelance</p>
          <p className="about-detail-info">Available</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info">English</p>
        </div>
      </section>
      {/* <!-- ====================================== Section About End ===================================== --> */}
    </>
  );
};
export default AboutSection;
