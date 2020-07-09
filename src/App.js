import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/layouts/Navigation';
import Home from './components/pages/Home';
import Flower from './components/flowers/Flower';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import FlowerState from './context/flower/FlowerState';

const App = () => {
  return (
    <FlowerState>
      <Router>
        <Fragment>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/flower' component={Flower} />
          </Switch>
        </Fragment>
      </Router>
    </FlowerState>
  );
};

export default App;
