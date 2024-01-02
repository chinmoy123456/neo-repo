import React from 'react'
import Img1 from "../Images/Img1.jpg";
import Img2 from "../Images/Img2.jpg";
import Img3 from "../Images/Img3.jpg";
import Img4 from "../Images/Img4.jpg";


function Blog() {
    return (
        <div className='mx-0 text-light' style={{ backgroundColor: 'black' }}>
            <div className='blog1 text-center'>
                Blog
            </div>
            <div className='row pt-5 text-light'>
                <div className='col-md-1'></div>
                <div className='col-md-5 col-sm-12'>
                    <a href='' target="_blank">
                        <img src={Img1} height="550px" width="100%" className='mb-3' />
                    </a>
                    <div>
                        <div>
                            <h2>Mexico: A Culinary Journey</h2>
                        </div>
                        <div>
                            Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
                        </div>
                    </div>
                </div>
                <div className='col-md-5 col-sm-12'>
                    <a href='https://youtu.be/gtzvOnAjeqo' target="_blank">
                        <img src={Img2} height="500px" width="100%" className='mb-3' />
                    </a>
                    <div>
                        <div>
                            <h2>Mexico: A Culinary Journey</h2>
                        </div>
                        <div>
                            Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
                        </div>
                    </div>
                </div>
                <div className='col-md-1'></div>
            </div>

            <div className='row pt-5 text-light'>
                <div className='col-md-1'></div>
                <div className='col-md-5 col-sm-12'>
                    <a href='https://youtu.be/gtzvOnAjeqo' target="_blank">
                        <img src={Img3} height="500px" width="100%" className='mb-3' />
                    </a>
                    <div>
                        <div>
                            <h2>Mexico: A Culinary Journey</h2>
                        </div>
                        <div>
                            Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
                        </div>
                    </div>
                </div>
                <div className='col-md-5 col-sm-12'>
                    <a href='' target="_blank">
                        <img src={Img4} height="550px" width="100%" className='mb-3' />
                    </a>
                    <div>
                        <div>
                            <h2>Mexico: A Culinary Journey</h2>
                        </div>
                        <div>
                            Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
                        </div>
                    </div>
                </div>
                <div className='col-md-1'></div>
            </div>
        </div>
    )
}

export default Blog
