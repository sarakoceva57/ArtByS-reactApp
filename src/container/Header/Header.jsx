import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Discover the Beauty" />
      <h1 className='app__header-h1'>Trending Arts</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Welcome to my art page, where you can discover a world of vibrant colors, unique compositions, and captivating designs. My art is a reflection of my passion and creativity, and each piece has been carefully crafted to evoke emotions and inspire imagination.
      </p>
      <button type='button' className='custom__button' >Explore Arts</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="img" />
    </div>
  </div>
);

export default Header;
