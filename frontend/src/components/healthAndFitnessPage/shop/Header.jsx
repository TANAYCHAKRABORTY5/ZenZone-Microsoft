import React from "react";
import { FaShop } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <section id="headershopping">
        <a href="#">
          <img src="../healthfitnessimages/logos/1.png" alt="" style={{ width: "90px" }} />
        </a>

        <div>
          <ul id="nav_bar">
            <li>
              <a className="active" href="../index.html">
                Home
              </a>
            </li>
            <li>
              <a href="../index.html">Nutrition</a>
            </li>
            <li>
              <a href="#">Apparatus</a>
            </li>
            <li>
              <a href="../index.html">Suppliments</a>
            </li>
            <li>
              <a href="#">Appliances</a>
            </li>
            <li id="studio">
              <a href="#">Steroids</a>
            </li>
            <li>
              <Link to="/healthfitness/shop/cart">
                <FaShop />
              </Link>
            </li>
          </ul>
          <img id="ham" src="../healthfitnessimages/hambergur.png" alt="" />
        </div>
      </section>
    </header>
  );
}

export default Header;
