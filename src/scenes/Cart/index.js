import React from 'react';
import { connect } from 'react-redux';

import Navbar from 'components/Navbar';
import PurchaseGrid from 'components/PurchaseGrid';

import BackgroundImage from './images/carrito.jpg';

import './styles.css';

class Cart extends React.Component {
    render() {
        const { cart } = this.props;
        return (
            <div id="cart" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <Navbar />

                <h1>#CARRITO</h1>
                {cart.length > 0 ? 
                <div className="pg-wrapper">
                    <PurchaseGrid purchases={cart} />
                </div> : ''}
                

                <div className="ibc">
                    <a href="/checkout">
                        <div className="huge button">Comprar</div>
                    </a>
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