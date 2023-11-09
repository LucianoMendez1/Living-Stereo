import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de React Router para la navegación
import './Backhome.css'; // Importa el archivo de estilos CSS

const Backhome = () => {
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-link"> {/* Utiliza Link para redirigir al usuario a la página de inicio */}
      
        Inicio
      </Link>
    </nav>
  );
};

export default Backhome;
