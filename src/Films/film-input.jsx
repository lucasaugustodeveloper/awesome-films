import React from 'react'

export default ({ searchInput, handleChange }) => (
  <div className="film_search col-lg-8 col-lg-offset-0">
    <input
      type="text"
      className="form-control"
      id="search"
      placeholder="enter search you film"
      value={ searchInput }
      onChange={ handleChange }
    />
  </div>
)
