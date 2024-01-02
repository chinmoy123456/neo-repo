import React from 'react'
import homeImg from '../Images/homeImg.jpg'
import aboutImg1 from '../Images/aboutImg1.jpg'
import aboutImg2 from '../Images/aboutImg2.jpg'
import aboutImg3 from '../Images/aboutImg3.jpg'
import aboutImg4 from '../Images/aboutImg4.jpg'
import aboutImg5 from '../Images/aboutImg5.jpg'
import aboutImg7 from '../Images/aboutImg7.jpg'


function About() {
  return (
    <div>
      <div className='' style={{backgroundColor:'black'}}>
        <div class="container-fluid">
          <div class="row align-items-start">
            <div class="col-md-4 col-sm-12">
              <img src={aboutImg1} height="278px" width="419px" />
            </div>
            <div class="col-md-4 col-sm-12">
              <img src={aboutImg2} height="278px" width="419px" />
            </div>
            <div class="col-md-3 col-sm-12">
              <img src={aboutImg3} height="278px" width="400px" />
            </div>
          </div>
          <div class="row align-items-start">
            <div class="col-md-4 col-sm-12">
              <img src={homeImg} height="278px" width="400px" />
            </div>
            <div class="col-md-4 col-sm-12">
              <img src={aboutImg5} height="278px" width="419px" />
            </div>
            <div class="col-md-4 col-sm-12">
              <img src={aboutImg4} height="278px" width="405px" />
            </div>
          </div>
          <div class="row align-items-start mt-4 d-flex">
            <div class="col-md-6 col-sm-12">
              <img src={aboutImg7} height="400px" width="100%" />
            </div>
            <div class="col-md-6 col-sm-12 px-4 text-light about ">
              <div className='mt-4 text-center aboutNeo'>
                ABOUT NEO
              </div>
              <div className='text-left container mt-5 aboutNeo1'>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.
                <br/>
                <br/>
                This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
