import React from "react";
import "../css/work.css";

export default function WorkDetail() {
  return (
    <div className="work-detail-container">
      <figure>
        <img className="work-img" src={require("../image/reactlogo.png")} />
      </figure>
      <div className="work-descripcion-container">
        <h3>React</h3>
        <p>Conocimientos en React, Hooks, Redux y Native</p>
      </div>
    </div>
  );
}
