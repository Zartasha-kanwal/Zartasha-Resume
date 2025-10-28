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

            {/* Hatzs Dimensions Internship */}
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Frontend Developer Intern</p>
                <p className="cursus university">
                  Hatzs Dimensions / Remote Internship / July 2025 - October
                  2025
                </p>
                <p className="cursus">
                  Contributed to live projects focusing on responsive UI
                  development using React.js, Next.js, and TypeScript.
                  Integrated APIs and managed state using Redux, Zustand, Apollo
                  Client, and TanStack Query. Collaborated with the frontend
                  team to create high-performance, user-centric web experiences
                  with modern UI practices.
                </p>
              </div>
            </div>

            {/* Freelance Frontend Developer */}
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
                  Tailwind CSS, Bootstrap, and JavaScript. Worked with
                  international clients to create modern UI/UX designs.
                </p>
              </div>
            </div>

            {/* Personal Projects */}
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
                  Developed clones of popular websites (Netflix, AdminKit
                  Dashboard, Paheli Cyber Security, Edumim, Behance,
                  Booking.com, and PropertyFinder.ae). Experimented with GSAP
                  animations for enhanced UI.
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
          {/* HTML & CSS */}
          <div className="design-skills-img-main flip_up">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML Logo"
              width="50"
              height="40"
            />
            <div className="skill-counter-main">
              <p>99%</p>
              <p>HTML, CSS</p>
            </div>
          </div>

          {/* JavaScript */}
          <div className="design-skills-img-main photoshop flip_up">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg"
              alt="JavaScript Logo"
              width="50"
              height="40"
            />
            <div className="skill-counter-main photoshop-text">
              <p>97%</p>
              <p>JavaScript</p>
            </div>
          </div>

          {/* React.js */}
          <div className="design-skills-img-main adobe-xd flip_up">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React.js Logo"
              width="50"
              height="40"
            />
            <div className="skill-counter-main adobe-xd-text">
              <p>99%</p>
              <p>React.js</p>
            </div>
          </div>

          {/* Next.js */}
          <div className="design-skills-img-main flip_up">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
              alt="Next.js Logo"
              width="50"
              height="40"
            />
            <div className="skill-counter-main">
              <p>99%</p>
              <p>Next.js</p>
            </div>
          </div>

          {/* TypeScript */}
          <div className="design-skills-img-main flip_up">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
              alt="TypeScript Logo"
              width="50"
              height="40"
            />
            <div className="skill-counter-main">
              <p>98%</p>
              <p>TypeScript</p>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="design-skills-img-main sketch flip_up">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="Tailwind CSS Logo"
              width="50"
              height="40"
            />
            <div className="skill-counter-main sketch-text">
              <p>99%</p>
              <p>Tailwind CSS</p>
            </div>
          </div>

          {/* Sass  */}
          <div className="design-skills-img-main flip_up">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
              alt="Sass Logo"
              width="50"
              height="40"
            />
            <div className="skill-counter-main">
              <p>97%</p>
              <p>Sass (SCSS)</p>
            </div>
          </div>

          {/* Bootstrap */}
          <div className="design-skills-img-main invision flip_up">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
              alt="Bootstrap Logo"
              width="50"
              height="40"
            />
            <div className="skill-counter-main invision-text">
              <p>95%</p>
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
    </>
  );
};
export default Resume;
