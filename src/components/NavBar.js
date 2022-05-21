import React from "react";
import "../css/navbar.css";
export default function Nav() {
  return (
    <nav className="Nav-bar">
      <ul className="Nav-bar-ul">
        <li className="Nav-bar-ul-li">
          <a href="#top">Inicio</a>
        </li>
        <li className="Nav-bar-ul-li">
          <a href="#job">Trabajo</a>
        </li>
        <li className="Nav-bar-ul-li">
          <a href="#portfolio">Portafolio</a>
        </li>
        <li className="Nav-bar-ul-li">
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
