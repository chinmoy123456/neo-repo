import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import BlogPage from './Pages/BlogPage'
import ContactPage from './Pages/ContactPage'
import PortfolioPage from './Pages/PortfolioPage';
import CommercialPage from './Pages/CommercialPage';
import ShortFilmPage from './Pages/ShortFilmPage';
import ShortsPage from './Pages/ShortsPage';
import AftermoviePage from './Pages/AftermoviePage';
import YoutubePage from './Pages/YoutubePage';
import StorePage from './Pages/StorePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/commercial" element={<CommercialPage />} />
        <Route path="/shortfilm" element={<ShortFilmPage />} />
        <Route path="/shorts" element={<ShortsPage />} />
        <Route path="/aftermovie" element={<AftermoviePage />} />
        <Route path="/youtube" element={<YoutubePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path='/contact' element={<ContactPage />} />

      </Routes>
    </Router>


    // <div>
    //   <SignUpPage />
    //   <SignInPage />
    //   <HomePage />   
    //   <AboutPage />
    //   <BlogPage />
    //   <StorePage />
    //   <ContactPage />
    //   <PortfolioPage />
    //   <CommercialPage/>
    //   <ShortFilmPage />
    //   <ShortsPage />
    //   <CartPage />
    //   <StorePage/>

    // </div>
  );
}

export default App;
