import React from 'react';

import ProductPin from 'components/ProductPin';
import './styles.css';

export default class ProductPinList extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <div className="product-list pin">
                <div className="ui grid">
                    <div className="two wide column">
                        <i className="huge angle left icon"></i>
                    </div>

                    <div className="four wide column">
                        <ProductPin product={products[0]}/>
                    </div>
                    <div className="four wide column">
                        <ProductPin product={products[1]}/>
                    </div>
                    <div className="four wide column">
                        <ProductPin product={products[0]}/>
                    </div>

                    <div className="two wide column">
                        <i className="huge angle right icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}