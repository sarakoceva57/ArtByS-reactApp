import React from 'react';
import { SubHeading, } from '../../components';
import { data } from '../../constants';
import './AllArts.css';

const AllArts = () => {

  return (

    <>
      <div className='app__allArts flex__center section__padding' id="menu">
        <div className='app__allArts-title'>
          <SubHeading title="Exploring the World of Textured Art " />
          <h1 className='headtext__cormorant'>Arts</h1>
        </div>


        <div className='app__arts-images_container'>

          {data.arts.map((art) => (
            <div className='items card' >

              <div className='app__arts-images_card'>
                <img src={art.cover} alt="gallery" />
              </div>
              <h1 className='art__h1'>{art.type}</h1>
              <div className='details'>
                <h2>{art.name}</h2>
                <p>Price: {art.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '65px' }}>
          <button type='button' className='custom__button-white'>View More</button>
        </div>
      </div>
    </>
  );
}

export default AllArts;
