import React from 'react';
import "./css/style.css";
import Navigation from './components/Navigation/Navigation';
import Row from "./components/Row/row";
import Main from "./components/Main/Main.jsx";
import Bookings from './components/Bookings/Bookings';
import Projects from './components/Projects/Projects';
import Contact from './components/Contacts/contact';
import Payment from './components/Payment/Payment';
import Timming from './components/Timming/Timming';
import Address from './components/Address/Address';
import Footer from './components/Footer/footer';


function App() {
        return (
                <div>
                        <>
                                <Navigation />
                                <Row />
                                <Main />
                                <Bookings />
                                <Address />
                                <Contact />
                                <Payment />
                                <Projects />
                                <Timming />
                                <Footer />
                        </>
                </div>
        )
}

export default App;