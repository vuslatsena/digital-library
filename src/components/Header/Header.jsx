import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Which Book Do You Need Today?</h2><br />
                <p className='header-text fs-18 fw-3'>"The more that you read, the more things you will know. The more that you learn, the more places you'll go." - Dr. Seuss</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header