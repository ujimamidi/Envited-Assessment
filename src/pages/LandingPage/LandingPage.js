import React from 'react';
import { Link } from 'react-router-dom';
import landingImage from '../../images/landingimage.svg'

import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landing-container'>
      <div className="landing-container__inner">
        <img src={landingImage} alt="landing-poster"  />
        <div className="landing-container__innner-desc">
          <h1>Imagine if 
            <br/><span>Snapchat</span>
            <br/>had events.
          </h1>
          <div className="landing-container__inner-subtext">
          <p>Easily host and share events with your friends
            <br/>across any social media.
          </p>
            <Link to='/create' className="landing-button">Create my event</Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;