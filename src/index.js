import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';

import Market from './scenes/Market';
import Home from './scenes/Home';
import Article from './scenes/Article';
import Buy from './scenes/Buy';
import Login from './scenes/Login';
import Faq from './scenes/FAQ';
import Signup from './scenes/Signup';
import Profile from './scenes/Profile';
import Lifestyle from './scenes/Lifestyle';
import Recipe from './scenes/Recipe';
import NotFound from './scenes/404';

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
      visible: false
    }

    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible = () => this.setState(prevState => ({ visible: true }))

  render() {
    const { visible } = this.state;
    return (
      <div id="wrapper">
        <SidebarIcon onClick={this.toggleVisible} visible={this.state.visible} />
        <BasketIcon />

        <Sidebar.Pushable>
          <LocalSidebar visible={visible} onHide={() => this.setState({ visible: false })} />

          <Sidebar.Pusher dimmed={visible}>
            <div id="app">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/market" component={Market} />
                <Route path="/login" component={Login} />
                <Route path="/faq" component={Faq} />
                <Route path="/signup" component={Signup} />
                <Route path="/me" component={Profile} />
                <Route path="/buy/:id" component={Buy} />
                <Route path="/lifestyle" component={Lifestyle} />
                <Route path="/blog/:id" component={Article} />
                <Route path="/recipes/:id" component={Recipe} />
                <Route exact path="/404" component={NotFound} />
                <Redirect to="/404" />
              </Switch>
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