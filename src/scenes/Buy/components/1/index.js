import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import './styles.css';

const weightOptions = [
    {
        text: '250g',
        value: '250g',
    },

    {
        text: '500g',
        value: '500g',
    },

    {
        text: '1kg',
        value: '1kg',
    },
];

export default class Presentation extends React.Component {
    formatPrice(price) {
        let str = price.toString();
        if(str.length > 3) {
            let sub1 = str.substr(0, str.length - 3);
            let sub2 = str.substr(str.length - 3, str.length);
            return sub1 + "." + sub2;
        } else return str;
    }

    render() {
        const { product } = this.props;
        console.log(product);
        return (
            <div id="buyFirst" className="section">
                <h1 className="header">{product.name}</h1>

                <div className="carrousel"> 
                    <img src="images/pescado.png" alt=""/>
                </div>

                <div className="buy-info">
                    <p>Filete de salmón chileno congelado sin espinas, con piel.</p>
                    
                    <br/>
                    <div className="price">$ {this.formatPrice(product.price)} PESOS</div>

                    <div>
                    <Dropdown compact placeholder='Selecciona un precio...' selection options={weightOptions} />
                    <span className="button">Comprar</span>

                    </div>
                </div>
            </div>
        );
    }
}