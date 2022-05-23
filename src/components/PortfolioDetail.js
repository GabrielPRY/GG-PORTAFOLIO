import React from "react";
import "../css/portfolio.css";

export default function PortfolioDetail() {
  return (
    <div className="portfolio-detail-container">
      <figure>
        <img
          className="porfolio-img"
          src={require("../image/reactlogo.png")}
          alt="logo"
        ></img>
      </figure>
      <div className="porfolio-description-container">
        <a href="#">HG ELECTRICDAD</a>
        <p>Página de electricidad</p>
      </div>
    </div>
  );
}
