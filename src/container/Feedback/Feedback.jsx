import React from 'react';
import { SubHeading } from '../../components';
import './Feedback.css';

const Feedback = () => (
  <div className="app__feedback">
    <div className="app__feedback-heading">
      <SubHeading title="Thank you" />
      <h1 className='headtext__cormorant-white'>Your Feedback Matters </h1>
      <p className="p__opensans">Leave Feedback on Our Products and Services</p>
    </div>

    <div className='app__feedback-name'>


    </div>

    <div className='app__feedback-input flex__center'>
      <input className='feedback_name' type="text" placeholder='Your Name' />
      <input className='feedback_email' type="email" placeholder='Your e-mail address' />
      <textarea className='feedback' id="feedback" name="feedback" rows="5" cols="10" placeholder='Your feedback' />
      <button className='custom__button-white'>Send</button>
    </div>

  </div>
);

export default Feedback;
