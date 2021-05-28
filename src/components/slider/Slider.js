import React, { lazy, Suspense, useState, useEffect } from 'react'
import './Slider.scss'

import SliderLib from 'infinite-react-carousel'

function Slider({ items }) {
  const [loading, setLoading] = useState(false)
  const [slidesToShow, setSlidesToShow] = useState(1)
  let array = []

  items.forEach((item) => {
    array.push({
      logo: lazy(() => import('./../../svg/' + item.logo + '.js')),
      title: item.title
    })
  })

  const windowResize = (e) => {
    if (e.currentTarget.innerWidth < 768) {
      setSlidesToShow(1)
    } else {
      setSlidesToShow(2)
    }
  }

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSlidesToShow(1)
    } else {
      setSlidesToShow(2)
    }
    window.addEventListener('resize', windowResize, { passive: true })
    setLoading(true)

    return () => {
      window.removeEventListener('resize', windowResize)
    }
  }, [])

  return (
    <div className="Slider">
      {loading && (
        <SliderLib
          dots
          arrows={false}
          slidesToShow={slidesToShow}
          autoplay={true}
          autoplaySpeed={2000}
        >
          {array.map((arr, index) => (
            <div className="Slider-item" key={'slider-cardItem-' + index}>
              <div className="Slider-item-logo">
                <Suspense fallback={<div>...</div>}>
                  <arr.logo />
                </Suspense>
              </div>
              <h3 className="Slider-item-title"> {arr.title} </h3>
            </div>
          ))}
        </SliderLib>
      )}
    </div>
  )
}

export default Slider
