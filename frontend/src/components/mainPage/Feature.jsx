import React from "react";
import { Link } from "react-router-dom";

function Feature() {
  return (
    <section className="feature" id="feature">
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
            <h2 className="mb-3 text-white" data-aos="fade-up">
              New to ZenZone
            </h2>

            <h6 className="mb-4 text-white" data-aos="fade-up">
              We deliver a journey where wellness begins in the mind
            </h6>

            <Link
              to="/"
              className="btn custom-btn bg-color mt-3"
              data-aos="fade-up"
              data-aos-delay="200"
              data-toggle="modal"
              data-target="#membershipForm"
            >
              Join Us Today{" "}
            </Link>
          </div>

          <div
            className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12 img-mind"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src="img/mind.png" width={150} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
