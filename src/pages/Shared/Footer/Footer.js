import React from "react";
import "./Footer.css";
import Facebook from "./footer-img/facebook.png";
import Github from "./footer-img/github.png";
import Google from "./footer-img/google2.png";


const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer-body">
      <hr />
      <footer className="footer-css">
        <div>
          <small>copyright Ⓒ {year}   </small>
        </div>
        <div>
            <img className="footer-logo-img" src={Facebook} alt="Facebook logo " />
            <img className="footer-logo-img" src={Github} alt="Github logo" />
            <img className="footer-logo-img" src={Google} alt="Google logo" />
            
        </div>
      </footer>
    </div>
  );
};

export default Footer;