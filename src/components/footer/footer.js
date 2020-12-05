import React from 'react';
import './footer.css';
const Footer = () => {
    return(
        <footer className='page-footer'>
            <div className='row'>
                <div className='col-6 d-flex'>
                    <h3><i class="far fa-copyright"></i></h3>
                    <h3 className='pl-3'>2021</h3> 
                </div>
                <div className='col-6 d-flex pr-5 justify-content-end'>
                    <h3>NSS</h3>
                </div>    
            </div>    
        </footer>
    )
}

export default Footer;