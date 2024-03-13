import React from "react";
import "./Galeria.css";

function Galeria({ image, breedName }) {
  return (
    <div className="card-container">
      <div className="card-imagens">
        <div className="img-card">
          <img src={image} alt={breedName} />
        </div>
      </div>
    </div>
  );
}

export default Galeria;
