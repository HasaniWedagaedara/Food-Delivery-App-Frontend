import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.footer} alt="Logo" className="footer-logo" />
          <p>Order Fodds and have a great meal!</p>
          <div className="footer-sociel-icons">
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              className="footer-social-icon"
            />
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              className="footer-social-icon"
            />
            <img
              src={assets.linkedin_icon}
              alt="linkedin"
              className="footer-social-icon"
            />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-202-456-789</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
copyright &copy;  Foods. All rights reserved.
      </p>
    </div>
  );
}

export default Footer
