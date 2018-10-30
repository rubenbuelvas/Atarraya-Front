import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './scenes/Home';
import NotFound from './scenes/404';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
      <Switch>
          <Route path="/" component={Home} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  ), document.getElementById('root'))