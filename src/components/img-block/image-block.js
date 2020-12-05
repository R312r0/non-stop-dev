import React from 'react';
import img from './background.jpg';
import './image-block.css';
const ImageBlock = () => {

    return (
        <img src={img} alt='Image' className='img-responsive'width='100%' height='1024px'></img>
    )

}

const getWindowHeight = () => {

    return(window.innerHeight);
    
}
export default ImageBlock;