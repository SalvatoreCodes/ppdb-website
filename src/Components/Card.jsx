import React from "react";
import noProfilePicture from "../assets/images/blank-profile-picture.webp";

function Card(props) {
  return (
    <div className="card" key={props.id}>
      <div className="card--image">
        <img src={noProfilePicture} alt="image" />
      </div>
      <div className="card--information">
        <div className="card--information--title">
          <h1>{props.progLi}</h1>
          <h6>{props.progLiFull}</h6>
        </div>
        <div className="card--information--details">
          <p>{props.information}</p>
          <a href="#">Read More</a>
        </div>
        <div className="card--information--specialties">
          <ul>
            {props.specialties.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
