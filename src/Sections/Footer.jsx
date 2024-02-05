import React from "react";
import transition from "../assets/svg/footer-top-transition.svg";

function Footer() {
  return (
    <div className="footer">
      <img src={transition} alt="top transition" />
      <div className="footer--information">
        <div className="footer--contacts">
          <p>email</p>
          <p className="indent">smkskr2@gmail.com</p>
          <p>No. Telp</p>
          <p className="indent">+62 (Bpk. Eko)</p>
          <div className="divider"></div>
        </div>
        <div className="footer--programs">
          <p>Programs</p>
          <ul>
            <li>
              <a href="#">PPLG</a>
            </li>
            <li>
              <a href="#">TJKT</a>
            </li>
            <li>
              <a href="#">LK</a>
            </li>
            <li>
              <a href="#">TF</a>
            </li>
            <li>
              <a href="#">P</a>
            </li>
            <li>
              <a href="#">MPLB</a>
            </li>
            <li>
              <a href="#">AKL</a>
            </li>
            <li>
              <a href="#">ULP</a>
            </li>
          </ul>
          <div className="divider"></div>
        </div>
        <div className="footer--developer">
          <p>
            Developed by <a>@benedict_goni</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
