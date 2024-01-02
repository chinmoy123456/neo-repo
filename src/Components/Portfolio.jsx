import React from 'react'
import portfolioImg1 from '../Images/portfolioImg1.jpg'
import portfolioImg2 from '../Images/portfolioImg2.jpg'
import portfolioImg3 from '../Images/portfolioImg3.jpg'



function Portfolio() {
    return (
        <div className='text-light' style={{ backgroundColor: 'black' }}>
            <div className='pWrapper fs-1 pt-5 pb-4'>
                <p className='pText text-center'>Portfolio</p>
            </div>
            <div className='row px-5'>
                <div className='col-md-4 col-sm-12 portfolio-item'>
                    <div className="image-container">
                        <div className="top-text text-center fs-2 pb-3">
                            Commercial
                        </div>
                        <img src={portfolioImg1} style={{ width: '100%', height: '600px' }} />
                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                            <a href='../Components/Commercial.jsx' target='blank'><button className="view-button"><span>View</span></button></a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 portfolio-item'>
                    <div className="image-container">
                        <div className="top-text text-center fs-2 pb-3">
                            Short Films
                        </div>
                        <img src={portfolioImg2} style={{ width: '100%', height: '600px' }} />
                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                            <a href=''><button className="view-button"><span>View</span></button></a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 portfolio-item'>
                    <div className="image-container">
                        <div className="top-text text-center fs-2 pb-3">
                            Shorts
                        </div>
                        <img src={portfolioImg3} style={{ width: '100%', height: '600px' }} />
                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                            <a href=''><button className="view-button"><span>View</span></button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio
