import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export const Modal = (props) => {
  const { onClose, bigUrl } = props

  useEffect(() => {
    const handlePress = (event) => {
      if (event.code === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handlePress)

    return () => {
      window.removeEventListener('keydown', handlePress)
    }
  }, [onClose])

  const handleOverLayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return ReactDOM.createPortal(
    <div className="Overlay" onClick={handleOverLayClick}>
      <div className="Modal">
        <img src={bigUrl} alt="" />
      </div>
    </div>,
    document.getElementById('ModalRoot'),
  )
}

Modal.propTypes = {
  onClose: PropTypes.func,
  bigUrl: PropTypes.string,
}
