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
          <button>REGISTRASI SEKARANG</button>
        </div>
      </div>
      <div className="hero--bottom--transition">
        <img src={transition} alt="bottom transition" />
      </div>
    </div>
  );
}

export default Hero;
