import React from "react";
import './riderDetail.css'

const TecnicoRider = () => {
  return (
    <div className="container_rider">
      <h2 className="titleRider">Tecnico Rider</h2>
      <div className="box_riders">
        <div className="step_rider">
          <h2>DJ Set</h2>
          <ul>
            <li>3 CDJ Nexus</li>
            <li>Nexus 2 DJM 900 CDJ 2000</li>
          </ul>
        </div>
        <div className="step_rider">
          <h2>Live Set</h2>
          <ul>
            <li>01 MacBook Pro 13</li>
            <li>01 Akai APC</li>
            <li>01 Minilogue</li>
            <li>01 Fender Mustang</li>
            <li>01 Fender Deluxe Amplificador</li>
            <li>01 Audient Interfaz</li>
            <li>01 Minilogue</li>
            <li>01 Lap Steel Gretsch</li>
            <li>Salida estéreo</li>
            <li>2 entradas</li>
            <li>Micrófono (Guitarra Eléctrica)</li>
          </ul>
        </div>
        <div className="step_rider">
          <h2>Contacto</h2>
          <ul>
            <li>elghettoproduccion@gmail.com</li>
            <span>
               Agent Management: <br />{" "}
              <strong>Lucio Burzomi, TEL: 2215674139 </strong>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TecnicoRider;
