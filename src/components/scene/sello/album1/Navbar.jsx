import "./Navbar.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faYoutube,
  faCodepen,
  // faDumpsterFire
} from "@fortawesome/free-brands-svg-icons";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div
        id="navbar__logo-section"
        className="navbar__section navbar__section-logo"
      >
        <a href="#">
          <FontAwesomeIcon
            className="navbar__section__logo"
            icon={faDumpsterFire}
          />
        </a>
      </div>
      <div
        id="navbar__link-section"
        className="navbar__section navbar__section-links"
      >
       
      </div>
      <div
        id="navbar__social-section"
        className="navbar__section navbar__section-social"
      >
        <a href="#">
          <FontAwesomeIcon
            className="navbar__section__brands navbar__section__brands__twitter"
            icon={faTwitter}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            className="navbar__section__brands navbar__section__brands__youtube"
            icon={faYoutube}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            className="navbar__section__brands navbar__section__brands__codepen"
            icon={faCodepen}
          />
        </a>
      </div>
      <div
        id="navbar__contact-section"
        className="navbar__section navbar__section-contact"
      >
        <a href="">Living Stereo</a>
      </div>
    </nav>
  );
};

export default Navbar;
