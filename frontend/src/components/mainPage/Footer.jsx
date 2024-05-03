import React from "react";
import { FaPhone } from "react-icons/fa6";

function Footer() {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="ml-auto col-lg-4 col-md-5">
            <p class="copyright-text">ZenZone</p>
          </div>

          <div class="d-flex justify-content-center mx-auto col-lg-5 col-md-7 col-12">
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                gap: "3px",
                letterSpacing: "0.2px",
              }}
            >
              <FaPhone />
              +917638987653
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
