import '../assets/sass/index.scss'

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Films from '../Films/film'
import FilmDetail from '../Films/film-detail'

const App = props => (
  <Router>
    <div>
      <Route path="/" exact component={ Films } />
      <Route path="/detail/:id" component={ FilmDetail } />
    </div>
  </Router>
)

export default App
