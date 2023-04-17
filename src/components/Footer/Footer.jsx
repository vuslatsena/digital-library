import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <span className='name'>Coded by Vuslat Sena Emre</span>
        <div className='social-links'>
          <a href='https://github.com/vuslatsena'>
            <i className='fab fa-github'></i>
          </a>
          <a href='https://www.linkedin.com/in/vuslat-sena-emre/'>
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
