import React from 'react'
import amImg1 from '../Images/amImg1.jpg'
import amImg2 from '../Images/amImg2.jpg'
import amImg3 from '../Images/amImg3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


function Aftermovie() {
    return (
        <div className='text-light mx-0' style={{ backgroundColor: 'black' }}>
            <div className='pWrapper fs-1 pt-5 pb-4'>
                <p className='pText text-center'>Youtube Videos</p>
            </div>

            <div className="row align-items-start mx-3 mb-4">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <div className="image-container">
                        <a href='https://youtu.be/Ce_j54zs028' target="blank">
                            <img src={amImg1} alt='images' height="350px" width="100%" className='mb-3 border' />
                            <div className="overlay-watch d-flex flex-column align-items-center justify-content-center">
                                <button className="view-button ">
                                    <FontAwesomeIcon className='mx-3 shorts-icon' icon={faPlay} />
                                </button>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='col-md-6  p-5'>
                    <div className='sf1 pb-3'>
                        NEO's Studio December 21, 2023
                    </div>
                    <div className='sf2 pb-3 '>
                        LESSONS FOR 2024: INSIGHTS FROM A FILMMAKER'S JOURNEY
                    </div>
                    <div className='sf3'>
                        Hey there!Welcome to another post. Today, I want to take a moment to reflect on the valuable lessons I've learned throughout my filmmaking journey.
                    </div>
                </div>
            </div>

            <div className="row align-items-start mx-3 pb-4">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <div className="image-container">
                        <a href='https://www.youtube.com/watch?v=B5qnsjEQh8A' target="blank">
                            <img src={amImg2} alt='images' height="350px" width="100%" className='mb-3 border' />
                            <div className="overlay-watch d-flex flex-column align-items-center justify-content-center">
                                <button className="view-button ">
                                    <FontAwesomeIcon className='mx-3 shorts-icon' icon={faPlay} />
                                </button>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='col-md-6  p-5'>
                    <div className='sf1 pb-3'>
                        NEO's Studio  December 21, 2023
                    </div>
                    <div className='sf2 pb-3 '>
                        LESSONS FOR 2024: INSIGHTS FROM A FILMMAKER'S JOURNEY
                    </div>
                    <div className='sf3'>
                        Hey there!Welcome to another post. Today, I want to take a moment to reflect on the valuable lessons I've learned throughout my filmmaking journey.
                    </div>
                </div>
            </div>

            <div className="row align-items-start mx-3 pb-0">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <div className="image-container">
                        <a href='https://www.youtube.com/watch?v=I6u4dSs4eRQ' target="blank">
                            <img src={amImg3} alt='images' height="350px" width="100%" className='mb-3 border' />
                            <div className="overlay-watch d-flex flex-column align-items-center justify-content-center">
                                <button className="view-button ">
                                    <FontAwesomeIcon className='mx-3 shorts-icon' icon={faPlay} />
                                </button>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='col-md-6  p-5'>
                    <div className='sf1 pb-3'>
                        NEO's Studio December 21, 2023
                    </div>
                    <div className='sf2 pb-3 '>
                        LESSONS FOR 2024: INSIGHTS FROM A FILMMAKER'S JOURNEY
                    </div>
                    <div className='sf3'>
                        Hey there!Welcome to another post. Today, I want to take a moment to reflect on the valuable lessons I've learned throughout my filmmaking journey.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aftermovie
