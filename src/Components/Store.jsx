import React from 'react'
// import { useState } from 'react'
import portfolioImg1 from '../Images/portfolioImg1.jpg'
import storeImg2 from '../Images/storeImg2.jpg'
import storeImg3 from '../Images/storeImg3.jpg'
// import Booking from './Booking'
import { Link } from 'react-router-dom'

const Store=()=> {
    const handleService = (serviceName) => {
        // alert(`Booking for ${serviceName} clicked!`);
        // You can add logic for handling the booking for the specific service
      };

    return (
        <div className='text-light' style={{ backgroundColor: 'black' }}>
            <div className='pWrapper fs-3 pt-5 pb-5'>
                <p className='pText text-center'>Book a Session</p>
            </div>
            <div className='row px-4'>
                <div className='col-md-4 col-sm-12 pb-2 portfolio-item'>
                    <div className='card px-1 '>
                        <div className="image-container">
                            <div className="top-text text-center fs-3 pt-3 pb-4">
                                Commercial Shoot
                            </div>
                            <img className='rounded-2' src={portfolioImg1} style={{ width: '100%', height: '450px' }} />
                            <div className="top-text text-center fs-3 pt-3 pb-4">
                                CONTACT US
                                <br/>
                                <Link to='/contact'>
                                    <button type="button" onClick={() => handleService('Commercial Shoot')} className='btn btn-dark rounded-3'>
                                        Book Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 pb-2 portfolio-item'>
                    <div className='card px-1'>
                        <div className="image-container">
                            <div className="top-text text-center fs-3 pt-3 pb-4">
                                Photography
                            </div>
                            <img className='rounded-2' src={storeImg2} style={{ width: '100%', height: '450px' }} />
                            <div className="top-text text-center fs-3 pt-3 pb-4">
                                CONTACT US
                                <br/>
                                <Link to='/contact'>
                                    <button type="button" onClick={() => handleService('Photography')} className='btn btn-dark rounded-3'>
                                        Book Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 pb-2 portfolio-item'>
                    <div className='card px-1'>
                        <div className="image-container">
                            <div className="top-text text-center fs-3 pt-3 pb-4">
                                Videography
                            </div>
                            <img className='rounded-2' src={storeImg3} style={{ width: '100%', height: '450px' }} />
                            <div className="top-text text-center fs-3 pt-3 pb-4">
                                CONTACT US
                                <br/>
                                <Link to='/contact'>
                                    <button type="button" onClick={() => handleService('Videography')} className='btn btn-dark rounded-3'>
                                        Book Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Store
