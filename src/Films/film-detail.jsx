import React, { Component, Fragment } from 'react'
import api from '../services/api'

import Header from '../components/header'

class FilmDetail extends Component {
  state = {
    film: {},
    languageFilm: '',
    genres: []
  }

  componentDidMount() {
    const id = this.props.match.params.id

    api.get(`/movie/${id}?api_key=a09df8faee96d679566318f8baad0784`)
      .then(res => {
        this.setState(() => ({
          film: res.data,
          languageFilm: res.data.spoken_languages[0].name,
          genres: res.data.genres
        }))
    })
  }

  render() {
    const film = this.state.film
    const genres = this.state.genres

    return (
      <Fragment>
        <header className="film_header row">
          <a href="/">Movies</a>
        </header>

        <div className="film_detail row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="film_detail_title col-lg-12">
              <div className="row">
                <div className="film_detail_title_text col-lg-10">
                  { film.title }
                </div>
                <div className="film_detail_title_date col-lg-2">
                  { film.release_date }
                </div>
              </div>
            </div>

            <div className="row">
              <div className="film_detail_info col-lg-8">
                <div className="row">
                  <div className="film_detail_info_sinopsys col-lg-12">
                    <span className="film_detail_info_title">
                      Sinopse
                    </span>
                    <p>
                      {film.overview}
                    </p>
                  </div>
                  <div className="film_detail_info_general col-lg-12">
                    <span className="film_detail_info_title">
                      Information
                    </span>
                    <div className="row">
                      <div className="col-lg-2">
                        <p className="title">Situacion</p>
                        <p className="info">{film.status}</p>
                      </div>
                      <div className="col-lg-2">
                        <p className="title">Language</p>
                        <p className="info">{ this.state.languageFilm }</p>
                      </div>
                      <div className="col-lg-2">
                        <p className="title">Runtime</p>
                        <p className="info">{film.runtime} min</p>
                      </div>
                      <div className="col-lg-2">
                        <p className="title">Budget</p>
                        <p className="info">{film.budget}</p>
                      </div>
                      <div className="col-lg-2">
                        <p className="title">Recipe</p>
                        <p className="info">{film.revenue}</p>
                      </div>
                      <div className="col-lg-2">
                        <p className="title">Profit</p>
                        <p className="info">{film.revenue - film.budget}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {
                      this.state.genres.map(genre => (
                        <div className="badge" key={genre.name}>{genre.name}</div>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="film_detail_image col-lg-4">
                <img
                  src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + film.poster_path}
                  alt={film.title}
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default FilmDetail
