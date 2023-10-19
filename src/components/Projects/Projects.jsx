import React from 'react';
import "./Project.css";
import Nobel from "../../images/main1.jpg";
import Tinder from "../../images/Counter.jpeg";
import Weather from "../../images/main3.jpg";
import Apple from "../../images/Hands.png";
import In from "../../images/countre4.jpg";
import Uber from "../../images/Canter.jpeg";


function projects() {

  return (
    <section className="services section" id="Projects">
      <h2 className="section__title">Photos</h2>

      <div className="services__container container grid">
{/* /* ============================3=================== */}
        <div className="project__content">
          <div >
               <img src={In} className='project__img' alt="in" />
          </div>

          
        </div>
        {/* ============================1======================= */}
        <div className="project__content">
          <div >
          <img src={Nobel} className='project__img' alt='Nobel'/>
          </div>


        </div>
        
        {/* /* ============================2===================  */}
        <div className="project__content">
          <div >
           < img src={Tinder} className='project__img' alt='Tinder'/>
          </div>

          

        </div>
        {/* /* ============================3=================== */}
        <div className="project__content">
          <div >
            <img src={Weather} className='project__img' alt='weather' />
          </div>

         
        </div>
         {/* /* ============================3=================== */}
        <div className="project__content">
          <div >
            <img src={Apple} className='project__img' alt="Apple" />
          </div>

         
        </div>
       
       {/* /* ============================3=================== */}
        <div className="project__content">
          <div >
            <img src={Uber} className='project__img' alt="Uber" />
          </div>

          
        </div>
      

      </div>



    </section>








  )
}

export default projects;

