import React from 'react';
import { Container } from 'reactstrap';
import './content-block.css'

const ContentBlock = () => {
    return (
        <>
            <h1> Студія розробки <br/> веб сайтів для <br/> бізнесу в стилі <b>UX</b> </h1>
            <br/>
            <button type='button' className='btn btn-lg btn-nss mt-3'><h4>Замовити проект</h4></button>

        </>
    )
}

export default ContentBlock;