import React from 'react';
import img from './logo.png'
import './app-header.css'
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
                                <h4><a className="nav-link nav-link-ltr" href="#">Головна <span class="sr-only">(current)</span></a></h4>
                            </li>
                            <li className="nav-item pl-5">
                                <h4><a className="nav-link nav-link-ltr" href="#">Про нас</a></h4>
                            </li>
                            <li className="nav-item pl-5">
                                <h4><a className="nav-link nav-link-ltr" href="#">Проекти</a></h4>
                            </li>
                            <li className="nav-item pl-5">
                                <h4><a className="nav-link nav-link-ltr" href="#">Контакти</a></h4>
                            </li>
                        </ul>
                    </div>
                    <button type='button' className='btn'><h4> UA </h4></button>
        </nav>  
        </>
    )
}


export default AppHeader;