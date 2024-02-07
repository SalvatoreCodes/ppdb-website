import React from "react";
import noProfilePicture from "../assets/images/blank-profile-picture.webp";

function Card(props) {
  const [size, setSize] = React.useState(true);
  let informationClass = "card--information--details--default--size";

  const clickHandler = () => {
    setSize(!size);

    if (size === true) {
      informationClass = "card--information--details--default--size";
    } else {
      informationClass = "card--information--details--full--size";
    }
  };

  React.useEffect(() => {}, [size, informationClass]);

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
          <p className={informationClass}>{props.information}</p>
          <a onClick={() => clickHandler()}>Read More</a>
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
