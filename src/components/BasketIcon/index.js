import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

class BasketIcon extends React.Component {
    render() {
        return (
            <a href="/cart">
                <div className="cart container">
                    <img id="cart" src="/images/cart.png" alt=""/>
                    {
                        this.props.products ?
                        <div className="ui circular label">{this.props.products}</div>
                        : ''
                    }
                </div>
            </a>
        );
    }
}

export default connect((store) => {
    return {
        products: store.cart.length
    };
})(BasketIcon);