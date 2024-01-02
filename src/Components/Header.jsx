import React from 'react'
import '../CSS/Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <div className='sticky-top m-0 p-0'>
        <nav className="py-5 navbar navbar-expand-lg  shadow-lg" style={{backgroundColor:'black'}}>
          <div className="container">
            <div>
            <a className="navbar-brand logo-text text-light fs-3" href="#" >
              Neo's Studio
            </a>
            </div>
            <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header text-white border-bottom">
                <h5 className="offcanvas-title text-warning" id="offcanvasNavbarLabel">Neo's Studio</h5>
                <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body navbarText">
                <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                  <li className="nav-item mx-2">
                    <a className="nav-link active text-white" aria-current="page" href="#">About</a>
                  </li>
                  <li clasNames="nav-item mx-2">
                    <a className="nav-link text-white" href="#">Blog</a>
                  </li>
                  <li clasNames="nav-item mx-2">
                    <a className="nav-link text-white" href="#">Portfolio</a>
                  </li>
                  <li clasNames="nav-item mx-2">
                    <a className="nav-link text-white" href="#">Store</a>
                  </li>
                  <li clasNames="nav-item mx-2">
                    <a className="nav-link text-white" href="#">Contact </a>
                  </li>
                </ul>
                <div className='align-items-center mt-2'>
                <a href=''><FontAwesomeIcon className='mx-3 my-awesome-icon' icon={faMagnifyingGlass} /></a>
                <a href=''><FontAwesomeIcon className='mx-3 my-awesome-icon' icon={faUser} /></a>
                <a href=''><FontAwesomeIcon className='mx-3 my-awesome-icon' icon={faBagShopping} /></a>
              </div>
              </div>
              
            </div>
          </div>
        </nav>
      </div>
  )
}

export default Header
