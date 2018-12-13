import React from 'react';

import './styles.css';

export default class Navbar extends React.Component {
    render() {
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
                    <a href="/" className="navbar item">Ingresa</a>
                </div>
            </div>
        );
    }
}