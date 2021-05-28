import React, { lazy, Suspense, useState, useEffect } from 'react'

function ServicesCard({ cardItem }) {
  const [item, setItem] = useState({})

  useEffect(() => {
    setItem({
      logo: lazy(() => import('./../../svg/' + cardItem.logo + '.js')),
      title: cardItem.title,
    })
  }, [cardItem])

  return (
    <React.Fragment>
      <div className="Services-cards-item-logo">
        <Suspense fallback={<div>...</div>}>
          {item.logo && <item.logo />}
        </Suspense>
      </div>
      <h2 className="Services-cards-item-title"> {item.title} </h2>
    </React.Fragment>
  )
}

export default ServicesCard
