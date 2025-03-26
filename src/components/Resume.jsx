import React, { useEffect, useRef } from "react";

const Resume = () => {

  return (
    <>
      {/* <!-- ====================================== Section Education Experience ===================================== --> */}
      <section className="education-experience" id="resume">
        <div className="row">
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Education.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Bachelor's in Computer Science</p>
                <p className="cursus university">
                  Islamia University Bahawalpur / 2018 - 2022
                </p>
                <p className="cursus">
                  Focused on web development, UI/UX design, and modern front-end
                  technologies. Developed multiple projects using React.js,
                  JavaScript, and responsive design.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Web Development Certification</p>
                <p className="cursus university">Online Course / 2022 - 2023</p>
                <p className="cursus">
                  Specialized in React.js, Tailwind CSS, and JavaScript. Built
                  dynamic and responsive web applications while mastering modern
                  front-end frameworks.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Frontend Development Training</p>
                <p className="cursus university">
                  Self-Learning & Freelance Projects / Ongoing
                </p>
                <p className="cursus">
                  Continuously enhancing skills in React.js, GSAP animations,
                  and UI/UX design. Working on real-world projects and freelance
                  assignments.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Experience.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Freelance Frontend Developer</p>
                <p className="cursus university">
                  Self-Employed / 2023 - Present
                </p>
                <p className="cursus">
                  Building responsive and dynamic websites using React.js,
                  Tailwind CSS,Bootstrap and JavaScript. Worked with
                  international clients to create modern UI/UX designs.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">
                  React.js Developer (Personal Projects)
                </p>
                <p className="cursus university">
                  GitHub & Open Source / 2023 - Present
                </p>
                <p className="cursus">
                  Developed clones of popular websites
                  (Netflix,AdminKit-Dashboard,Paheli cyber security,Edumim,
                  Behance, Booking.com and propertyfinder.ae). Experimented with
                  GSAP animations for enhanced UI.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Frontend Development Intern</p>
                <p className="cursus university">
                  Remote Internship / 2023 - 2025
                </p>
                <p className="cursus">
                  Gained hands-on experience in frontend development,
                  collaborating on real-world projects using JavaScript, HTML,
                  CSS, Bootstrap and Tailwind css.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
    
      {/* <!-- ====================================== Section Skills ===================================== --> */}
      <section className="design-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text design-skill-text fade_up">
            Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div className="design-skill-sub-section">
          <div className="design-skills-img-main flip_up">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML Logo" width="50" height="40"/>
            <div className="skill-counter-main">
              <p>98%</p>
              <p>HTML, CSS</p>
            </div>
          </div>
          <div className="design-skills-img-main photoshop flip_up">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg" alt="JavaScript Logo" width="50" height="40"/>
            <div className="skill-counter-main photoshop-text">
              <p>95%</p>
              <p>JavaScript</p>
            </div>
          </div>
          <div className="design-skills-img-main adobe-xd flip_up">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js Logo" width="50" height="40"/>
            <div className="skill-counter-main adobe-xd-text">
              <p>92%</p>
              <p>React.js</p>
            </div>
          </div>

          <div className="design-skills-img-main sketch flip_up">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS Logo" width="50" height="40"/>
            <div className="skill-counter-main sketch-text">
              <p>97%</p>
              <p>Tailwind CSS</p>
            </div>
          </div>
          <div className="design-skills-img-main invision flip_up">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap Logo" width="50" height="40"/>
            <div className="skill-counter-main invision-text">
              <p>95%</p>
              <p> Bootstrap</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}

    </>
  );
};
export default Resume;
