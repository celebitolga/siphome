import React, { lazy, Suspense, useState, useEffect } from 'react'

function FeaturesCard({ cardItem }) {
  const [item, setItem] = useState({})

  useEffect(() => {
    setItem({
      logo: lazy(() => import('./../../svg/' + cardItem.logo + '.js')),
      title: cardItem.title,
      description: cardItem.description
    })
  }, [cardItem])

  return (
    <React.Fragment>
      <div className="featuresCards-item-logo">
        <Suspense fallback={<div>...</div>}>
          {item.logo && (<item.logo />)}
        </Suspense>
      </div>
      <h4 className="featuresCards-item-title">{item.title}</h4>
      <p className="featuresCards-item-description gray">{item.description}</p>
    </React.Fragment>
  )
}

export default FeaturesCard
