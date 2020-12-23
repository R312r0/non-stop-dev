import React, { Component } from 'react';
import LeftSideBar from '../left-sidebar';
import './about-us.css';
import WeDevelop from '../we-develop';
import OurTechnologies from '../our-technologies';
import Footer from '../footer';


export default class AboutUs extends Component {

    constructor(props){
        super(props)
        this.state = {
            main_page : true
        }
        this.onNextPage = this.onNextPage.bind(this)
    }


    onNextPage() {
        this.setState(({main_page}) => ({
            main_page: !main_page
        }))
    }


    render() {


        const {main_page} = this.state;
        let element = ""
        if (main_page == true){
            element = <WeDevelop/>
            
        }
        if (main_page == false) {
            element = <OurTechnologies/>
        }

        return (
            <>
            <div className='row about-us'>
                <div className='col-1 d-flex align-items-center justify-content-end'>
                    <div className='row'>
                    </div>
                </div>

                <div className='col-10 d-flex justify-content-center'>
                    {element}
                </div>
                <div className='col-1  d-flex align-items-center '>
                </div>
            </div>
            <button className='btn btn-outline-dark left' onClick={this.onNextPage}><i class="fas fa-arrow-left arrow-left"></i></button>
            <button className='btn btn-outline-dark right' onClick={this.onNextPage}><i class="fas fa-arrow-right arrow-right"></i></button>
            <Footer displayContacts='list-group list-group-horizontal'/>
            </>
        )


    }


}



