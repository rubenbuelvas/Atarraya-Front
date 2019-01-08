import React from 'react';

import { connect } from 'react-redux';
import { logout } from 'services/session/actions';

import { Sidebar, Menu } from 'semantic-ui-react';

import './styles.css';

class LocalSidebar extends React.Component {
    render() {
        const { loggedIn } = this.props;
        return (
            <Sidebar
                id="sidebar"
                as={Menu}
                animation="overlay"
                vertical
                onHide={this.props.onHide}
                visible={this.props.visible}
                width="wide">
                <a href="/" className="item">Home</a>
                <a href="/market" className="item">Market</a>
                <a href="/lifestyle" className="item">Lifestyle</a>
                <a href={`/${loggedIn ? "me" : "login"}`} className="item">{loggedIn ? "Perfil" : "Ingresar"}</a>
                <a href="/faq" className="item">FAQ</a>
                <a href="/" className="item" onClick={() => this.props.dispatch(logout())}>cerrar sesión</a>
            </Sidebar>
        );
    }
}

export default connect((store) => {
    return {
        loggedIn: store.loggedIn
    };  
})(LocalSidebar);