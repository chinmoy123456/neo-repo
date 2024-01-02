import React from 'react'
import ShortsImg1 from "../Images/ShortsImg1.jpg";
import ShortsImg2 from "../Images/ShortsImg2.jpg";
import ShortsImg3 from "../Images/ShortsImg3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function Shorts() {
    return (
        <div className='text-light mx-0' style={{ backgroundColor: 'black' }}>
            <div className='pWrapper fs-1 pt-5 pb-4'>
                <p className='pText text-center'>Shorts</p>
            </div>

            <div className='row px-5'>
                <div className='col-md-4 col-sm-12 portfolio-item'>
                    <div className="image-container">
                        <div className='pb-4'>
                            <img src={ShortsImg1} style={{ width: '100%', height: '600px' }} />
                            <div className="overlay-shorts d-flex flex-column align-items-center justify-content-center">
                                <a href='https://www.instagram.com/reel/CivaDSOAWji/?utm_source=ig_web_copy_link' target='blank'>
                                    <button className="view-button">
                                        <FontAwesomeIcon className='mx-3 shorts-icon' icon={faPlay} />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="shorts-text text-center pb-3">
                            Jayanta Hazarika X Van gogh X DALL E 2
                        </div>
                    </div>
                </div>

                <div className='col-md-4 col-sm-12 portfolio-item'>
                    <div className="image-container">
                        <div className='pb-4'>
                            <img src={ShortsImg2} style={{ width: '100%', height: '600px' }} />
                            <div className="overlay-shorts d-flex flex-column align-items-center justify-content-center">
                                <a href='https://www.instagram.com/reel/Cfrgroigd0o/?utm_source=ig_web_copy_link' target='blank'>
                                    <button className="view-button">
                                        <FontAwesomeIcon className='mx-3 shorts-icon' icon={faPlay} />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="shorts-text text-center pb-3">
                            Shillong reel
                        </div>
                    </div>
                </div>

                <div className='col-md-4 col-sm-12 portfolio-item'>
                    <div className="image-container">
                        <div className='pb-4'>
                            <img src={ShortsImg3} style={{ width: '100%', height: '600px' }} />
                            <div className="overlay-shorts d-flex flex-column align-items-center justify-content-center">
                                <a href='https://www.instagram.com/reel/CSEPMiEDSX_/?utm_source=ig_web_copy_link' target='blank'>
                                    <button className="view-button">
                                        <FontAwesomeIcon className='mx-3 shorts-icon' icon={faPlay} />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="shorts-text text-center pb-3">
                            Reel vlog
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Shorts
