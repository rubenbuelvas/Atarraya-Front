import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { tags } from 'api';
import Tag from './components/Tag';
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

export default class BuyFirst extends React.Component {
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

        if(!product)
            return <div>Loading...</div>

        return (
            <div id="buy1" className="section">
                <div className="header">{product.name}</div>

                <div className="carrousel"> 
                    <img src="/images/pescado.png" alt=""/>
                </div>

                <div className="buy-info">
                    <div className="tags">
                        <Tag tag={tags[0]}/>
                        <Tag tag={tags[1]}/>
                    </div>

                    <br/>
                    <br/>

                    <p>Filete de salmón chileno congelado sin espinas, con piel.</p>

                    <br/>
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