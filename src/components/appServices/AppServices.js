import React, { useState, useEffect } from 'react'
import './AppServices.scss'

import LazyLoadImage from '../lazyLoadImage/LazyLoadImage'
import Slider from '../slider/Slider'
import ServicesCard from '../servicesCard/ServicesCard'


const cardData = [
  { logo: 'ServicesMobile', title: 'Mobile Command Management' },
  { logo: 'ServicesEquipment', title: 'Equipment Optimizer' },
  { logo: 'ServicesLifecycle', title: 'Lifecycle Prediction' },
  { logo: 'ServicesTroubles', title: 'Troubleshooting Guide' },
  { logo: 'ServicesEnergy', title: 'Energy Optimizer' },
  { logo: 'ServicesSmart', title: 'Smart Diagnostics' },
  { logo: 'ServicesVital', title: 'Vital Equipment Scan' },
  { logo: 'ServicesSmart2', title: 'Smart Alerts' },
  { logo: 'ServicesPreventative', title: 'Preventative Maintenance' }
]


function AppServices() {
  const [mobileSlider, setMobileSlider] = useState(false);

  const windowResize = (e) => {
    if (e.currentTarget.innerWidth < 992) {
      setMobileSlider(true)
    } else {
      setMobileSlider(false)
    }
  }

  useEffect(() => {
    if (window.innerWidth < 992) {
      setMobileSlider(true)
    } else {
      setMobileSlider(false)
    }
    window.addEventListener('resize', windowResize, { passive: true })

    return () => {
      window.removeEventListener('resize', windowResize)
    }
  }, [])

  return (
    <section className="Services">
      <div className="container">
        <h4 className="Services-subtitle blue">S e r v i c e s</h4>
        <h2 className="Services-title darkgray">
          Bring more systems into the network
        </h2>
        <p className="Services-text gray">
          Find out just how far Siphome can lead your home into next-gen
          intelligence.
        </p>
        <div className="Services-imageHolder">
          <LazyLoadImage
            className="Services-imageHolder-image"
            src="images/Services1.webp"
            alt="Services1"
            direction="left"
          />
        </div>
        {mobileSlider ? (
          <div className="Services-slider">
            <Slider items={cardData} />
          </div>
        ) : (
          <div className="Services-cards">
            {cardData.map((cardItem, index) => (
              <div className="Services-cards-item" key={'services-cardItem-' + index}>
                <ServicesCard cardItem={cardItem} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default AppServices
