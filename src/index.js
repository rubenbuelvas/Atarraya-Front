import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';

import Market from './scenes/Market';
import Home from './scenes/Home';
import Article from './scenes/Article';
import Buy from './scenes/Buy';
import Lifestyle from './scenes/Lifestyle';
import Recipe from './scenes/Recipe';
import NotFound from './scenes/404';

import BasketIcon from './components/BasketIcon';

import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={(() => <div>Loading</div>)()} persistor={persistor}>
      <BrowserRouter>
        <div id="app">
          {/* <BasketIcon /> */}
          <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/market" component={Market} />
                <Route path="/buy/:id" component={Buy} />
                <Route path="/lifestyle" component={Lifestyle} />
                <Route path="/blog/:id" component={Article} />
                <Route path="/recipes/:id" component={Recipe} />
                <Route exact path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
), document.getElementById('root'))