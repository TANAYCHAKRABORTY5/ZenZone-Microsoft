import React from "react";

function MobileNav() {
  return (
    <section class="mobile-nav">
      <ul id="m-navbar">
        <li>
          <a class="active" href="index.html">
            Home
          </a>
        </li>
        <li>
          <a href="./insidewala/shop.html">Shop</a>
        </li>

        <li>
          <a href="about.hyml">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li>
          <a href="cartt/cart.html">
            <i class="fa fa-shopping-cart"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default MobileNav;
