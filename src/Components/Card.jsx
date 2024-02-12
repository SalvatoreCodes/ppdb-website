import React from "react";
import noProfilePicture from "../assets/images/blank-profile-picture.webp";

function Card(props) {
  const [isTruncated, setIsTruncated] = React.useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  React.useEffect(() => {}, []);

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
          {isTruncated ? (
            <>
              {props.information.slice(0, 225)}
              <span
                onClick={toggleTruncate}
                className="card--information--details--read--more"
              >
                Read more
              </span>
            </>
          ) : (
            <>
              {props.information}
              <span
                onClick={toggleTruncate}
                className="card--information--details--show--less"
              >
                {" "}
                Show less
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
