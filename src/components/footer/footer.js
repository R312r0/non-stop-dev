import React from 'react';
import LeftSideBar from '../left-sidebar';
import './footer.css';
const Footer = (props) => {
    return(
        <nav class="navbar fixed-bottom navbar-expand-sm navbar-light bg-white fixed-bottom foot-nav">

                <div className='col-4 d-flex justify-content-start align-items-center mt-3'>                
                    <h3>ⓒ 2021</h3>
                </div>
                <div className='col-4 d-flex justify-content-center align-items-center'>
                    <LeftSideBar cssClass={props.displayContacts}/>
                </div>
                <div className='col-4 d-flex justify-content-end align-items-center mt-3'>
                    <h3> NSS </h3>
                </div>
      </nav>
    )
}

export default Footer;