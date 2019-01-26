import './film.scss'

import React, { Component, Fragment } from 'react';
import api from '../services/api'

import Header from '../components/header'
import FilmItem from './film-item'
import FilmInput from './film-input'

export default class Films extends Component {
  state = {
    films: [],
    genres: [],
    title: 'Movies'
  }

  componentDidMount() {
    api.get('/discover/movie?api_key=a09df8faee96d679566318f8baad0784')
      .then(res => {
        const films = res.data.results
        const arr = []

        films.map(film => {
          film.genre_ids.map(id => {
            arr.push(id)
          })
        })

        this.setState({
          films: res.data.results
        })
      })
      .catch(error => console.log(error))

    api.get('/genre/movie/list?api_key=a09df8faee96d679566318f8baad0784')
      .then(res => {
          this.setState({
            genres: res.data.genres
          })
        })
  }

  render() {
    return (
      <Fragment>
        <header className="film_header row">
          Movies
        </header>

        <div className="film row">
          <div className="col-lg-10 col-lg-offset-2">
            <FilmInput />
          </div>

          <div className="film_list col-lg-8 col-lg-offset-2">
            <FilmItem
              films={ this.state.films }
              genres={ this.state.genres }
            />
          </div>
        </div>
      </Fragment>
    )
  }
}
