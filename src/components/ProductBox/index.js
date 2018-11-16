import React from 'react';

import './styles.css';

export default class ProductBox extends React.Component {
    render() {
        const { product } = this.props;

        if(product) {
            return (
                <div className="product box">
                    <div className="wrapper">
                        <img src={product.image_url} alt=""/>
                    </div>
    
                    <div className="description">
                        <p>
                        <span style={{textTransform: 'uppercase'}}>{product.name}</span><br/> ({product.weight}) <br/> ${product.price}
                        </p>
                    </div>
                </div>
            );
        } else {
            return 'Loading...';
        }
    }
}