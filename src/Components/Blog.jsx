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
                {/* <div className='col-md-1'></div> */}
                <div className='blog-items col-md-6 col-sm-12 pt-5'>
                    <a href='' >
                        <img src={blogImg1} height="550px" width="100%" className='mb-3' />
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
                <div className='col-md-6 col-sm-12 pt-5'>
                    <div className='row'>
                        <a href=' '>
                            <img src={blogImg2} height="500px" width="100%" className='mb-3' />
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
                </div>
                {/* <div className='col-md-1'></div> */}
            </div>

            <div className='row mx-3 text-light'>
                {/* <div className='col-md-1'></div> */}
                <div className='col-md-6 pt-5 col-sm-12'>
                    <a href=' ' >
                        <img src={blogImg3} height="500px" width="100%" className='mb-3' />
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
                <div className='col-md-6 pt-5 col-sm-12'>
                    <a href=''>
                        <img src={blogImg4} height="550px" width="100%" className='mb-3' />
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
                {/* <div className='col-md-1'></div> */}
            </div>
        </div>
    )
}

export default Blog
