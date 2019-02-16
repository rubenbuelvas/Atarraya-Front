import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';

import MediaQuery from 'react-responsive';

import Home from './scenes/pc/Home';
import Market from './scenes/pc/Market';
import Admin from './scenes/pc/Admin';
import Cart from './scenes/pc/Cart';
import Article from './scenes/pc/Article';
import Product from './scenes/pc/Product';
import Login from './scenes/pc/Login';
import Faq from './scenes/pc/FAQ';
import Signup from './scenes/pc/Signup';
import Profile from './scenes/pc/Profile';
import Lifestyle from './scenes/pc/Lifestyle';
import Recipe from './scenes/pc/Recipe';
import NotFound from './scenes/pc/404';
import Checkout from './scenes/pc/Checkout';

import MobileHome from './scenes/mobile/Home';
import MobileMarket from './scenes/mobile/Market';
import MobileProduct from './scenes/mobile/Product';

import BasketIcon from './components/BasketIcon';
import SidebarIcon from './components/SidebarIcon';
import LocalSidebar from './components/LocalSidebar';

import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import { Sidebar } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

class SidebarWrapper extends React.Component {
  constructor() {
    super();

    this.state = {
      sidebarVisible: false,
      cartVisible: true
    }
    
    this.toggleCart = this.toggleCart.bind(this);
  }

  toggleCart = (cartVisible) => this.setState(cartVisible);

  render() {
    const { sidebarVisible } = this.state;
    return (
      <div id="wrapper">
        <SidebarIcon onClick={() => this.setState({ sidebarVisible: true })} visible={sidebarVisible} />
        <BasketIcon />

        <Sidebar.Pushable>
          <LocalSidebar visible={sidebarVisible} onHide={() => this.setState({ sidebarVisible: false })} />

          <Sidebar.Pusher dimmed={sidebarVisible}>
            <div id="app">
              <MediaQuery query="(min-device-width: 1224px), (orientation: landscape)">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/admin" component={Admin} />
                  <Route path="/market" component={Market} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/checkout" component={Checkout} />
                  <Route path="/login" component={Login} />
                  <Route path="/faq" component={Faq} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/me" component={Profile} />
                  <Route path="/product/:id" component={Product} />
                  <Route path="/lifestyle" component={Lifestyle} />
                  <Route path="/blog/:id" component={Article} />
                  <Route path="/recipes/:id" component={Recipe} />
                  <Route exact path="/404" component={NotFound} />
                  <Redirect to="/404" />
                </Switch>
              </MediaQuery>
              <MediaQuery query="(max-device-width: 1224px)">
                <Switch>
                  <Route exact path="/" component={MobileHome} />
                  <Route exact path="/market" component={MobileMarket} />
                  <Route exact path="/product/:id" component={MobileProduct} />
                  <Route path="/recipes/:id" component={Recipe} />
                  <Redirect to="/404" />
                </Switch>
              </MediaQuery>
            </div>            
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={(() => <div>Loading</div>)()} persistor={persistor}>
      <BrowserRouter>
        <SidebarWrapper />
      </BrowserRouter>
    </PersistGate>
  </Provider>
), document.getElementById('root'))