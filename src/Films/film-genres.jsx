import React from 'react'

export default props => {
  const genres = props.genres.filter(genero => {
    return props.genres_ids.find(id => id === genero.id)
  })

  return genres.map(genre => (
    <span className="badge" key={ genre.name }>{ genre.name }</span>
  ))
}
