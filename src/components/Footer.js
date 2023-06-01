/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer>
      <div className="social-icons">
        <a className="facebook icon" href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a className="instagram icon" href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a className="twitter icon" href="https://www.twitter.com/your-twitter-page" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
        <p>FilZoo   © 2023</p>
      </footer>
    </div>
  );
}

export default Footer;
