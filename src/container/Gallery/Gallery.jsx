import React, { useRef } from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {

  const galleryImages = [images.photo01, images.photo02, images.photo03, images.photo04];
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Other Items</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>
          From handcrafted sculptures to decorative frames, we strive to bring you unique and beautiful items that will help you create a cohesive and personalized look in your home or office. We believe that art doesn't have to be limited to just the walls, and we aim to offer a variety of items that will help you express your personal style and enhance your space. Browse our collection of other items and discover new ways to incorporate beauty and creativity into your daily life."
        </p>
        <button type='button' className='custom__button-white'>View More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
