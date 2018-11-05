import React from 'react';

import './styles.css';
import ProductBoxList from '../../../../components/ProductBoxList';

export default class PideYa extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="huge header" id="pideYaHeader">#PIDEYA</div>
                <img id="domiciliario" src="images/domiciliario.png" alt=""/>
                <div id="pideYaGrid" className="ui grid">
                    <div className="ten wide column">
                        <div className="ui container">
                            <ProductBoxList style={{margin: "0 auto", textAlign: 'center'}}/>                        
                        </div>
                    </div>
                    <div className="six wide column">
                        <div className="header wrapper">
                            <div className="big header">
                                Obtén un 15%
                            </div>
                            <div className="big header">de descuento en</div>
                            <div className="big header">tu próxima compra</div>
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}