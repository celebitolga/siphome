import React from 'react'
import './AppFeatures.scss'

import LazyLoadImage from '../lazyLoadImage/LazyLoadImage'
import FeaturesCard from '../featuresCard/FeaturesCard'

const cardData = [
  {
    logo: 'FeaturesDetection',
    title: 'Automatic Threat Detection',
    description:
      'Siphome reacts the moment your equipment fails, alerting you to the problem.'
  },
  {
    logo: 'FeaturesDiag',
    title: 'Smart Diagnostics',
    description:
      'See exactly what is malfunctioning and compare your maintenance options on the same screen.'
  },
  {
    logo: 'FeaturesPre',
    title: 'Disaster Prevention',
    description:
      'Predictive analytics lets you see what needs maintenance before it fails.'
  },
  {
    logo: 'FeaturesService',
    title: '24/7 Service​',
    description:
      'Siphome monitors your critical systems 24/7 so you can enjoy peace of mind.'
  }
]

function AppFeatures() {
  return (
    <section className="Features">
      <div className="container">
        <p className="Features-comment gray">
          Every day your home faces countless potential threats. Every day you
          face countless potential headaches. A small problem can become a major
          disaster. Early warning signs exist but often you can't hear or see
          them.
        </p>
        <div className="Features-content">
          <div className="Features-content-left">
            <LazyLoadImage
              className="nooo"
              src="images/illustration.webp"
              alt="illustration"
              direction="left"
            />
          </div>
          <div className="Features-content-right">
            <div className="meetSiphome">
              <h4 className="meetSiphome-subtitle blue">F e a t u r e s</h4>
              <h2 className="meetSiphome-title darkgray">Meet Siphome</h2>
              <p className="meetSiphome-text gray">
                The most comprehensive smart solution to home maintenance. All
                it takes is a simple and affordable sensor installation by one
                of our Siphome certified technicians.
              </p>
            </div>
            <div className="featuresCards">
              {cardData.map((cardItem, index) => (
                <div className="featuresCards-item" key={'features-cardItem-' + index}>

                  <FeaturesCard cardItem={cardItem} />
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppFeatures
