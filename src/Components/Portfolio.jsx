import React from 'react'
import portfolioImg1 from '../Images/portfolioImg1.jpg'
import portfolioImg2 from '../Images/portfolioImg2.jpg'
import portfolioImg3 from '../Images/portfolioImg3.jpg'
import portfolioImg4 from '../Images/portfolioImg4.jpg'
import portfolioImg5 from '../Images/portfolioImg5.jpg'
import { Link } from 'react-router-dom';



function Portfolio() {
    return (
        <div className='text-light m-0 p-0' style={{ backgroundColor: 'black', overflow:'hidden' }}>
            <div className='pWrapper fs-1 pt-5'>
                <p className='pText text-center'>Portfolio</p>
            </div>
            <div className='row px-5 '>
                <div className='col-md-4 col-sm-12 portfolio-item mt-5'>
                    <div className="image-container">
                        <div className="top-text text-center fs-2 pb-3">
                            Commercial
                        </div>
                        <img src={portfolioImg1} alt='Images' style={{ width: '100%', height: '600px' }} />
                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                            <a href=' ' >
                                <button className="view-button ">
                                    <Link to='/commercial' className='text-decoration-none'>
                                        <span>View</span>
                                    </Link>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 portfolio-item mt-5'>
                    <div className="image-container">
                        <div className="top-text text-center fs-2 pb-3">
                            Short Films
                        </div>
                        <img src={portfolioImg2} alt='Images' style={{ width: '100%', height: '600px' }} />
                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                            <a href='/'>
                                <button className="view-button">
                                    <Link to='/shortfilm' className='text-decoration-none'>
                                        <span>View</span>
                                    </Link>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 portfolio-item mt-5'>
                    <div className="image-container">
                        <div className="top-text text-center fs-2 pb-3">
                            Shorts
                        </div>
                        <img src={portfolioImg3} alt='Images' style={{ width: '100%', height: '600px' }} />
                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                            <a href='/'>
                                <button className="view-button">
                                    <Link to='/shorts' className='text-decoration-none'>
                                        <span>View</span>
                                    </Link>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='row px-5 '>
                <div className='col-md-4 col-sm-12 portfolio-item mt-5'>
                    <div className="image-container">
                        <div className="top-text text-center fs-2 pb-3">
                            After Movie
                        </div>
                        <img src={portfolioImg4} alt='Images' style={{ width: '100%', height: '600px' }} />
                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                            <a href='/' >
                                <button className="view-button ">
                                    <Link to='/aftermovie' className='text-decoration-none'>
                                        <span>View</span>
                                    </Link>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 portfolio-item mt-5'>
                    <div className="image-container">
                        <div className="top-text text-center fs-2 pb-3">
                            Youtube Videos
                        </div>
                        <img src={portfolioImg5} alt='Images' style={{ width: '100%', height: '600px' }} />
                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                            <a href='/' >
                                <button className="view-button ">
                                    <Link to='/youtube' className='text-decoration-none'>
                                        <span>View</span>
                                    </Link>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
