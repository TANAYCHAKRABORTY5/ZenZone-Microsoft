import React from "react";

function Contact() {
  return (
    <section class="contact section" id="contact">
      <div class="container">
        <div class="row">
          <div class="ml-auto col-lg-5 col-md-6 col-12">
            <h2
              class="mb-4 pb-2"
              data-aos="fade-up"
              data-aos-delay="200"
              style={{ color: "white", letterSpacing: "0.2px" }}
            >
              Feel free to ask anything
            </h2>

            <form
              action="#"
              method="post"
              class="contact-form webform"
              data-aos="fade-up"
              data-aos-delay="400"
              role="form"
            >
              <input type="text" class="form-control" name="cf-name" placeholder="Name" />

              <input type="email" class="form-control" name="cf-email" placeholder="Email" />

              <textarea
                class="form-control"
                rows="5"
                name="cf-message"
                placeholder="Message"
              ></textarea>

              <button type="submit" class="form-control" id="submit-button" name="submit">
                Send Message
              </button>
            </form>
          </div>

          <div class="col install">
            <h4 style={{ color: "white", letterSpacing: "0.2px" }}>Install App</h4>
            <p style={{ color: "white", letterSpacing: "0.2px" }}>From App Store or Google Play</p>
            <div class="row">
              <img src="img/appstore.png" alt="" style={{ width: "10%" }} />
              <img src="img/googleplay.png" alt="" style={{ width: "10%" }} />
            </div>
            <p style={{ color: "white", letterSpacing: "0.2px" }}>Secured Payment Gateways</p>
            <img src="img/card logo.png" alt="" style={{ width: "30%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
