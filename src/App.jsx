import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import updateUser from '../static/updateUser.png';
import logoHoop from '../static/logoHoop.png';
import backgroundTriangle from '../static/backgroundTriangle.png';
import About from './About';
import Home from './Home';
import './index.css';
import 'babel-core/register';
import 'babel-polyfill';

class App extends Component {

  render() {
    return (
      <Router>

        <Switch>

          <Route exact path="/Hoop/" component={Home} />
          <Route path="/Hoop/about" component={About} />
        </Switch>


      </Router>


    );
  }
}

export default App;