import React from 'react'
import commercialImg1 from "../Images/commercialImg1.png";
import commercialImg2 from "../Images/commercialImg2.png";
import commercialImg3 from "../Images/commercialImg3.png";
import commercialImg4 from "../Images/commercialImg4.png";
import commercialImg5 from "../Images/commercialImg5.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function Commercial() {
    return (
        <div className='text-light mx-0' style={{ backgroundColor: 'black' }}>
            <div className='pWrapper fs-1 pt-5 pb-4'>
                <p className='pText text-center'>Commercial</p>
            </div>

            <div className="row align-items-start mx-3 mb-4">
                <div class="col-md-6 col-sm-12 px-5 text-light py-4">
                    <div className="image-container">
                        <a href='https://www.youtube.com/watch?v=JlE3DKxs7Nk' target="blank">
                            <img src={commercialImg1} alt='Images' height="350px" width="100%" className='mb-3 border' />
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
                        NEO's Studio January 17, 2023
                    </div>
                    <div className='sf2 pb-3 '>
                        LESSONS FOR 17-01-2023: APPLE IPAD PRO COMMERCIAL 2023 | SPEC AD
                    </div>
                    <div className='sf3'>
                        Crafting the iPad Pro commercial demanded precise execution and dynamic storytelling, showcasing its sleek design and versatile features. Collaboration, adaptability, and attention to detail were key in integrating the device seamlessly into diverse environments while embracing innovation.
                    </div>
                </div>
            </div>

            <div className="row align-items-start mx-3 mb-4">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <div className='image-container'>
                        <img src={commercialImg2} alt='Images' height="350px" width="100%" className='mb-3 border' />
                        <a href='https://youtu.be/WhW8vAxQf4c' target="blank">
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
                        NEO's Studio November 03, 2022
                    </div>
                    <div className='sf2 pb-3 '>
                        LESSONS FOR 03-11-2022: A CINEMATIC REVIEW VIDEO FOR A BRAND | BIOSASH
                    </div>
                    <div className='sf3'>
                        Filming BIOSASH taught me the strength of simplicity in storytelling. By prioritizing authenticity over elaborate setups, we conveyed the brand's essence more effectively, emphasizing genuine moments and reactions. This experience underscored the importance of authenticity in filmmaking, highlighting the beauty found in pure, heartfelt storytelling.
                    </div>
                </div>
            </div>

            <div className="row align-items-start mx-3 mb-4">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <div className="image-container">
                        <a href='https://youtu.be/iyL4OMW4c4Q' target="blank">
                            <img src={commercialImg3} alt='Images' height="350px" width="100%" className='mb-3 border' />
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
                        NEO's Studio November 03, 2022
                    </div>
                    <div className='sf2 pb-3 '>
                        LESSONS FOR 03-11-2022: MAGGI - A SPEC AD
                    </div>
                    <div className='sf3'>
                        Filming the MAGGI spec ad taught me the power of capturing authentic moments that resonate with viewers. By focusing on sensory experiences like the aroma and sounds of cooking, we created a genuine connection that evoked emotions and memories. This reinforced the importance of storytelling in ads, emphasizing the impact of small details on the overall atmosphere.
                    </div>
                </div>
            </div>

            <div className="row align-items-start mx-3 mb-4">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <div className="image-container">
                        <a href='https://www.youtube.com/watch?v=JlE3DKxs7Nk' target="blank">
                            <img src={commercialImg4} alt='Images' height="350px" width="100%" className='mb-3 border' />
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
                        NEO's Studio July 27, 2020
                    </div>
                    <div className='sf2 pb-3 '>
                        LESSONS FOR 27-07-2020: When life gives you lemons, make lemonade | Daniel Schiffer style
                    </div>
                    <div className='sf3'>
                        "Transforming life's lemons into cinematic lemonade, this b-roll, inspired by Daniel Schiffer, captures resilience and creativity. Dynamic shots and captivating edits showcase the journey from challenge to innovation, reminding viewers of the sweetness found in adversity."
                    </div>
                </div>
            </div>

            <div className="row align-items-start mx-3 pb-4">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <div className="image-container">
                        <a href='https://www.youtube.com/watch?v=B0BP-AVrls0&t=240s' target="blank">
                            <img src={commercialImg5} alt='Images' height="350px" width="100%" className='mb-3 border' />
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
                        Hey there! Welcome to another post. Today, I want to take a moment to reflect on the valuable lessons I've learned throughout my filmmaking journey.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commercial
