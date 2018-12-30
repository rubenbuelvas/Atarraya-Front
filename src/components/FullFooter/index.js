import React from 'react';
import Footer from 'components/Footer';

import './styles.css';

export default class FullFooter extends React.Component {
    render() {
        return (
            <div id="full-footer">
                <h1 className="header">PESCADO PARA TODOS</h1>
                <div className="pin">
                    <div className="header">¡PIDE YA!</div>
                </div>
                <img id="domiciliario" src="/images/domiciliario.png" alt=""/>
                <Footer />
            </div>
        );
    }
}