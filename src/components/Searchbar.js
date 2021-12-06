import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const Searchbar = (props) => {
  const { onSubmit } = props

  const [searchText, setSearchText] = useState('')

  const handleChange = (event) => {
    setSearchText(event.currentTarget.value)
  }

  const handleSubmite = (event) => {
    event.preventDefault()
    onSubmit(searchText)
  }

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmite}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          value={searchText}
          onChange={handleChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}
