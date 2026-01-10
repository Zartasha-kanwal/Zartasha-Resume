import React, { useEffect, useRef } from "react";

const Resume = () => {
  return (
    <>
      {/* <!-- ====================================== Section Education Experience ===================================== --> */}
      <section className="resume" id="resume">
        {/* ===== Education Section ===== */}
        <div className="education-section fade_up">
          <div className="heading-container">
            <h2 className="section-title">Education.</h2>
            <div className="line"></div>
          </div>

          <div className="education-item fade_up">
            <div className="circle"></div>
            <div className="content">
              <h3>Bachelor's in Computer Science</h3>
              <span>Islamia University Bahawalpur / 2021 - 2025</span>
              <p>
                Focused on web development, UI/UX design, and modern front-end
                technologies. Developed multiple projects using React.js,
                Next.js, TypeScript, JavaScript, and responsive design.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Experience Section ===== */}
        <div className="experience-section fade_up">
          <div className="heading-container">
            <h2 className="section-title">Experience.</h2>
            <div className="line"></div>
          </div>

          <div className="experience-columns">
            {/* Column 1 */}
            <div className="column">
              <div className="experience-item fade_up">
                <div className="circle"></div>
                <div className="content">
                  <h3>Frontend Developer Intern</h3>
                  <span>Hatzs Dimensions / Remote / Jul 2025 - Oct 2025</span>
                  <p>
                    Contributed to live projects focusing on responsive UI
                    development using React.js, Next.js, and TypeScript.
                    Integrated APIs and managed state using Redux, Zustand,
                    Apollo Client, and TanStack Query.
                  </p>
                </div>
              </div>

              <div className="experience-item fade_up">
                <div className="circle"></div>
                <div className="content">
                  <h3>React.js Developer (Personal Projects)</h3>
                  <span>GitHub & Open Source / 2023 - Present</span>
                  <p>
                    Developed clones of popular websites (Netflix, AdminKit
                    Dashboard, Edumim, Behance, Apple.com, Amazon.com).
                    Experimented with GSAP animations for enhanced UI.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="column">
              <div className="experience-item fade_up">
                <div className="circle"></div>
                <div className="content">
                  <h3>Freelance Frontend Developer</h3>
                  <span>Self-Employed / 2023 – Present</span>
                  <p>
                    Delivering responsive and modern web interfaces using
                    React.js, Next.js, Tailwind CSS, and JavaScript. Worked with
                    international clients to translate UI designs into clean,
                    maintainable code while ensuring performance and
                    accessibility.
                  </p>
                </div>
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
