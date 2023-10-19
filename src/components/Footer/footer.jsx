import React from 'react';
import "./footer.css";
import FB from "../../images/facebook.ico";
import Insta from "../../images/instagram.ico";
import Git from "../../images/github.ico";


function Footer() {
  return (
          <footer id='footer'>
                  <img src={FB} className="ft-ico" alt="FB" />
                  <img src={Insta} className="ft-ico" alt="Insta" />
                  <img src={Git} className="ft-ico" alt="Git" />
                  <p>© Copyright 2022 Ruchul</p>
          </footer>
  )
}

export default Footer