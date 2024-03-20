import React from 'react'
import commercialImg1 from "../Images/commercialImg1.png";
import commercialImg2 from "../Images/commercialImg2.png";
import commercialImg3 from "../Images/commercialImg3.png";
import commercialImg4 from "../Images/commercialImg4.png";
import commercialImg5 from "../Images/commercialImg5.jpg";

function Commercial() {
    return (
        <div className='text-light mx-0' style={{ backgroundColor: 'black' }}>
            <div className='pWrapper fs-1 pt-5 pb-4'>
                <p className='pText text-center'>Commercial</p>
            </div>

            <div className="row align-items-start mx-3 mb-5">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <a href='https://www.youtube.com/watch?v=JlE3DKxs7Nk' target="blank">
                        <img src={commercialImg1} alt='Images' height="350px" width="100%" className='mb-3' />
                    </a>
                </div>
                <div className='col-md-6  p-5'>
                    <div className='sf1 pb-3'>
                        NEO's Studio January 17, 2023
                    </div>
                    <div className='sf2 pb-3 '>
                        LESSONS FOR 17-01-2023: APPLE IPAD PRO COMMERCIAL 2023 | SPEC AD
                    </div>
                    <div className='sf3'>
                        Crafting the iPad Pro commercial demanded precise execution and dynamic storytelling, showcasing its sleek design and versatile features. Collaboration, adaptability, and attention to detail were key in integrating the device seamlessly into diverse environments while embracing innovation.                    </div>
                </div>
            </div>

            <div className="row align-items-start mx-3 mb-5">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <a href='https://youtu.be/WhW8vAxQf4c' target="blank">
                        <img src={commercialImg2} alt='Images' height="350px" width="100%" className='mb-3' />
                    </a>
                </div>
                <div className='col-md-6  p-5'>
                    <div className='sf1 pb-3'>
                        NEO's Studio November 03, 2022
                    </div>
                    <div className='sf2 pb-3 '>
                        LESSONS FOR 03-11-2022: A CINEMATIC REVIEW VIDEO FOR A BRAND | BIOSASH
                    </div>
                    <div className='sf3'>
                        Filming BIOSASH taught me the strength of simplicity in storytelling. By prioritizing authenticity over elaborate setups, we conveyed the brand's essence more effectively, emphasizing genuine moments and reactions. This experience underscored the importance of authenticity in filmmaking, highlighting the beauty found in pure, heartfelt storytelling.                    </div>
                </div>
            </div>

            <div className="row align-items-start mx-3 mb-5">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <a href='https://youtu.be/iyL4OMW4c4Q' target="blank">
                        <img src={commercialImg3} alt='Images' height="350px" width="100%" className='mb-3' />
                    </a>
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

            <div className="row align-items-start mx-3 mb-5">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <a href='https://www.youtube.com/watch?v=JlE3DKxs7Nk' target="blank">
                        <img src={commercialImg4} alt='Images' height="350px" width="100%" className='mb-3' />
                    </a>
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

            <div className="row align-items-start mx-3 pb-5">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <a href='https://www.youtube.com/watch?v=B0BP-AVrls0&t=240s' target="blank">
                        <img src={commercialImg5} alt='Images' height="350px" width="100%" className='mb-3' />
                    </a>
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
