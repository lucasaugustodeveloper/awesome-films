import React from 'react'
import Genres from './film-genres'

export default props => {
  const renderFilms = () => {
    const films = props.films || []

    return films.map(film => (
      <div className="film_item row" key={film.id}>
        <div className="col-lg-2">
          <img
            src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + film.poster_path }
            alt={ film.title }
          />
        </div>
        <div className="col-lg-8">
          <div className="film_item_title">
            { film.title }
          </div>
          <div className="film_item_description">
            { film.overview }
          </div>
          <div className="film_item_genres">
            <Genres
              genres={ props.genres }
              genres_ids={ film.genre_ids }
            />
          </div>
        </div>
      </div>
    ))
  }

  return renderFilms()
}
