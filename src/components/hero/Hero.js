import React, { useState } from 'react'
import './Hero.scss'

import { LazyLoadImage } from 'react-lazy-load-image-component'

function Hero() {

  const [imageLoad, setImageLoad] = useState(false);

  const handleImageLoad = () => {
    setImageLoad(true);
  }

  return (
    <main className="Hero">
      <div className="container">
        <div className="Hero-left">
          <h1 className="Hero-left-title white">
            Imagine your home smart enough{' '}
            <span className="green">to take care</span> of itself.
          </h1>
          <p className="Hero-left-content white">
            Turn your home into a smarthome today with a simple & affordable
            upgrade. Discover the upgrade that automates home maintenance.
          </p>
          <div className="Hero-left-buttons">
            <button className="Hero-left-buttons-button greenBtn">
              Get Started
            </button>
            <button className="Hero-left-buttons-button transBtn">
              Learn More
            </button>
          </div>
        </div>

        <div className="Hero-right">
          <div className="Hero-right-holder">
            <LazyLoadImage
              className="Hero-right-holder-hero1"
              alt="hero1"
              src="images/hero1.png" // use normal <img> attributes as props
            />
            <LazyLoadImage
              className="Hero-right-holder-hero2"
              alt="hero2"
              src="images/hero2.png" // use normal <img> attributes as props
            />
            {/* <img
              className="Hero-right-holder-hero1"
              src="images/hero1.png"
              alt="hero1"
              onLoad={handleImageLoad}
              style={imageLoad ? {} : { display: 'none' }}
            />
            <img
              className="Hero-right-holder-hero2"
              src="images/hero2.png"
              alt="hero2"
              onLoad={handleImageLoad}
              style={imageLoad ? {} : { display: 'none' }}
            /> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
