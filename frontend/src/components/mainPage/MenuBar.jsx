import React from "react";
import { FaFacebook, FaTwitch, FaInstagram } from "react-icons/fa6";
function MenuBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href={"/"}>
          ZenZone
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link smoothScroll">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#class" className="nav-link smoothScroll">
                Classes
              </a>
            </li>

            <li className="nav-item">
              <a href="#schedule" className="nav-link smoothScroll">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link smoothScroll">
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link smoothScroll">
                Contact
              </a>
            </li>
          </ul>

          <ul className="social-icon ml-lg-3">
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitch />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;
