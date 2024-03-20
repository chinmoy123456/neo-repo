import React from 'react'
import aboutImg1 from '../Images/aboutImg1.jpg'
import aboutImg2 from '../Images/aboutImg2.jpg'
import aboutImg3 from '../Images/aboutImg3.jpg'
import aboutImg4 from '../Images/aboutImg4.jpg'
import aboutImg5 from '../Images/aboutImg5.jpg'
import aboutImg6 from '../Images/aboutImg6.jpg'
import aboutImg7 from '../Images/aboutImg7.jpg'


function About() {
  return (
    <div className=' ' style={{ backgroundColor: 'black' }}>
      <div class="container-fluid">
        <div class="row align-items-start mb-1">
          <div class="col-md-4 p-1 col-sm-12">
            <img src={aboutImg1} alt='images' className='img-fluid' />
          </div>
          <div class="col-md-4 p-1 col-sm-12">
            <img src={aboutImg2} alt='images' className='img-fluid' />
          </div>
          <div class="col-md-4 p-1 col-sm-12">
            <img src={aboutImg3} alt='images' className='img-fluid' />
          </div>
        </div>
        <div class="row align-items-start mt-4 d-flex">
          <div class="col-md-6 col-sm-12 px-4 text-light about ">
            <div className='mt-4 text-center aboutNeo'>
              ABOUT NEO
            </div>
            <div className='text-left container mt-4 aboutNeo1'>
              I'm a filmmaker creating cozy and fun little films. I've had the privilege of directing commercials for brands like Samsung, Toyota, BMW, Coca-Cola, Red Bull and many more. So, if you're into mind-numbing content that's also weirdly satisfying, you're in the right place!
              <br />
              <br />
              I'm also here to help aspiring filmmakers succeed in their careers. On my YouTube channel, I share my experiences and provide guidance to those who are just starting out. I understand how tough it can be to break into the industry. But I'm here to tell you that with dedication and the right resources, you can make it happen.
            </div>
          </div>
          <div class="col-md-6 col-sm-12 py-3">
            <img src={aboutImg7} alt='images' height="400px" width="100%" />
          </div>
        </div>
        <div class="row align-items-start mt-4">
          <div class="col-md-4 p-1 col-sm-12">
            <img src={aboutImg4} alt='images' className='img-fluid' />
          </div>
          <div class="col-md-4 p-1 col-sm-12">
            <img src={aboutImg5} alt='images' className='img-fluid' />
          </div>
          <div class="col-md-4 p-1 col-sm-12">
            <img src={aboutImg6} alt='images' className='img-fluid' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
