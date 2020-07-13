import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/layouts/Navigation';
import Home from './components/pages/Home';
import Flower from './components/flowers/Flower';
import Directory from './components/pages/Directory';
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
            <Route path='/directory' component={Directory} />
          </Switch>
        </Fragment>
      </Router>
    </FlowerState>
  );
};

export default App;
