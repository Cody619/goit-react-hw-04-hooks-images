import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  return (
    <button className="Button" onClick={props.onClick}>
      Load More
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
}
