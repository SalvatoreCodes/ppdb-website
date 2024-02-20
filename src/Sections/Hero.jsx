import React from "react";
import transition from "../assets/svg/hero-bottom-transition.svg";
import logo from "../assets/images/logo-sekolah.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero--content">
        <div className="hero--content--text">
          <img src={logo} alt="logo sekolah" />
          <h1>PPDB</h1>
          <p>SMKS KRISTEN 2 TOMOHON</p>
          <button>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSce2c2bH91E51cTcqR1cGdia-7-dT_UDfkcdrRGQA56OzN_bA/viewform?pli=1">
              REGISTRASI SEKARANG
            </a>
          </button>
        </div>
      </div>
      <div className="hero--bottom--transition">
        <img src={transition} alt="bottom transition" />
      </div>
    </div>
  );
}

export default Hero;
