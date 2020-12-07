import React from 'react';
import img from './logo.png'
import './app-header.css'
import {Link} from 'react-router-dom';
const AppHeader = () => {
    return (
        <>
          <nav className="navbar mynavbar navbar-expand-lg navbar-light fixed-top">
                    <a className="navbar-brand" href="#">
                        <img src={img} alt='logo'></img>
                    </a>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active pl-5">
                                <h4><Link to='/' className='nav-link nav-link-ltr'>Головна</Link></h4>
                            </li>
                            <li className="nav-item pl-5">
                            <h4><Link to='/about-us' className='nav-link nav-link-ltr'>Про нас</Link></h4>
                            </li>
                            <li className="nav-item pl-5">
                                <h4><Link to='/projects' className='nav-link nav-link-ltr' >Проекти</Link></h4>
                            </li>
                            <li className="nav-item pl-5">
                                <h4><Link to='/contacts' className='nav-link nav-link-ltr'>Контакти</Link></h4>
                            </li>
                        </ul>
                    </div>
                    <button type='button' className='btn'><h4> UA </h4></button>
        </nav>  
        </>
    )
}


export default AppHeader;