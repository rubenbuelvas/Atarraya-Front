import React from 'react';
import './styles.css';

export default class BasketIcon extends React.Component {
    render() {
        return (
            <div className="basket container">
              <img id="basket" src="/images/basket.png" alt=""/>
            </div>
        );
    }
}