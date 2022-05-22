import React from "react";
import WorkDetail from "./WorkDetail";
import "../css/work.css";

export default function Work() {
  return (
    <article id="job" className="job-article">
      <div className="job-title-container">
        <h2>Conocimientos</h2>
        <p>Tengo conocimientos en estas tecnologias</p>
      </div>
      <div className="job-list-container">
        <WorkDetail />
        <WorkDetail />
        <WorkDetail />
        <WorkDetail />
      </div>
      <div className="job-footer-container">
        <p>Te interesan mis proyectos?</p>
        <a className="button-green" href="#portfolio">
          Ver Portafolio
        </a>
      </div>
    </article>
  );
}
