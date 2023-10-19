import React, { useState } from 'react';
import "./Address.css";

function Address() {
  const [buttonVisible, setButtonVisible] = useState(true);

  const hideButton = () => {
    setButtonVisible(false);
    const mapElement = document.getElementById('Map');
    if (mapElement) {
      mapElement.style.backgroundImage = 'none';
    }
  };


  return (
    <section id="address">
      <h3>📌Fredry 5, Poznan, Poland</h3>

      <div id="Map" className="Map">
        {buttonVisible && (
          <button onClick={hideButton} className="view-button">
            View Map
          </button>
        )}

        <iframe
          className={`google ${buttonVisible ? 'show' : ''}`}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1918.6786366843721!2d16.91772188645823!3d52.409264519414386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b3613852407%3A0xb202821640c93a5!2sFredry%207%2C%2061-701%20Pozna%C5%84%2C%20Poland!5e0!3m2!1sen!2s!4v1657276563936!5m2!1sen!2s"
          width="95%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Address;
