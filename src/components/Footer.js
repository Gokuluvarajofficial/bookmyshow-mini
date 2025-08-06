// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaPinterestP, FaLinkedinIn } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-logo-text">
        book<span className="red">my</span>show
      </div>
      <div className="social-icons">
        <FaFacebookF />
        <FaXTwitter />
        <FaInstagram />
        <FaYoutube />
        <FaPinterestP />
        <FaLinkedinIn />
      </div>
      <p className="copyright">
        Copyright 2025 © Bookmyshow. All Rights Reserved. <br />
        The content and images used on this site are copyright protected and copyrights vests with the respective owners.
        The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied.
        Unauthorized use is prohibited and punishable by law.
      </p>
    </footer>
  );
}

export default Footer;
