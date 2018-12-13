import React from 'react';

import './styles.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer wrapper">
                <div id="footer">
                    <div className="ui grid">
                        <div className="first four wide column">
                            <img src="/images/logo-white.png" alt="Atarraya logo" />
                        </div>
                        <div id="footer-links" className="second eight wide column">
                            <div className="ui two column grid">
                                <div className="column">
                                    <a href="/">Home</a><br/>
                                    <a href="/market">Market</a><br/>
                                    <a href="/lifestyle">Lifestyle</a>
                                </div>
                                <div className="column">
                                    <a href="/nosotros">Nosotros</a><br/>
                                    <div id="footer-icons">
                                        <a href="/contacto">Contacto</a><br/>
                                        <a href="/faq">FAQ</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div id="footer-social" className="third four wide column">
                            <a id="footer-title" href="/siguenos">#SÍGUENOS</a>
                            <a rel="noopener noreferrer" href="https://www.instagram.com/atarraya.fishmarket/" target="_blank"><i className="huge instagram icon"></i></a>
                            <a rel="noopener noreferrer" href="https://www.facebook.com/atarraya.co/" target="_blank"><i className="huge facebook icon"></i></a>
                            
                        </div>
                    </div>              
                </div>
            </div>
        );
    }
}