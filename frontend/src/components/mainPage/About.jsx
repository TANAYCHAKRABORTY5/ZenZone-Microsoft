import React from "react";
import { FaFacebook, FaInstagram, FaTwitch } from "react-icons/fa6";
import { Link } from "react-router-dom";

function About() {
  return (
    <section class="about section" id="about">
      <div class="container">
        <div class="row">
          <div class="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
            <h2 class="mb-4" data-aos="fade-up" data-aos-delay="300">
              Hello, we are ZenZone
            </h2>

            <p data-aos="fade-up" data-aos-delay="400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta quia at, repellat
              non officia magnam distinctio tempora vero laborum, neque ipsa optio enim repellendus
              ullam quaerat consequatur deleniti! Similique fugit quisquam veniam facilis nesciunt
              labore corrupti sapiente nostrum modi odit delectus quia esse, unde vel dolores alias
              corporis aperiam?
            </p>
          </div>

          <div class="ml-lg-auto col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="700">
            <div class="team-thumb">
              <img src="images/team/team-image.jpg" class="img-fluid" alt="Trainer" />

              <div class="team-info d-flex flex-column">
                <h3>Shreya</h3>
                <span>Trainer</span>

                <ul class="social-icon mt-3">
                  <li>
                    <Link to="#">
                      <FaTwitch />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="fa fa-instagram">
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div class="team-thumb">
              <img src="images/team/team-image01.jpg" class="img-fluid" alt="Trainer" />

              <div class="team-info d-flex flex-column">
                <h3>Doctor</h3>
                <span>Dr.Avinsh</span>

                <ul class="social-icon mt-3">
                  <li>
                    <Link to="#" class="fa fa-instagram">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="fa fa-facebook">
                      <FaFacebook />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
