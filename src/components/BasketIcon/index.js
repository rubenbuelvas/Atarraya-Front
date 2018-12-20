import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

class BasketIcon extends React.Component {
    render() {
        return (
            <a href="/me">
                <div className="basket container">
                    <img id="basket" src="/images/basket.png" alt=""/>
                    <div className="ui blue circular label">{this.props.products}</div>
                </div>
            </a>
        );
    }
}

export default connect((store) => {
    console.log(store);
    return {
        products: store.basket.length
    };
})(BasketIcon);