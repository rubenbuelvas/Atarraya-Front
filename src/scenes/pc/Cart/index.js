import React from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import Navbar from 'components/Navbar';
import PurchaseGrid from 'components/PurchaseGrid';

import BackgroundImage from './images/carrito.jpg';

import './styles.css';

class Cart extends React.Component {
    render() {
        const { cart } = this.props;
        return (
            <div id="cart-page" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <MediaQuery query="(min-device-width: 1224px)">
                    <Navbar />
                </MediaQuery>

                <MediaQuery query="(max-device-width: 1224px)">
                    <div style={{ textAlign: 'center' }}>
                    <img id="home-logo" src="/images/logo-blue-big.png" alt="Logo"/>
                    </div>
                </MediaQuery>


                <h1>#CARRITO</h1>
                {cart.length > 0 ? 
                <div className="pg-wrapper">
                    <PurchaseGrid purchases={cart} />
                </div> : ''}
                

                <div className="ibc">
                    <a href="/checkout">
                        <div className="huge button">Comprar</div>
                    </a>
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