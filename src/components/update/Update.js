import React from 'react'
import './Update.scss'

import UpdateMonitor from '../../svg/UpdateMonitor'
import UpdateMaintenance from '../../svg/UpdateMaintenance'
import UpdateRepair from '../../svg/UpdateRepair'
import UpdateReplace from '../../svg/UpdateReplace'
import LazyLoadImage from '../lazyLoadImage/LazyLoadImage'

const cardItems = [
  {
    logo: UpdateMonitor,
    title: 'Monitor',
    description:
      'Make your standard systems smart with Siphome. A simple installation or integration and we can start to monitor 24/7 to make sure your home is Siphome.'
  },
  {
    logo: UpdateMaintenance,
    title: 'Maintenance',
    description:
      'Siphome helps you maintain your home. The HomeHealth Record ensures you have the right information at the right time, and if you aren’t able to do the maintenance yourself, we can connect you to a service pro to help.'
  },
  {
    logo: UpdateRepair,
    title: 'Repair',
    description:
      'Siphome empowers you with smart notifications so you can make repairs before they become problems. Notifications provide diagnostics and recommended next actions so you know what to do and have the same information as your service pro.'
  },
  {
    logo: UpdateReplace,
    title: 'Replace​',
    description:
      'Improve your home over time. Build your next-gen smart home with Siphome’s advice along the way.'
  }
]


function Update() {
  return (
    <section className="Update">
      <div className="container">
        <div className="Update-left">
          <h4 className="Update-left-subtitle blue">U P D A T E</h4>
          <h2 className="Update-left-title darkgray">
            It starts with an upgrade
          </h2>
          <div className="Update-left-images">
            <LazyLoadImage
              className="imageLeftTop"
              src="images/update1.png"
              alt="update1"
              direction="left"
            />
            <LazyLoadImage
              className="imageRight"
              src="images/update2.png"
              alt="update2"
              direction="left"
            />
            <LazyLoadImage
              className="imageLeftBottom"
              src="images/update3.png"
              alt="update3"
              direction="left"
            />
          </div>
        </div>
        <div className="Update-right">
          <div className="updateCards">
            {cardItems.map((cardItem) => (
              <div className="updateCards-item">
                <div className="updateCards-item-logo">
                  <cardItem.logo />
                </div>
                <h4 className="updateCards-item-title white">
                  {cardItem.title}
                </h4>
                <p className="updateCards-item-description white">
                  {cardItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Update
