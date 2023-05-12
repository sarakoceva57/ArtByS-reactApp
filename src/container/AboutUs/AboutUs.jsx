import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center '>

    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_image'>
        <img className='image1_class' src={images.image1} alt="image1" />
      </div>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About us</h1>
        <p className='p__opensans'>ArtByS is a online web page where editor-in-chief curates the best in home decor & design. Our goal is to inspire and educate our audience, whether you're an experienced artist looking for new techniques or a curious newcomer to the world of art. From in-depth interviews with artists to articles on the latest trends in the art world, we cover a broad range of topics to keep you informed and engaged.</p>
        <button type='button' className='custom__button-white'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
