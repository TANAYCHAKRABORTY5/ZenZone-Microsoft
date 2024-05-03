import React from "react";
import { Link } from "react-router-dom";

function Service() {
  return (
    <section class="schedule section" id="schedule">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12 text-center mb-5">
            <h2 data-aos="fade-up" style={{ color: "white" }}>
              Explore Our Services
            </h2>
          </div>

          <div
            class="col-lg-4 col-md-6 col-12 mb-5"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link to="./healthfitness">
              <div class="class-thumb">
                <img
                  src="img/national-cancer-institute-byGTytEGjBo-unsplash.jpg"
                  class="img-fluid"
                  alt="Class"
                />

                <div class="class-info">
                  <h3 class="mb-1">Pharama Services</h3>
                </div>
              </div>
            </Link>
          </div>

          <div
            class="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a href="https://mindwellness-dash.netlify.app/">
              <div class="class-thumb">
                <img
                  src="img/cole-allen-Lqv3cjyTMS8-unsplash.jpg"
                  class="img-fluid"
                  alt="Class"
                />

                <div class="class-info">
                  <h3 class="mb-1">Mind Wellness</h3>
                </div>
              </div>
            </a>
          </div>

          <div
            class="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a href="https://poki.com/">
              <div class="class-thumb">
                <img
                  src="images/class/cardio-class.jpg"
                  class="img-fluid"
                  alt="Class"
                />

                <div class="class-info">
                  <h3 class="mb-1">Games</h3>
                </div>
              </div>
            </a>
          </div>

          <div
            class="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12 blog-st"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Link to="./blog">
              <div class="class-thumb">
                <img src="img/bloga.jpg" class="img-fluid" alt="Class" />

                <div class="class-info">
                  <h3 class="mb-1">Talk Space</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
