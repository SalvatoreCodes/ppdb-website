import React from "react";
import { programKeahlian } from "../data";
import { Card, CardFullscreen } from "../Components/Card";

function Programs() {
  const [fullscreen, setFullscreen] = React.useState(false);

  const fullscreenToggle = () => {
    setFullscreen(!fullscreen);
  };

  React.useEffect(() => {}, [fullscreen]);

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
            setFullscreen={fullscreenToggle}
          />
        ))}
      </div>
      {fullscreen ? <CardFullscreen setFullscreen={fullscreenToggle} /> : <></>}
    </div>
  );
}

export default Programs;
