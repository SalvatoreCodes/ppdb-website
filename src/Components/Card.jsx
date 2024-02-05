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
        </div>
        <div className="card--information--details"></div>
        <div className="card--information--details"></div>
      </div>
    </div>
  );
}

export default Card;
