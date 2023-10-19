import React from 'react';
import "./main.css";

function Main() {
        return (

                <section id="main">

                        <div className="main col-sm-4">
                                <p> Walentynki tuż tuż! ❤❤❤
                                        W DV zaczynamy już jutro, aż do wtorku!<br />
                                        Zorganizowaliśmy dla Was coś specjalnego: Caaaaałe menu walentynkowe!
                                        Zakochańce, nie macie jeszcze planow?<br />
                                        To dobrze się składa, wciąż przyjmujemy rezerwacje
                                </p>
                                <hr />
                                <p>Dobrze położona kafejka z bogatą ofertą napojów
                                        <br />Zaloguj się do naszej bezpłatnej sieci Wi-Fi i pozostań w kontakcie z przyjaciółmi.
                                </p>
                                <hr />

                                <br />
                                <h4> Our Menu</h4>
                                <div className='Menuebtn'>
                                <button id="menue" className="Menue"><a href="/" target="_blank"> Menue ⬇</a></button>
                                <button className="Menue"><a href="#bookings" target="_blank"> Reservation</a></button>
                                </div>
                                        <br />

                        </div>
                </section >
        )
}

export default Main;