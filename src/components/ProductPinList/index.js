import React from 'react';

import ProductPin from 'components/ProductPin';
import './styles.css';

const number2name = (number) => {
    switch(number) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 4:
            return "four";
        default:
            return "three"
    }
}

export default class ProductPinList extends React.Component {
    render() {
        const { columns, products, pinSize } = this.props;
        return (
            <div className="product-list pin">
                <div className="ui grid">
                    <div className="two wide column">
                        <i className="huge angle left icon"></i>
                    </div>

                    <div className="twelve wide column">
                        <div className={`ui ${number2name(columns)} column grid`}>
                            {
                                products.map(product => 
                                <div key={product.id} className="column">
                                    <ProductPin size={pinSize ? pinSize : '14'} product={product}/>
                                </div>)
                            }
                        </div>
                    </div>

                    <div className="two wide column">
                        <i className="huge angle right icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}