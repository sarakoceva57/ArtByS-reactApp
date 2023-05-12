import React from 'react';
import Feedback from '../Feedback/Feedback';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <Feedback />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className="p__opensans">Apartment 203, 456 Main Street, Negotino, North Macedonia</p>
        <p className="p__opensans">+389 72 345 345</p>
        <p className="p__opensans">+389 72 345 346</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.artby} alt="footer_logo" />
        <p className="p__opensans">&quot;Art enables us to find ourselves and lose ourselves at the same time.&quot;</p>

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">18:00 pm - 20:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 pm - 18:00 pm</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2023 ArtByS. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
