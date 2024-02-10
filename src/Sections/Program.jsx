import React from "react";
import Card from "../Components/Card";
import { programKeahlian } from "../data";

function Programs() {
  const Video = () => {
    return (
      <div className="programs--video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/aURfK9qBgmY?si=TwakJ4vi8paveyai"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    );
  };

  return (
    <div className="programs">
      <Video />
      <div className="programs--header">
        <p>Program keahlian kami</p>
        <div className="programs--header--underline"></div>
      </div>
      <div className="programs--container">
        {programKeahlian.map((data) => (
          <Card
            key={data.id}
            progLi={data.progLi}
            progLiFull={data.progLiFull}
            information={data.information}
            specialties={data.specialties}
          />
        ))}
      </div>
    </div>
  );
}

export default Programs;
