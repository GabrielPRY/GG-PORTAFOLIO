import React from "react";
import PortfolioDetail from "./PortfolioDetail";

export default function Portfolio() {
  return (
    <article id="portfolio">
      <h2>Proyectos que he realizado recientemente</h2>
      <p>Puedes verlos a continuacion:</p>
      <div>
        <PortfolioDetail />
        <PortfolioDetail />
        <PortfolioDetail />
        <PortfolioDetail />
      </div>
      <p>Quieres ponerte en contacto?</p>
      <a href="#contact">Contacto</a>
    </article>
  );
}
