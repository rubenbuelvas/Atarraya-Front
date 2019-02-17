import React from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import { logout } from 'services/session/actions';

import './styles.css';

class Navbar extends React.Component {
    logout(e) {
        e.preventDefault();
        this.props.dispatch(logout());
        window.location.replace('/');
    }

    render() {
        const { dark, loggedIn } = this.props;
        const color = dark ? "white" : "#2C4663";

        const NavbarItem = props => (
            <a href={props.href} style={{color: props.color}} className="navbar item">{props.text}</a>
        );

        return (
            <div id="navbar-container">
                <MediaQuery query="(max-device-width: 1224px)">
                    <img id="home-logo" src="/images/logo-blue-big.png" alt="Logo"/>
                </MediaQuery>


                <MediaQuery query="(min-device-width: 1224px)">
                    <div id="navbar" className="ui grid">
                        <div className="three wide column">
                            <NavbarItem href="/" text="Home" color={color} />
                        </div>
                        <div className="three wide column">
                            <NavbarItem href="/market" text="Market" color={color} />
                        </div>
                        <div className="four wide column">
                            <img src="/images/logo-blue-medium.png" alt=""/>
                        </div>
                        <div className="three wide column">
                            <NavbarItem href="/lifestyle" text="Lifestyle" color={color} />
                        </div>
                        <div className="three wide column">
                            <NavbarItem href={`/${loggedIn ? "me" : "login"}`} text={loggedIn ? "Perfil" : "Ingresa"} color={color} />
                        </div>                    
                    </div>
                </MediaQuery>
                
            </div>
        );
    }
}

export default connect((store) => {
    return {
        loggedIn: store.loggedIn
    };  
})(Navbar);