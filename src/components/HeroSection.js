import React from 'react';
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
import treeBg from '../components/videos/treebg.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={treeBg} autoPlay loop muted />
      <h1>Tree Servery</h1>
      <p>Share with us</p>
      <div className="hero-btns">
        <Button className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          GET STARTED
        </Button>
        <Button className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
          WATCH  <i className='far fa-play-cirle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection
