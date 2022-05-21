import React from "react";
import "../css/main.css";

export default function Main() {
  return (
    <article id="#top" className="main-article">
      <div className="main-article-container">
        <img
          className="main-article-img"
          src={require("../image/photo.jpg")}
          alt="photo"
        />

        <div className="main-article-text-container">
          <h1>Gabriel Gauto Gonzales</h1>
          <p>
            Hola, este es un portafolio con todos los proyectos que he estado
            realizando.
          </p>
          <a className="button-blue" href="#job">
            Ver más
          </a>
        </div>
      </div>
    </article>
  );
}
