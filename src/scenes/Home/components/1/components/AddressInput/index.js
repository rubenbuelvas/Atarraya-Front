import React from 'react';

import './styles.css';

export default class AddressInput extends React.Component {
    render() {
        return (
            <div id="addressInput">
                <div className="header">#Bienvenidos</div>
                <img id="bogota-input" src="/images/bogota-outline.png" alt=""/>
                <div className="ui input">
                    <input type="text" placeholder="INGRESA TU DIRECCIÓN"/>
                </div>
            </div>
        );
    }
}