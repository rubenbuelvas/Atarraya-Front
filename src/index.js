import React from 'react';
import ReactDOM from 'react-dom';

import BasketIcon from './components/BasketIcon';
// import Home from './scenes/Home';
import Market from './scenes/Market';
import Home from './scenes/Home';
import NotFound from './scenes/404';

import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render((
    <BrowserRouter>
      <div id="app">
        <BasketIcon />
        <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/market" component={Market} />
              <Route exact path="/404" component={NotFound} />
              <Redirect to="/404" />
          </Switch>
      </div>
    </BrowserRouter>
  ), document.getElementById('root'))