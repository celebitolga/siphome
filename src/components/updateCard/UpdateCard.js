import React, { lazy, Suspense, useEffect, useState } from 'react'


function UpdateCard({ cardItem }) {
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
      <div className="updateCards-item-logo">
        <Suspense fallback={<div>...</div>}>
          {item.logo && <item.logo />}
        </Suspense>
      </div>
      <h4 className="updateCards-item-title white">{item.title}</h4>
      <p className="updateCards-item-description white">{item.description}</p>
    </React.Fragment>
  )
}

export default UpdateCard
