import React from 'react'
import blogImg1 from "../Images/blogImg1.jpg";
import blogImg2 from "../Images/blogImg2.jpg";
import blogImg3 from "../Images/blogImg3.jpg";
import blogImg4 from "../Images/blogImg4.jpg";
import blogImg8 from "../Images/blogImg8.png";
import blogImg9 from "../Images/blogImg9.png";
import blogImg10 from "../Images/blogImg10.png";
import blogImg12 from "../Images/blogImg12.jpg";




function Blog() {
    return (
        <div>
            <div className='mx-0' style={{ backgroundColor: 'black' }} >
                <div className='text-light d-flex row blog'>
                    <div className=' blog1'>
                        Blog
                    </div>
                    <div className=' blog2'>
                        Browse Our Work
                    </div>
                    <div className=' blog3'>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                    </div>
                </div>


                <div className="row align-items-start mx-2 mb-5">
                    <div className='text-light pb-4 text-center fs-1'>
                        Short Films
                    </div>
                    <div class="col-md-3 col-sm-12 px-1 text-light">
                        <a href='https://www.youtube.com/watch?v=JlE3DKxs7Nk' target="_blank">
                            <img src={blogImg1} height="170px" width="100%" className='mb-3' />
                        </a>
                        Experience our experimental silent short film, where visuals speak volumes and every frame tells a story
                    </div>
                    <div class="col-md-3 col-sm-12 text-light">
                        <a href='https://youtu.be/WhW8vAxQf4c' target="_blank">
                            <img src={blogImg2} height="170px" width="100%" className='mb-3' />
                        </a>
                        Capturing a journey through life's moments, highlighting choices' impact and the enduring nature of memories."
                    </div>
                    <div class="col-md-3 col-sm-12 text-light">
                        <a href='https://youtu.be/iyL4OMW4c4Q' target="_blank">
                            <img src={blogImg3} height="170px" width="100%" className='mb-3' />
                        </a>
                        When there is something stained on the walls of our throat and it gets stuck there, that misunderstanding is a fear.
                    </div>
                    <div class="col-md-3 col-sm-12 text-light">
                        <a href='https://www.youtube.com/watch?v=B0BP-AVrls0&t=240s' target="_blank">
                            <img src={blogImg4} height="170px" width="100%" className='mb-3' />
                        </a>
                        "Mukha: A dark comedy thriller where masks of reality blur, unraveling a twisted tale of intrigue and deception ."
                    </div>
                </div>


                <div className="row align-items-start mx-2 ">
                    <div className='text-light pb-4 text-center fs-1'>
                        Commercials from Production house
                    </div>
                    <div class="col-md-3 col-sm-12 px-1 text-light">
                        <a href='https://youtu.be/gtzvOnAjeqo' target="_blank">
                            <img src={blogImg8} height="170px" width="100%" className='mb-3' />
                        </a>
                        "Presenting our spec ad for Apple iPad Pro M1, crafted to Apple's standards, marking our largest and most ambitious project yet."
                    </div>
                    <div class="col-md-3 col-sm-12 text-light">
                        <a href='https://www.youtube.com/watch?v=SxQ3epZBET0' target="_blank">
                            <img src={blogImg9} height="170px" width="100%" className='mb-3' />
                        </a>
                        We shot a review video for a brand (Biosash) amidst the pandemic.
                    </div>
                    <div class="col-md-3 col-sm-12 text-light">
                        <a href='https://www.youtube.com/watch?v=pX8Zo-fA5rw' target="_blank">
                            <img src={blogImg10} height="170px" width="100%" className='mb-3' />
                        </a>
                        This is a montage of maggi being presented, intended for spec use. Inspired by Daniel Schiffer.
                    </div>
                    <div class="col-md-3 col-sm-12 text-light">
                        <a href='https://www.youtube.com/watch?v=Kldm_0V1eJw' target="_blank">
                            <img src={blogImg12} height="170px" width="100%" className='mb-3' />
                        </a>
                        This is a cinematic commercial style video of the Adidas Yeezy that we shot at our place.
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blog
