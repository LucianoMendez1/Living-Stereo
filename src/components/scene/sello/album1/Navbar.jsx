// Importaciones
import "./Navbar.scss";
import React from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDumpsterFire } from '@fortawesome/free-solid-svg-icons';

// Componente Navbar
const Navbar = () => {
  return (
    <nav className="navbar">
      <div id="navbar-section" className="navbar__section navbar__section-logo">
        {/* Contenido del logo */}
      </div>

      <div id="navbar__link-section" className="navbar__section navbar__section-links">
        {/* Contenido de los enlaces */}
      </div>

      <div id="home" className="home">
        {/* Utilizando el componente Link de react-router-dom */}
        <Link to="/" className="home">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>

      <div id="navbar__contact-section" className="navbar__section navbar__section-contact">
        <span>Living Stereo</span>
      </div>
    </nav>
  );
};

export default Navbar;
