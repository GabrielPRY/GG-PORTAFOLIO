import React from "react";
import WorkDetail from "./WorkDetail";

export default function Work() {
  return (
    <article id="job">
      <div>
        <h2>Conocimientos</h2>
        <p>Tengo conocimientos en estas tecnologias</p>
      </div>
      <div>
        <WorkDetail />
        <WorkDetail />
        <WorkDetail />
        <WorkDetail />
      </div>
      <div>
        <p>Te interesan mis proyectos?</p>
        <a href="#portfolio">Ver Portafolio</a>
      </div>
    </article>
  );
}
