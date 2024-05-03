import React from "react";

function Footer() {
  return (
    <footer className="section-p12" id="footer1">
      <div className="col">
        <img
          src="../healthfitnessimages/logos/1.png"
          alt=""
          className="logo1"
          style={{ width: "40%" }}
        />
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong>Lorem ipsum dolor sit amet consectetur..
        </p>
        <p>
          <strong>Phone: </strong> Nahi bataunga Ukhad le
        </p>
        <p>
          <strong>Hours: </strong> 10:00 -18:00,Mon-fri
        </p>
        <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Orders</a>
        <a href="#">Help</a>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src="../healthfitnessimages/appstore.png" alt="" style={{ width: "50%" }} />
          <img src="../healthfitnessimages/googleplay.png" alt="" style={{ width: "50%" }} />
        </div>
        <p>Secured Payment Gateways</p>
        <img src="../healthfitnessimages/card logo.png" alt="" style={{ width: "100%" }} />
      </div>
    </footer>
  );
}

export default Footer;
