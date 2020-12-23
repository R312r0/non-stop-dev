import React from 'react';
import '../we-develop/we-develop.css'

const WeDevelop = () => {



    return (
        <div className='we-develop'>
            <div className='containter-fluid p-0 we-dev-container'>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-center'>
                        <h1 className='display-4'> Ми розробляємо </h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-center'>
                        <div class="card">
                            <div class="card-header">
                                <div className='row'>
                                    <div className='col-4  d-flex justify-content-center align-items-center'>
                                        <h1 className='headers text-white'>Web <br/> site</h1> <br/>

                                    </div>
                                    <div className='col-4 center-col d-flex justify-content-center align-items-center'>
                                        <h1 className='headers text-white'>Design</h1>

                                    </div>
                                    <div className='col-4  d-flex justify-content-center align-items-center'>
                                        <h1 className='headers text-white'>Bot</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div className='row'> 
                                    <div className='col-4 p-0 d-flex justify-content-center align-items-top'>
                                    <ul class="list-group">
                                        <li class="list-group-item borderless"><p className='we-dev-list'>1. Single page application </p></li>
                                        <li class="list-group-item borderless"><p className='we-dev-list'>2. Landing page</p></li>
                                        <li class="list-group-item borderless"><p className='we-dev-list'>3. E-commerce</p></li>
                                        <li class="list-group-item borderless"><p className='we-dev-list'>4. News portal</p></li>
                                        <li class="list-group-item borderless"><p className='we-dev-list'>5. Corporate web-app</p></li>
                                        <li class="list-group-item borderless"><p className='we-dev-list'>6. SEO </p></li>
                                        <div class="vl"></div>
                                    </ul>
                                    </div>
                                    <div className='col-4 p-0 d-flex justify-content-center align-items-top'>
                                        <ul class="list-group">
                                        <li class="list-group-item borderless"><p className='we-dev-list'>1. Ux/Ui</p></li>
                                        <li class="list-group-item borderless"><p className='we-dev-list'>2. Mobile adaptive</p></li>
                                        <li class="list-group-item borderless"><p className='we-dev-list'>3. Native</p></li>
                                        </ul>
                                        <div class="vl"></div>
                                    </div>
                                    <div className='col-4 p-0 d-flex justify-content-center align-items-top'>
                                        <ul class="list-group">
                                        <li class="list-group-item borderless"><p className='we-dev-list'>1. Telegram bot</p></li>
                                        <li class="list-group-item borderless"><p className='we-dev-list'>2. Viber bot</p></li>
                                        <li class="list-group-item borderless"><p className='we-dev-list'>3. Parser</p></li>
                                        </ul>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WeDevelop;