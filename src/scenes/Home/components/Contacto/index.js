import React from 'react';
import Footer from 'components/Footer';

import './styles.css';

export default class Contacto extends React.Component {
    render() {
        return (
            <div className="section" id="contactoSection" style={{ backgroundImage: `url("images/backgroundContacto.png")` }}>
                <div id="title">
                    PESCADO PARA TODOS
                </div>
                
                <Footer />
            </div>
        );
    }
}