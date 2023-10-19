import React from 'react';
import "./Timming.css";

function Timming() {
  return (
          <section id="Timming ">
                  <div className="Timming col-lg-12 col-md-6 col-sm-4">
                          <h3>Opening Time</h3>
                          <table className="box">
                                  <tr>
                                          <td className="Days">SUNDAY</td>
                                          <td className="Time">10AM-06PM </td>
                                  </tr>
                                  <tr>
                                          <td className="Days">MONDAY</td>
                                          <td className="Time">10AM-10PM </td>
                                  </tr>
                                  <tr>
                                          <td className="Days">TUESDAY</td>
                                          <td className="Time">10AM-10PM </td>
                                  </tr>
                                  <tr>
                                          <td className="Days">WEDNESDAY</td>
                                          <td className="Time">10AM-10PM </td>
                                  </tr>
                                  <tr>
                                          <td className="Days">THURSDAY</td>
                                          <td className="Time">10AM-10PM </td>
                                  </tr>
                                  <tr>
                                          <td className="Days">FRIDAY</td>
                                          <td className="Time">10AM-10PM </td>
                                  </tr>
                                  <tr>
                                          <td className="Days">SATURDAY</td>
                                          <td className="Time">11AM-09PM </td>
                                  </tr>
                          </table>
                  </div>
          </section>

  )
}

export default Timming;