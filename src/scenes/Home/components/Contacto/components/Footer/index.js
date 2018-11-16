import React from 'react';

import './styles.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer wrapper">
                <div id="footer">
                    <div className="ui grid">
                        <div className="first four wide column">
                            <img src="images/logo.png" alt="Atarraya logo" />
                        </div>
                        <div className="second eight wide column">
                            <div className="ui two column grid">
                                <div className="column">
                                    <a href="/">Home</a><br/>
                                    <a href="/market">Market</a><br/>
                                    <a href="/lifestyle">Lifestyle</a>
                                </div>
                                <div className="column">
                                    <a href="/nosotros">Nosotros</a><br/>
                                    <a href="/contacto">Contacto</a><br/>
                                    <a href="/faq">FAQ</a>
                                </div>
                            </div>
                        </div> 
                        <div className="third four wide column">
                            <a>#SIGUENOS</a>
                            <i className="huge instagram icon"></i><i className="huge facebook icon"></i>
                        </div>
                    </div>              
                </div>
            </div>
        );
    }
}