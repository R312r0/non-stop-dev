import React from 'react';
import LeftSideBar from '../left-sidebar';
import './about-us.css';
import Footer from '../footer';
const AboutUs = () => {
    return (
        <>
        <div className='row about-us-row'>
            <div className='col-8 offset-2 d-flex justify-content-center align-items-center'>
                    <h1> Ми розробляємо </h1>
            </div>

        </div>
        <div className='row  mt-5'>
                <div className='col-6 offset-3 d-flex justify-content-center align-items-center header-about-us'>
                    <div className='col-4 d-flex justify-content-center align-items-center header-col'>
                        <h1> Web <br/>site </h1>
                    </div>
                    <div className='vl'></div>
                    
                    <div className='col-4 d-flex justify-content-center align-items-center header-col'>
                        <h1> Design </h1>
                    </div>
                    <div className='vl'></div>
                    <div className='col-4 d-flex justify-content-center align-items-center header-col'>
                        <h1> Bot </h1>
                    </div>
                </div>
    
        </div>
        <div className='row'>
                <div className='col-6 offset-3 d-flex justify-content-center'>
                    <div className='col-4 d-flex justify-content-center '>

                        <ul class="list-group">
                            <li class="list-group-item borderless">1. SPA (Single page application)</li>
                            <li class="list-group-item borderless">2. Landing page </li>
                            <li class="list-group-item borderless">3. Web store </li>
                            <li class="list-group-item borderless">4. News portal </li>
                            <li class="list-group-item borderless">5. Corporate site </li>
                            <li class="list-group-item borderless">6. SEO </li>
                        </ul>


                    </div>
                    <div className='vl down'></div>

                    <div className='col-4 d-flex justify-content-start '>
                        <ul className='list-group'> 
                            <li class="list-group-item borderless">1. Ux/Ui</li>
                            <li class="list-group-item borderless">2. Mobile adaptive</li>
                            <li class="list-group-item borderless">3. Native</li>
                        </ul>
         
                    </div>
                    <div className='vl down'></div>
                    <div className='col-4 d-flex justify-content-start'>
                        <ul class="list-group">
                            <li class="list-group-item borderless">1. Telegram bot</li>
                            <li class="list-group-item borderless">2. Viber bot </li>
                            <li class="list-group-item borderless">3. Parser</li>
                        </ul>
                    </div>
                </div>
    
        </div>
        <span className='inner-circle left'><i class="fas fa-arrow-left arrow-left"></i></span>
        <span className='inner-circle right'><i class="fas fa-arrow-right arrow-right"></i></span>

            
        <Footer displayContacts='list-group list-group-horizontal'/>
        </>  
    )
}

export default AboutUs;