import React from 'react';
import "./payment.css";
import Money from '../../images/money.svg';
import Blik from '../../images/Blik.png';
import Visa from '../../images/Credit.png';
import Credit from '../../images/visa.png';
function Payment() {
  return (
          <section id="Payment">
                  <h3>Payment Options</h3>

                  <div className="Payment ">
                          <div className="cash">
                                  <img className="logo" alt='money' src={Money}></img>
                          </div>
                          <div className="blik">
                                  <img className="logo" alt="blik"src={Blik}></img>
                          </div>
                          <div className="card">
                                  <img className="logo" alt="visa"src={Visa}></img>
                          </div>
                          <div className="visa">
                                  <img className="logo" alt="credit" src={Credit}></img>
                          </div>
                  </div>
          </section>

  )
}

export default Payment