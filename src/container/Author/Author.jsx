import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { FaQuoteLeft } from "react-icons/fa";
import './Author.css';

const Author = () => (
  <div className='app_author app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.author} alt='author' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Author's Word" />
      <h1 className='headtext__cormorant'>Unleashing the Power of Art</h1>

      <div className='app__author-content'>
        <div className='app__author-content_quote'>
          <FaQuoteLeft style={{ color: "#ddba3d", fontSize: "60px", marginRight: '20px' }} />
          <p className='p__opensans' >Welcome to my blog. My name is Sara and I'm student of Faculty of Computer Science and Engineeing.</p>

        </div>

        <p className='p__opensans' style={{ marginTop: '10px' }}>I'm passionate about art, interior design and diy crafts. This blog is my space to share everything that inspires me with you. I hope you like it</p>
      </div>

    </div>
  </div>
);

export default Author;
