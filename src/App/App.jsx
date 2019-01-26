import '../assets/sass/index.scss'

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Films from '../Films/film'

const About = ({ match }) => <h2>ID: { match.params.id }</h2>

const App = props => (
  <Router>
    <div>
      <Route path="/" exact component={ Films } />
      <Route path="/detail/:id" component={ About } />
    </div>
  </Router>
)

export default App
