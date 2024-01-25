import React from 'react'
import '../CSS/Style.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <div className='sticky-top m-0 p-0'>
      <nav className="py-4 navbar navbar-expand-md  shadow-lg" style={{ backgroundColor: 'black' }}>
        <div className="container">
          <div>
            <Link to='/' className="navbar-brand logo-text text-light" href="#" >
              NEO's STUDIO
            </Link>
          </div>

          <div className=" sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header text-white border-bottom">
              <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Neo's Studio</h5>
              <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body navbarText">
              <ul className="navbar-nav justify-content-center flex-grow-1  ">
                <li className="nav-item ">
                  <Link to='/about' className="nav-link text-white" aria-current="page" href="#">ABOUT</Link>
                </li>
                <li className="nav-item mx-1">
                  <Link to='/blog' className="nav-link text-white" href="#">BLOG</Link>
                </li>
                <li className="nav-item mx-1">
                  <Link to='/portfolio' className="nav-link text-white" href="#">PORTFOLIO</Link>
                </li>
                <li className="nav-item mx-1">
                  <Link to='/store' className="nav-link text-white" href="#">STORE</Link>
                </li>
                {/* <li clasNames="nav-item ">
                  <Link to='/contact' className="nav-link text-white" href="#">Contact </Link>
                </li> */}
              </ul>
              <div className="d-md-none">
                {/* Tablet or Mobile view: Login and Signup buttons */}
                <div className='mb-3 '>
                  <Link to='/login'>
                    <button className="text-white border-0 btn" style={{ padding: '5px 15px 7px 15px', backgroundImage: 'linear-gradient(to right, #1446d1, #4d41cb, #6a3cc4, #8037bd, #9132b5)' }}>
                      Login
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to='/signup'>
                    <button className="btn text-white border-0 text-center " style={{ padding: '5px 15px 7px 15px', backgroundImage: 'linear-gradient(to right, #1446d1, #4d41cb, #6a3cc4, #8037bd, #9132b5)' }}>
                      Signup
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='align-items-center mt-2'>
            <div className='d-none d-lg-block d-md-block'>
              <Link to='/signup' href=''><FontAwesomeIcon className=' mx-5 my-awesome-icon' icon={faUser} /></Link>
              {/* <a href=''><FontAwesomeIcon className='mx-3 my-awesome-icon' icon={faBagShopping} /></a> */}
            </div>
          </div>
          <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
