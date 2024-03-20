import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className='pt-4 pb-3' style={{backgroundColor:'black'}}>
            <div className='home-brand d-flex justify-content-center align-items-center'>
                <a href='https://www.youtube.com/channel/UCjZVPmcaFLH7Puvspo-wGCg'><FontAwesomeIcon className='mx-3 my-awesome-icon' icon={faYoutube} /></a>
                <a href='/'><FontAwesomeIcon className='mx-3 my-awesome-icon' icon={faFacebookF} /></a>
                <a href='https://www.instagram.com/neo.abhi.arc/'><FontAwesomeIcon className='mx-3 my-awesome-icon' icon={faInstagram} /></a>
            </div>
        </div>
    )
}

export default Footer
