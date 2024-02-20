import React from "react";
import transition from "../assets/svg/location-top-transition.svg";

function Location() {
  return (
    <div className="location">
      <img src={transition} alt="top transition" />
      <div className="location--content">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.940517886305!2d124.8377092!3d1.3351295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32876ce860de1ff1%3A0x2f84957ec5fe9d3d!2sChristian%20Vocational%20School%202%20-%20Tomohon!5e0!3m2!1sen!2sid!4v1706067156910!5m2!1sen!2sid"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="location--content--description">
          <h1>Lokasi Sekolah</h1>
          <p>
            Jl. Kampus, Talete Dua, Kec. Tomohon Tengah, Kota Tomohon, Sulawesi
            Utara.
          </p>
          <h2>Jl. Kampus</h2>
          <h2>Talete Dua</h2>
          <h2>Kec. Tomohon Tengah</h2>
          <h2>Kota Tomohon</h2>
          <h2>Sulawesi Utara</h2>
        </div>
      </div>
    </div>
  );
}

export default Location;
