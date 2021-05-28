import React, { useState } from 'react'

function LazyLoadImage({ className, src, alt, direction, handleLoad }) {
  const [imageLoad, setImageLoad] = useState(false)

  const handleImageLoad = () => {
    if (handleLoad) {
      handleLoad()
    }
    setImageLoad(true)
  }

  const handleLoadedDirection = () => {
    return direction === 'left' ? 'leftLoaded' : 'rightLoaded'
  }

  const handleNotLoadDirection = () => {
    return direction === 'left' ? 'leftNotLoad' : 'rightNotLoad'
  }

  return (
    <img
      className={`${className} ${
        imageLoad ? handleLoadedDirection() : handleNotLoadDirection()
      }`}
      src={src}
      alt={alt}
      onLoad={handleImageLoad}
    />
  )
}

export default LazyLoadImage
