import React from 'react';

import './styles.css';

export default class ProductPin extends React.Component {
    render() {
        const { dark, width, color, product } = this.props;
        return (
            <div className="product pin" 
                style={{
                    width: `${width}vw`, 
                    height: `${width}vw`,
                    borderRadius: `${width/2}vw`,
                    backgroundColor: color,
                    color: dark ? 'white' : '#2C4663',
                    ...this.props.style}
                } onClick={() => window.location.replace(`/buy/${product.id}`)}>
                <img src={product.image_url} alt={product.name + "image"}/>

                <p>
                <span style={{textTransform: 'uppercase'}}>{product.name}</span><br/> ({product.weight}) <br/> ${product.price}
                </p>
            </div>
        );
    }
}