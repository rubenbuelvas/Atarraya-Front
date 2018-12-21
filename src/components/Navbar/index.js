import React from 'react';
import { connect } from 'react-redux';

import { logout } from 'services/session/actions';

import './styles.css';

class Navbar extends React.Component {
    logout(e) {
        e.preventDefault();
        this.props.dispatch(logout());
        window.location.replace('/');
    }

    render() {
        const { loggedIn, currentUser } = this.props;
        return (
            <div id="navbar" className="ui grid">
                <div className="three wide column">
                    <a href="/" className="navbar item">Home</a>
                </div>
                <div className="three wide column">
                    <a href="/market" className="navbar item">Market</a>
                </div>
                <div className="four wide column">
                    <img src="/images/logo-blue-medium.png" alt=""/>
                </div>
                <div className="three wide column">
                    <a href="/lifestyle" className="navbar item">Lifestyle</a>
                </div>
                <div className="three wide column">
                    {
                        loggedIn ?
                        <a onClick={e => this.logout(e)} href="/" className="navbar item">{currentUser.name}</a>
                        :
                        <a href="/login" className="navbar item">Ingresa</a>
                    }
                    
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    return {
        loggedIn: store.loggedIn,
        currentUser: store.currentUser
    };  
})(Navbar);