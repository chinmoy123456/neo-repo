import React from 'react'
import blogImg1 from "../Images/blogImg1.jpg";
import blogImg2 from "../Images/blogImg2.jpg";
import blogImg3 from "../Images/blogImg3.jpg";
import blogImg4 from "../Images/blogImg4.jpg";

function ShortFilm() {
    return (
        <div className='text-light mx-0' style={{ backgroundColor: 'black' }}>
            <div className='pWrapper fs-1 pt-5 pb-4'>
                <p className='pText text-center'>Short Films</p>
            </div>

            <div className="row align-items-start mx-3 mb-5">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <a href='https://www.youtube.com/watch?v=JlE3DKxs7Nk' target="_blank">
                        <img src={blogImg1} height="350px" width="100%" className='mb-3' />
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

            <div className="row align-items-start mx-3 mb-5">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <a href='https://youtu.be/WhW8vAxQf4c' target="_blank">
                        <img src={blogImg2} height="350px" width="100%" className='mb-3' />
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

            <div className="row align-items-start mx-3 mb-5">
                <div class="col-md-6 col-sm-12 px-5 text-light">
                    <a href='https://youtu.be/iyL4OMW4c4Q' target="_blank">
                        <img src={blogImg3} height="350px" width="100%" className='mb-3' />
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
                    <a href='https://www.youtube.com/watch?v=B0BP-AVrls0&t=240s' target="_blank">
                        <img src={blogImg4} height="350px" width="100%" className='mb-3' />
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

export default ShortFilm
