import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import AppHeader from '../app-header';
import LeftSideBar from '../left-sidebar';
import ContentBlock from '../content-block';
import ImageBlock from '../img-block';
import './app.css'
import Footer from '../footer';

const App = () => {
    return (
        <>
            
            <AppHeader/>
            <Container fluid={true} >
                <Row>
                    <Col xs='7' className='trans-col'>
                        <Row className='left-side-content'> 
                            <Col xs='3'> 
                                <LeftSideBar/>
                            </Col>
                            <Col xs='9'>
                                <ContentBlock/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs='5' className='image-block'>
                        <ImageBlock/>
                    </Col>

                </Row>
                <Footer/>
            </Container>

    
        </>
    )

}

export default App;