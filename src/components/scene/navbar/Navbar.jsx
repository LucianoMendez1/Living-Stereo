import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const NavBar = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="navbar">
      <div className="nav-item" onClick={handleGoHome}>
        <div className="icon-container">
          <FontAwesomeIcon icon={faHome} className="home-icon" />
        </div>
      </div>
      {/* Otros elementos de la barra de navegación */}
    </div>
  );
};

export default NavBar;
