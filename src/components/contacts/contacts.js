import React from 'react';
import Footer from '../footer';


const Contacts = () => {

    return(
        <>

            <h1> Contacts page </h1>
            <span className='inner-circle left'><i class="fas fa-arrow-left arrow-left"></i></span>
            <span className='inner-circle right'><i class="fas fa-arrow-right arrow-right"></i></span>
            <Footer displayContacts='list-group list-group-horizontal'/>

        </>
    )

}

export default Contacts;