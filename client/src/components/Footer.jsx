// src/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer_main">
        <div className='contact_info'>
          <h1 className='title'>Contact Us</h1>
          <p><strong>Address:</strong> 1234 Main St, Hometown, USA</p>
          <p><strong>Cell Phone:</strong> (123) 456-7890</p>
        </div>
        <div className='social_links'>
          <h1 className="title">Social</h1>
          <div className="links">
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
              <FaFacebookF className='fa' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
              <FaTwitter className='fa' />
            </a>
            <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' aria-label='YouTube'>
              <FaYoutube className='fa' />
            </a>
          </div>
        </div>
      </div>
      <div className='footer_rights'>
        <p>All Rights Reserved | CopyRights @ 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
