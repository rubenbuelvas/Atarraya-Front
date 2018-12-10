import React from 'react';

import './styles.css';

export default class ProductPin extends React.Component {
    render() {
        const { product } = this.props;
        return (
            <div className="product pin" style={this.props.style}>
                <img src={product.image_url} alt={product.name + "image"}/>

                <p>
                <span style={{textTransform: 'uppercase'}}>{product.name}</span><br/> ({product.weight}) <br/> ${product.price}
                </p>
            </div>
        );
    }
}