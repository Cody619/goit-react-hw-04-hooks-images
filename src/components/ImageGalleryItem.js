import React from 'react'
import PropTypes from 'prop-types'

export const ImageGalleryItem = (props) => {
  const { src, onClick } = props

  return (
    <li className="ImageGalleryItem" onClick={onClick}>
      <img src={src} alt="все сломалось" className="ImageGalleryItem-image" />
    </li>
  )
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func,
}
