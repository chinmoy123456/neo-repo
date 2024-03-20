import React from 'react'
import blogImg1 from "../Images/blogImg1.jpg";
import blogImg2 from "../Images/blogImg2.jpg";
import blogImg3 from "../Images/blogImg3.jpg";
import blogImg4 from "../Images/blogImg4.jpg";


function Blog() {

    return (
        <div className='px-3 pb-3 text-light' style={{ backgroundColor: 'black' }}>
            <div className='blog1 text-center'>
                Blog
            </div>
            <div className='row mx-3  text-light'>
                <div className='blog-items col-md-6 col-sm-12 pt-5'>
                    <a href='/'>
                        <img src={blogImg1} alt='Images' height="550px" width="100%" className='mb-3' />
                    </a>
                    <div>
                        <div>
                            <h2>Flickers of Hope</h2>
                        </div>
                        <div>
                            In the heart of Diwali's enchantment, I stumbled upon this poignant scene—a young boy , cradling delicate clay lamps, or diyas, in his weathered hands. His eyes, like twin constellations, held stories of generations past and dreams of futures yet to unfold.
                        </div>
                    </div>
                </div>
                <div className='blog-items col-md-6 col-sm-12 pt-5'>
                    <div className='row'>
                        <a href=' '>
                            <img src={blogImg2} alt='Images' height="500px" width="100%" className='mb-3' />
                        </a>
                        <div>
                            <div>
                                <h2>Mumbai's Heartbeat: A Glimpse into Local Railway Life</h2>
                            </div>
                            <div>
                                The day begins with a symphony of commuters, each with a story etched on their faces. The platform transforms into a stage, where the dance of rush hour unfolds. As the sun paints the sky with hues of orange and pink, the city gears up for another day.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='blog-items row mx-3 text-light'>
                <div className='col-md-6 pt-5 col-sm-12'>
                    <a href='/' >
                        <img src={blogImg3} alt='images' height="500px" width="100%" className='mb-3' />
                    </a>
                    <div>
                        <div>
                            <h2>Equestrian Majesty at India Gate: A Living Tribute to Valor</h2>
                        </div>
                        <div>
                            Amidst the grandeur of India Gate, a gallant soldier on horseback, spear in hand, embodies the spirit of bravery and tradition. Against the backdrop of the tricolor, he rides with unwavering pride, a living tribute to the valor that echoes through the history of the nation.                        </div>
                    </div>
                </div>
                <div className='blog-items col-md-6 pt-5 col-sm-12'>
                    <a href='/'>
                        <img src={blogImg4} alt='images' height="550px" width="100%" className='mb-3' />
                    </a>
                    <div>
                        <div>
                            <h2> Spice Symphony of India: A Culinary Tapestry</h2>
                        </div>
                        <div>
                            Embark on a sensory journey through the vibrant tapestry of Indian spices, where every flavor tells a story and every aroma is a dance. From the fiery kick of red chili to the earthy warmth of cumin, the spices of India weave together a culinary masterpiece that tantalizes the taste buds and ignites the soul.                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
