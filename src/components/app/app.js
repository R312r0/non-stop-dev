import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import AppHeader from '../app-header';
import LeftSideBar from '../left-sidebar';
import ContentBlock from '../content-block';
import ImageBlock from '../img-block';
import './app.css'
import Footer from '../footer';
import AboutUs from '../about-us';
import Projects from '../projects';
import Contacts from '../contacts';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
    return (
        <>
            <Router>
                <div className='app'>
                    <AppHeader/>
                    <Container fluid={true} >
                        <Row>
                            <Col xs='7' className='trans-col'>
                                <Row className='left-side-content'> 
                                    <Col xs='3'> 
                                        <LeftSideBar/>
                                    </Col>
                                    <Col xs='9'>
                                        <Route path='/'exact={true} component={ContentBlock}/>
                                        <Route path='/about-us' component={AboutUs}/>
                                        <Route path='/projects' component={Projects}/>
                                        <Route path='/contacts'component={Contacts}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs='5' className='image-block'>
                                <ImageBlock/>
                            </Col>

                        </Row>
                        <Footer/>
                    </Container>
                </div>
            </Router>
    
        </>
    )

}

export default App;