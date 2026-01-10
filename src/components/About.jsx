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
          Hi, I’m <span>Zartasha Kanwal,</span> a Frontend Developer passionate
          about crafting modern, responsive, and user-friendly web applications.
          I specialize in React.js, Next.js, and TypeScript, with strong
          experience in Tailwind CSS, Bootstrap, and GSAP for interactive
          animations. I enjoy transforming ideas into visually engaging digital
          experiences through clean code, seamless UI/UX, and
          performance-focused development. My work often involves API
          integration and state management using tools like Redux, Zustand,
          Apollo Client, and TanStack Query. When I’m not coding, I love
          exploring new frontend trends and refining my design sense to keep my
          projects creative and up to date. Let’s collaborate and build
          something amazing together!
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
          <p className="about-detail-info">3 years</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Freelance</p>
          <p className="about-detail-info">Available</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info">English-Urdu</p>
        </div>
      </section>
      {/* <!-- ====================================== Section About End ===================================== --> */}
    </>
  );
};
export default AboutSection;
