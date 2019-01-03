import React from 'react';
import { connect } from 'react-redux';

import Navbar from 'components/Navbar';
import PurchaseGrid from 'components/PurchaseGrid';

import BackgroundImage from './images/carrito.jpg';

import './styles.css';

class Cart extends React.Component {
    render() {
        return (
            <div id="cart" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <Navbar />

                <h1>#CARRITO</h1>
                <div className="pg-wrapper">
                    <PurchaseGrid />
                </div>
                
                <div className="ibc">
                    <div className="huge button">Comprar</div>
                    <br/>
                    <br/>
                    <br/>
                    <a href="/market">Seguir comprando...</a>
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    return {
        cart: store.cart
    };
})(Cart);