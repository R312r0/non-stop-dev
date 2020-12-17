import React from 'react';
import LeftSideBar from '../left-sidebar';
import './footer.css';
const Footer = (props) => {
    return(
        <footer className='page-footer'>
            <div className='row'>
                <div className='col-3 d-flex align-items-center'>
                    <h3><i class="far fa-copyright"></i></h3>
                    <h3 className='pl-3'>2021</h3> 
                </div>
                <div className='col-6 d-flex justify-content-center align-items-center'> 
                    <LeftSideBar cssClass={props.displayContacts}/>
                </div>
                <div className='col-3 d-flex pr-5 justify-content-end align-items-center'>
                    <h3>NSS</h3>
                </div>    
            </div>    
        </footer>
    )
}

export default Footer;