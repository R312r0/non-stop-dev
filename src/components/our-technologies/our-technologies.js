import React from 'react';
import '../our-technologies/our-tecnologies.css'
import figma from '../our-technologies/figma.svg'
import html_css from '../our-technologies/html_css.svg'
import asp_net from '../our-technologies/asp_net.svg'
import photoshop from '../our-technologies/photoshop.svg'
import react_js from '../our-technologies/react.svg'
import bootstrap from '../our-technologies/bootstrap.svg'
import django from '../our-technologies/django.svg'
const OurTechnologies = () => {

    return (
        <div className='container-fluid we-dev-container'> 
            <div className='row'>
                    <div className='col-12 d-flex justify-content-center'>
                        <h1 className='display-4'> Технології </h1>
                    </div>
                </div>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
                <div class="jumbotron technologies">
                    <div className='row'>
                        <div className='col-4 d-flex justify-content-center align-items-center'> 
                            <h1> Ux/Ui <br/>design</h1>
                            {/* <div class="vl"></div>                         */}
                        </div>
                     
                        <div className='col-4 d-flex justify-content-center align-items-center'>
                            <h1> Front <br/> end </h1>  
                            {/* <div class="vl"></div>                         */}
                        </div>                    
                        <div className='col-4 d-flex justify-content-center align-items-center'>
                            <h1> Back <br/> end </h1>                        
                        </div>
                                            
                    </div>
                    <hr/>
                    <div className='row'>
                        <div className='col-4 d-flex justify-content-center align-items-center'>
                            <img src={figma} alt='Figma'/>
                            {/* <div class="vl"></div>   */}
                        </div>
                        <div className='col-4 d-flex justify-content-center align-items-center'>
                            <img src={html_css} alt='Figma'/>
                            {/* <div class="vl"></div>   */}
                        </div>
                        <div className='col-4 d-flex justify-content-center align-items-center'>
                            <img src={asp_net} alt='Figma'/>
                        </div>
                    </div>
                    <div className='row'> 
                        <div className='col-4 d-flex justify-content-center align-items-center'> 
                            <h3>Figma</h3>
                            {/* <div class="vl"></div>   */}
                        </div>
                        <div className='col-4 d-flex justify-content-center align-items-center'>
                            <h3>HTML5/CSS3</h3>
                            {/* <div class="vl"></div>   */}
                        </div>
                        <div className='col-4 d-flex justify-content-center align-items-center'>
                            <h3>ASP.NET Core</h3>
                        </div>
                    </div>
                    <div className='row mt-5'> 
                        <div className='col-4 d-flex justify-content-center align-items-center'>
                            <img src={photoshop} alt='Figma' width='190px' height='190px'/>
                              
                        </div>
                        <div className='col-4 d-flex justify-content-center align-items-center'>
                            <div className='row'>
                                <div className='col-6 d-flex align-items-center'> 
                                    <img src={react_js} alt='Figma'  width='137px' height='128px'/>    
                                </div>
                                <div className='col-6 d-flex align-items-center'>
                                    <img src={bootstrap} alt='Figma'/>
                                </div>
                            </div>
                             
                        </div>
                        <div className='col-4 d-flex justify-content-center align-items-center'>
                            <img src={django} alt='Figma'/>
                        </div>
                    </div>
                    <div className='row'> 
                        <div className='col-4 d-flex justify-content-center align-items-center'> 
                            <h3>Photoshop</h3>
                            <div class="vl"></div>
                        </div>
                        <div className='col-4 d-flex justify-content-center align-items-center'>
                            <div className='row'>  
                                <div className='col-6 d-flex justify-content-center top' >
                                    <h3> React.js </h3>
                                </div>
                                <div className='col-6 d-flex justify-content-center top'>
                                    <h3>Bootstrap</h3>
                                </div>
                            </div>
                            <div class="vl"></div> 
                        </div>
                        <div className='col-4 d-flex justify-content-center align-items-center'>
                            <h3>Django/REST</h3>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )


}

export default OurTechnologies;