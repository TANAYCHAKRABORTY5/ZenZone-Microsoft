import React from "react";

function Hero() {
  return (
    <section
      className="hero d-flex flex-column justify-content-center align-items-center"
      id="home"
    >
      {/* <div className="bg-overlay"></div> */}

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto col-12">
            <div className="hero-text mt-5 text-center">
              <h6
                data-aos="fade-up"
                data-aos-delay="300"
                style={{ color: "white" }}
              >
                A New way to Discover the art of inner harmony
              </h6>

              <h1
                className="text-white"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Upgrade your Mind and Body at ZenZone
              </h1>

              <a
                href="
                      https://docs.google.com/forms/d/e/1FAIpQLSdk5rKqbQsnP2UistHK6sgkvh8RFFq1SPRzFv_ggzl7oyBrYA/viewform?embedded=true"
                className="btn custom-btn mt-3 mr-3"
                id="setstarted"
                data-aos="fade-up"
                data-aos-delay="600"
                style={{ color: "white", background: "transparent" }}
              >
                Get started
              </a>

              <a
                href="#about"
                className="btn custom-btn bordered mt-3"
                data-aos="fade-up"
                data-aos-delay="700"
                id="learnmore"
                style={{ color: "white", borderRadius: "20px" }}
              >
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
