import React from "react";

const Blog = () => {
  return (
    <>
      {/* <!-- ====================================== Section Blogs ===================================== --> */}
      <section className="blog-section" id="blog">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Blogs.
          </h2>
          <div className="line"></div>
        </div>
        <div className="blog-main zoom_in">
          <div className="blog-img-section">
            <p className="blog-date">
              20<span>MAR</span>
            </p>
          </div>
          <div>
            <h3 className="post-date">20 MAR 2025 | web development</h3>
            <h4 className="steps">
              Become a Frontend Developer in 5 Simple Steps
            </h4>
            <h5 className="est">
              Est a quis ipsum et arcu. Sit eros leo enim sed vivamus. Nulla et
              eget commodo mus suspendisse imperdiet. Rhoncus commodo duis nulla
              habitasse viverra turpis metus in. Tellus nam vivamus et in
              commodo bibendum.
            </h5>
            <div className="wrapper blog-btn">
              <a className="btn-hover" href="#blog-popup">
                Read More
                <svg
                  className="btn-arrow-right"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M21.5621 14.6665L14.4101 7.51452L16.2957 5.62891L26.6666 15.9999L16.2957 26.3707L14.4101 24.4851L21.5621 17.3332H5.33331V14.6665H21.5621Z"
                    fill="#0F141C"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="blog-main zoom_in">
          <div className="blog-img-section blog-img-section2">
            <p className="blog-date">
              10<span>MAR</span>
            </p>
          </div>
          <div>
            <h3 className="post-date">10 March 2025 | UI/UX Design</h3>
            <h4 className="steps">Building Beautiful UI with Tailwind CSS</h4>
            <h5 className="est">
              Tailwind CSS makes designing interfaces fast and efficient.
              Discover how to use utility classes effectively to create
              responsive, modern UIs.
            </h5>
            <div className="wrapper blog-btn">
              <a className="btn-hover" href="#blog-popup">
                Read More
                <svg
                  className="btn-arrow-right"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M21.5621 14.6665L14.4101 7.51452L16.2957 5.62891L26.6666 15.9999L16.2957 26.3707L14.4101 24.4851L21.5621 17.3332H5.33331V14.6665H21.5621Z"
                    fill="#0F141C"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="blog-main mb-0 zoom_in">
          <div className="blog-img-section blog-img-section3">
            <p className="blog-date">
              05<span>MAR</span>
            </p>
          </div>
          <div>
            <h3 className="post-date">05 March 2025 | Web Performance</h3>
            <h4 className="steps">
              Optimizing React Apps for Faster Performance
            </h4>
            <h5 className="est">
              Performance optimization is crucial for React applications. Learn
              strategies like lazy loading, memoization, and efficient state
              management.
            </h5>
            <div className="wrapper blog-btn">
              <a className="btn-hover" href="#blog-popup">
                Read More
                <svg
                  className="btn-arrow-right"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M21.5621 14.6665L14.4101 7.51452L16.2957 5.62891L26.6666 15.9999L16.2957 26.3707L14.4101 24.4851L21.5621 17.3332H5.33331V14.6665H21.5621Z"
                    fill="#0F141C"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Blogs End ===================================== --> */}
    </>
  );
};
export default Blog;
