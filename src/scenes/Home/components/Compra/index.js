import React from 'react';
import ProductBanner from 'components/ProductBanner';

import './styles.css';

const data = [
    {
        name: "Filete de salmón",
        weight: "250g",
        price: "12500",
        available: 10,
        image_url: 'images/pescado.png'
    },

    {
        name: "Filete de mojarra",
        weight: "250g",
        price: "12500",
        available: 10,
        image_url: 'images/pescado.png'
    },
]

export default class Compra extends React.Component {
    render() {
        return (
            <div className="section">
                    <div id="toMarket">
                        <span>MARKET</span>
                    </div>
                <ProductBanner products={data}/>
                <div className="huge header" id="compraHeader">#COMPRA</div>
            </div>
        );
    }
}