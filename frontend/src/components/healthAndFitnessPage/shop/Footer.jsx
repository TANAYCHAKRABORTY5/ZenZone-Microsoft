import React from "react";

function Footer() {
  return (
    <footer class="section-p12">
      <div class="col">
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong>Lorem ipsum dolor sit amet consectetur..
        </p>
        <p>
          <strong>Phone: </strong> Nahi bataunga Ukhad le
        </p>
        <p>
          {" "}
          <strong>Hours: </strong> 10:00 -18:00,Mon-fri
        </p>
        <div class="follow">
          <h4>Follow us</h4>
          <div class="icon">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div class="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>
      <div class="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Orders</a>
        <a href="#">Help</a>
      </div>

      <div class="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div class="row">
          <img src="../images/appstore.png" alt="" class="logo" />
          <img src=" ../images/googleplay.png" alt="" class="logo" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src=" ../images/card logo.png" alt="" class="logo" />
      </div>
    </footer>
  );
}

export default Footer;
