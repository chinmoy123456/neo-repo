import React from 'react'
import amImg1 from '../Images/amImg1.jpg'
import amImg2 from '../Images/amImg2.jpg'
import amImg3 from '../Images/amImg3.png'


function Aftermovie() {
    return (
        <div className='text-light mx-0' style={{ backgroundColor: 'black' }}>
            <div className='pWrapper fs-1 pt-5 pb-4'>
                <p className='pText text-center'>Youtube Videos</p>
            </div>

            <div className="row align-items-start mx-3 pb-5">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <a href='https://youtu.be/Ce_j54zs028' target="_blank">
                        <img src={amImg1} height="350px" width="100%" className='mb-3' />
                    </a>
                </div>
                <div className='col-md-6  p-5'>
                    <div className='sf1 pb-3'>
                        Nur Niaz  December 21, 2023
                    </div>
                    <div className='sf2 pb-3 '>
                        LESSONS FOR 2024: INSIGHTS FROM A FILMMAKER'S JOURNEY
                    </div>
                    <div className='sf3'>
                        Hey there!Welcome to another blog post. Today, I want to take a moment to reflect on the valuable lessons I've learned throughout my filmmaking journey.
                    </div>
                </div>
            </div>

            <div className="row align-items-start mx-3 pb-5">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <a href='https://www.youtube.com/watch?v=B5qnsjEQh8A' target="_blank">
                        <img src={amImg2} height="350px" width="100%" className='mb-3' />
                    </a>
                </div>
                <div className='col-md-6  p-5'>
                    <div className='sf1 pb-3'>
                        Nur Niaz  December 21, 2023
                    </div>
                    <div className='sf2 pb-3 '>
                        LESSONS FOR 2024: INSIGHTS FROM A FILMMAKER'S JOURNEY
                    </div>
                    <div className='sf3'>
                        Hey there!Welcome to another blog post. Today, I want to take a moment to reflect on the valuable lessons I've learned throughout my filmmaking journey.
                    </div>
                </div>
            </div>

            <div className="row align-items-start mx-3 pb-5">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <a href='https://www.youtube.com/watch?v=I6u4dSs4eRQ' target="_blank">
                        <img src={amImg3} height="350px" width="100%" className='mb-3' />
                    </a>
                </div>
                <div className='col-md-6  p-5'>
                    <div className='sf1 pb-3'>
                        Nur Niaz  December 21, 2023
                    </div>
                    <div className='sf2 pb-3 '>
                        LESSONS FOR 2024: INSIGHTS FROM A FILMMAKER'S JOURNEY
                    </div>
                    <div className='sf3'>
                        Hey there!Welcome to another blog post. Today, I want to take a moment to reflect on the valuable lessons I've learned throughout my filmmaking journey.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aftermovie
