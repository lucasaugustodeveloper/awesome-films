import React from 'react'

export default props => {
  const genres = props.genres.filter(genero => {
    return props.genres_ids.find(id => id === genero.id)
  })

  return genres.map(genre => (
    <div className="badge" key={ genre.name }>{ genre.name }</div>
  ))
}
