import React from 'react';
import "./Bookings.css";

function Bookings() {
  return (
                <section id="Bookings">
                        <div className="Bookings col-sm-4 col-lg-12 col-md-6">
                                <h3> Make your Reservation </h3>
                                <h4>Book a table now !!</h4>
                                <form method="post" action="/">
                                        <table className="box">

                                                <tr>
                                                        <td colspan="2"><input className="tb2 " type="text " id="fname" placeholder="Name"
                                                                name="fname" /></td>
                                                </tr>
                                                <tr>
                                                        <td colspan="2"> <input className="tb2 " type="email " name="Email" id="email " placeholder="Email" /></td>
                                                </tr>
                                                <tr>

                                                        <td colspan="2"><input className="tb2 " type="tel " id="Phone" placeholder="Phone "
                                                                name="phone" /></td>

                                                </tr>
                                                <tr>
                                                        <td colspan="1"><input className="tb5" type="number" id="quantity"
                                                                placeholder="No.people" name="people" min="1" max="5"/></td>

                                                        <td colspan="2"><input className="tb5" type="datetime-local" id="meeting-time" name="time"
                                                                value="2022-012-31 T19:30" min="currentdate"
                                                                max="2022-12-30T00:00"/> </td>

                                                </tr>
                                                <tr>
                                                        <td colspan="3"><a><button className="Reserve" type="submit">
                                                          Reserve</button> </a> </td>
                                        </tr>
                                </table>
                        </form>
                </div>
        </section >

  )
}

export default Bookings;