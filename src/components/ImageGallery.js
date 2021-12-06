import React, { useState } from 'react'
import { ImageGalleryItem } from './ImageGalleryItem'
import { Modal } from './Modal'
import PropsTypes from 'prop-types'

export const ImageGallery = (props) => {
  const { imgs } = props

  const [isModalOpen, setIsModalOpen] = useState(false)

  const modalClose = () => setIsModalOpen(false)

  const [imgUrl, setImgUrl] = useState('')

  const modalOpen = (imgUrl) => {
    setImgUrl(imgUrl)
    setIsModalOpen(true)
  }

  return (
    <div>
      <ul className="ImageGallery">
        {imgs.map((item) => {
          return (
            <ImageGalleryItem
              key={item.id}
              src={item.previewURL}
              onClick={() => modalOpen(item.largeImageURL)}
            />
          )
        })}
      </ul>
      {isModalOpen ? <Modal onClose={modalClose} bigUrl={imgUrl} /> : null}
    </div>
  )
}

ImageGallery.propsTypes = {
  imgs: PropsTypes.arrayOf(PropsTypes.object),
}
