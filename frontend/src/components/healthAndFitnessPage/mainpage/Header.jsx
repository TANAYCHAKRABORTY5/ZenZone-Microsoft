import React from "react";
import { FaShop } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Header() {
  return (
    <section id="headerhealth">
      <a href="#">
        <img
          src="../healthfitnessimages/logos/1.png"
          alt=""
          className="logo"
          style={{ position: "relative", top: "9px" }}
        />
      </a>

      <div>
        <ul id="navbarhealth">
          <li>
            <a className="active" href="index.html">
              Home
            </a>
          </li>
          <li>
            <Link to="/healthfitness/shop">Shop</Link>
          </li>
          {/* <!-- <li><a href="blog.html">Blog</a></li> --> */}
          <li>
            <a href="#footer1">Contact</a>
          </li>
          <li>
            <a href="/healthfitness/shop/cart">
              <FaShop />
            </a>
          </li>
        </ul>
        <img id="ham" src="../healthfitnessimages/hambergur.png" alt="" />
      </div>
    </section>
  );
}

export default Header;
