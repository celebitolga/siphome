import React, { lazy, Suspense } from 'react'
import './Update.scss'

import LazyLoadImage from '../lazyLoadImage/LazyLoadImage'

const cardItems = [
  {
    logo: 'UpdateMonitor',
    title: 'Monitor',
    description:
      'Make your standard systems smart with Siphome. A simple installation or integration and we can start to monitor 24/7 to make sure your home is Siphome.'
  },
  {
    logo: 'UpdateMaintenance',
    title: 'Maintenance',
    description:
      'Siphome helps you maintain your home. The HomeHealth Record ensures you have the right information at the right time, and if you aren’t able to do the maintenance yourself, we can connect you to a service pro to help.'
  },
  {
    logo: 'UpdateRepair',
    title: 'Repair',
    description:
      'Siphome empowers you with smart notifications so you can make repairs before they become problems. Notifications provide diagnostics and recommended next actions so you know what to do and have the same information as your service pro.'
  },
  {
    logo: 'UpdateReplace',
    title: 'Replace​',
    description:
      'Improve your home over time. Build your next-gen smart home with Siphome’s advice along the way.'
  }
]


function Update() {
  let array = []

  cardItems.forEach((item) => {
    array.push({
      logo: lazy(() => import('./../../svg/' + item.logo + '.js')),
      title: item.title,
      description: item.description
    })
  })

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
              src="images/update1.webp"
              alt="update1"
              direction="left"
            />
            <LazyLoadImage
              className="imageRight"
              src="images/update2.webp"
              alt="update2"
              direction="left"
            />
            <LazyLoadImage
              className="imageLeftBottom"
              src="images/update3.webp"
              alt="update3"
              direction="left"
            />
          </div>
        </div>
        <div className="Update-right">
          <div className="updateCards">
            {array.map((arr, index) => (
              <div className="updateCards-item" key={'update-item' + index}>
                <div className="updateCards-item-logo">
                  <Suspense fallback={<div>...</div>}>
                    <arr.logo />
                  </Suspense>
                </div>
                <h4 className="updateCards-item-title white">{arr.title}</h4>
                <p className="updateCards-item-description white">
                  {arr.description}
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
