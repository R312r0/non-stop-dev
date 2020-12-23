import React from 'react';
import './left-sidebar.css'


const LeftSideBar = (props) => {


    return(
        <>
            <ul class={props.cssClass}>
                <li class="list-group-item border-0 mt-3"><button type='button' className='btn btn-dark btn-circle btn-circle-sm m-1'><i class="fab fa-facebook-f"></i></button></li>
                <li class="list-group-item border-0 mt-3"><button type='button' className='btn btn-dark btn-circle btn-circle-sm m-1'><i class="fab fa-instagram"></i></button></li>
                <li class="list-group-item border-0 mt-3"><button type='button' className='btn btn-dark btn-circle btn-circle-sm m-1'><i class="fab fa-linkedin-in"></i></button></li>
            </ul>
        </>
    )


}


export default LeftSideBar;