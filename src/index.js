import React from 'react';
import ReactDOM from 'react-dom';

import BasketIcon from './components/BasketIcon';
// import Home from './scenes/Home';
import Home from './scenes/MarketHome';
import NotFound from './scenes/404';

import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render((
    <BrowserRouter>
      <div id="app">
        <BasketIcon />
        <Switch>
              <Route path="/" component={Home} />
              <Route exact path="/404" component={NotFound} />
              <Redirect to="/404" />
          </Switch>
      </div>
    </BrowserRouter>
  ), document.getElementById('root'))