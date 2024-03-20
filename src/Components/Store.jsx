import React from 'react'
// import { useState } from 'react'
import portfolioImg1 from '../Images/portfolioImg1.jpg'
import storeImg2 from '../Images/storeImg2.jpg'
import storeImg3 from '../Images/storeImg3.jpg'
// import Booking from './Booking'
import { Link } from 'react-router-dom'

const Store = () => {
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
                            <img src={portfolioImg1} alt='Images' className='rounded-2' style={{ width: '100%', height: '450px' }} />
                            <div className="top-text text-center fs-3 pt-3 pb-4">
                                CONTACT US
                                <br />
                                <Link to='/contact'>
                                    <button type="button" className='btn btn-dark rounded-3'>
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
                            <img src={storeImg2} alt='Images' className='rounded-2' style={{ width: '100%', height: '450px' }} />
                            <div className="top-text text-center fs-3 pt-3 pb-4">
                                CONTACT US
                                <br />
                                <Link to='/contact'>
                                    <button type="button" className='btn btn-dark rounded-3'>
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
                            <img src={storeImg3} alt='Images' className='rounded-2' style={{ width: '100%', height: '450px' }} />
                            <div className="top-text text-center fs-3 pt-3 pb-4">
                                CONTACT US
                                <br />
                                <Link to='/contact'>
                                    <button type="button" className='btn btn-dark rounded-3'>
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
