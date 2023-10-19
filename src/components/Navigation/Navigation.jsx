import React, { useState } from 'react'; // Import useState hook
import "./Navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  // Use the useState hook to manage the visibility of the nav
  const [navVisible, setNavVisible] = useState(false);

  // Function to toggle the visibility of the nav
  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className="Navigation">
      <button className="nav-btn open-btn" style={{ cursor: 'pointer' }} onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`nav ${navVisible ? 'visible' : ''}`}> {/* Add 'visible' class conditionally */}
        <button className="nav-btn close-btn" onClick={toggleNav}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul className="list">
          <li><a href="#main">MENUE</a></li>
          <li><a href="#Location">LOCATION</a></li>
          <li><a href="#Timing">OPENING TIMES</a></li>
          <li><a href="#Payment">PAYMENT OPTIONS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;
