import React from 'react';

import ProductBox from '../ProductBox';

const data = {
    name: "Filete de salmón",
    weight: "250g",
    price: "12500",
    available: 10,
    image_url: 'images/pescado.png'
}

export default class ProductBoxList extends React.Component {
    render() {
        return (
            <div style={this.props.style}>
                <ProductBox product={data}/>
                <ProductBox product={data}/>
                <ProductBox product={data}/>
            </div>
        );
    }
}