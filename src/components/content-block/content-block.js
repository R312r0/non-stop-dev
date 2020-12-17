import React from 'react';
import { Container } from 'reactstrap';
import './content-block.css'
import img from './background.jpg'
import LeftSideBar from '../left-sidebar'
import Footer from '../footer' 
const ContentBlock = () => {
    return (
        <>
        <div className='row'>
            <div className='col-1 d-flex justify-content-center align-items-center'> 
            <LeftSideBar cssClass='list-group'/>
            
            </div>
            <div className='col-6 d-flex justify-content-center align-items-center  web-title'>
                <div className='greetings'>
                    <h1 className='align-middle'> Студія розробки <br/> веб сайтів для <br/> бізнесу в стилі <b>UX</b> </h1>
                    <br/>    
                    <button type='button' className='btn btn-lg btn-nss'><h4>Замовити проект</h4></button>
                    </div>
            </div>

            <div className='col-5 d-flex align-items-center img-block'> 
            
                <img src={img} className='img-fluid img-nss'/>

            </div>

        </div>
        <Footer displayContacts='d-none'/>
        </>
        

    )
}

export default ContentBlock;