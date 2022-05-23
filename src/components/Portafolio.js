import React from "react";
import PortfolioDetail from "./PortfolioDetail";
import "../css/portfolio.css";

export default function Portfolio() {
  return (
    <article id="portfolio" className="portfolio-article">
      <h2>Proyectos que he realizado recientemente</h2>
      <p>Puedes verlos a continuacion:</p>
      <div className="portfolio-details-container">
        <PortfolioDetail />
        <PortfolioDetail />
        <PortfolioDetail />
        <PortfolioDetail />
      </div>
      <div className="portfolio-footer-container">
        <p>Quieres ponerte en contacto?</p>
        <a className="button-brown" href="#contact">
          Contacto
        </a>
      </div>
    </article>
  );
}
