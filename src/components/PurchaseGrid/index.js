import React from 'react';

import NetPrice from '../NetPrice';

import './styles.css';

export default class PurchaseGrid extends React.Component {
    render() {
        return (
            <div className="purchase-grid">
                <div className="ui three column grid">
                    <div className="column"></div>
                    <div className="column"><h2>Producto</h2></div>
                    <div className="column"><h2>Total</h2></div>
                    <div className="column">
                        <img src="/images/pescado.png" alt="Mixtura Atarraya"/>
                    </div>
                    <div className="column">
                        <div style={{ marginTop: '2vw' }}>
                            <div className="description">Mixtura Atarraya</div>
                            <div className="amount">1 unidad</div>
                            <div className="price">$7350</div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="price centered">$7350</div>
                    </div>
                    <div className="column">
                        <img src="/images/pescado.png" alt="Filete de tilapia"/>
                    </div>
                    <div className="column">
                        <div style={{ marginTop: '2vw'}}>
                            <div className="description">Filete de tilapia</div>
                            <div className="amount">3 unidades</div>
                            <div className="price">$5250</div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="price centered">$15750</div>
                    </div>
                </div>
        
                <div className="ui divider"></div>
        
                <div className="next ui three column grid">
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column">
                        <NetPrice gross={23100} delivery={2000} />
                    </div>
                </div>
            </div>
        );
    }
}