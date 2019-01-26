import React from 'react'
import { Link } from 'react-router-dom'

import Genres from './film-genres'

export default props => {
  return props.films.map(film => (
    <div className="film_item row" key={film.id}>
      <div className="film_item_img col-lg-2">
        <Link to={'/detail/' + film.id}>
          <img
            src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + film.poster_path}
            alt={film.title}
          />
        </Link>
      </div>
      <div className="film_item_info col-lg-8">
        <div className="film_item_title">
          <Link to={'/detail/' + film.id}>
            {film.title}
          </Link>
        </div>
        <div className="film_item_description">
          {film.overview}
        </div>
        <div className="film_item_genres">
          <Genres
            genres={props.genres}
            genres_ids={film.genre_ids}
          />
        </div>
      </div>
    </div>
  ))
}
