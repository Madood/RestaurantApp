import React from 'react';
import "./row.css";
import Coffee from '../../images/coffee.png';
import Cup from '../../images/cup.png';
function Row() {
  return (
          <section id="row" className="row">

                  <div className="tab">
                          <div className="First">
                                <img className="First-image" alt="cup" src={Coffee}></img> 
                               
                          </div>


                          <div className="center">
                           <section className="info">
                                          <h1>DΛ•Leonardo</h1>
                                          <h3>• Caffee • Pub • Bar •</h3>
                                          <button className="Reservation"><a href="#Bookings" target="_blank"> Reservation</a></button>
                                  </section>  
                          </div>

                           <div className="third">
                                <img className="third-image" alt='cup' src={Cup}></img>

                          </div>  
                  </div>
          </section>
  )
}

export default Row;