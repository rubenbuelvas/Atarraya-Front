import React from 'react';

import './styles.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer wrapper">
                <div id="footer">
                    <div className="ui three column grid">
                        <div className="first column">
                        <img src="images/atarrayaLogo.svg" alt="images/atarrayaLogo.png" />
                        </div>
                        <div className="second column">
                            <div className="ui two column grid">
                                <div className="column">
                                    <span>Home</span><br/>
                                    <span>Market</span><br/>
                                    <span>Lifestyle</span>
                                </div>
                                <div className="column">
                                    <span>Nosotros</span><br/>
                                    <span>Contacto</span><br/>
                                    <span>FAQ</span>
                                </div>
                            </div>
                        </div> 
                        <div className="third column">
                            <span>#SIGUENOS</span>
                        </div>
                    </div>              
                </div>
            </div>
        );
    }
}