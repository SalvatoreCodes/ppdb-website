import React from "react";
import noProfilePicture from "../assets/images/blank-profile-picture.webp";

function Card() {
  return (
    <div className="card">
      <div className="card--image">
        <img src={noProfilePicture} alt="image" />
      </div>
      <div className="card--information"></div>
    </div>
  );
}

export default Card;
