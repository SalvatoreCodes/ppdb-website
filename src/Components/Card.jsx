import React from "react";
import noProfilePicture from "../assets/images/blank-profile-picture.webp";

export const CardFullscreen = (props) => {
  return (
    <div className="card--fullscreen">
      <div className="card--fullscreen--container">
        <button
          className="card--fullscreen--close"
          onClick={props.setFullscreen}
        >
          X
        </button>
        <div className="card--fullscreen--image">
          <img src={noProfilePicture} alt="image" />
        </div>
        <div className="card--fullscreen--information">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export const Card = (props) => {
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
          <button onClick={props.setFullscreen}>Read More</button>
        </div>
      </div>
    </div>
  );
};
