import React from "react";
import "./Card.css";

function Card({ name, image, description, rating, type }) {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-info">
          <h1 className="card-name">{name}</h1>
          <h3 className="card-description">
            Description: &nbsp; {description}
          </h3>
          <h3 className="card-type">Type: {type}</h3>
          <h3 className="card-rating">Rating: {rating}</h3>
        </div>
        <div>
          <img src={image} alt={name} className="card-image" />
        </div>
      </div>
    </div>
  );
}

export default Card;
