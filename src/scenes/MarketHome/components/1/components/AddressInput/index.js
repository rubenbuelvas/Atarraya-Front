import React from 'react';

import './styles.css';

export default class AddressInput extends React.Component {
    render() {
        return (
            <div id="addressInput">
                <h2 className="header">#Bienvenidos</h2>
                    <div className="ui input">
                    <input type="text" placeholder="INGRESA TU DIRECCIÓN"/>
                </div>
            </div>
        );
    }
}