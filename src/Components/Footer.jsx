import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className='pt-4 pb-3' style={{backgroundColor:'black'}}>
            <div className='home-brand d-flex justify-content-center align-items-center'>
                <a href=''><FontAwesomeIcon className='mx-3 my-awesome-icon' icon={faInstagram} /></a>
                <a href=''><FontAwesomeIcon className='mx-3 my-awesome-icon' icon={faYoutube} /></a>
                <a href=''><FontAwesomeIcon className='mx-3 my-awesome-icon' icon={faFacebookF} /></a>
            </div>
        </div>
    )
}

export default Footer
