import React, { useState } from 'react'
import LazyLoadImage from '../lazyLoadImage/LazyLoadImage'
import './AppHero.scss'

function AppHero() {
  const [animation, setAnimation] = useState(false)

  const handleLoad = () => {
    setAnimation(true)
  }

  return (
    <section className="Hero">
      <div className="container">
        <div className={`Hero-left ${animation ? 'leftCome' : 'leftGo'}`}>
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
              src="images/hero1.webp"
              alt="hero1"
              direction="right"
              handleLoad={handleLoad}
            />
            <LazyLoadImage
              className="Hero-right-holder-hero2"
              src="images/hero2.webp"
              alt="hero2"
              direction="right"
              handleLoad={handleLoad}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppHero
