import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import AppHeader from '../app-header';
import LeftSideBar from '../left-sidebar';
import ContentBlock from '../content-block';
import './app.css'
import AboutUs from '../about-us';
import Projects from '../projects';
import Contacts from '../contacts';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
    return (
        <div id='main'>
            <Router>
                <div className='app'>
                    <AppHeader/>
                    <Container fluid={true} > 

                                    
                                        <Route path='/'exact={true} component={ContentBlock}/>
                                        <Route path='/about-us' component={AboutUs}/>
                                        <Route path='/projects' component={Projects}/>
                                        <Route path='/contacts'component={Contacts}/>
                                    
                    

                        

                    </Container>
                </div>
            </Router>
    
        </div>
    )

}

export default App;