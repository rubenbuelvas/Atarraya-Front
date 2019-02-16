import React from 'react';

import { data } from 'api';
import { recipes } from 'api';

import './styles.css';
import ProductPin from 'components/ProductPin';
import RecipeSlideshow from './components/RecipeSlideshow';

export default class MobileProductSecond extends React.Component {
    render() {
        return (
            <div id="buy2" className="section">
                <h1 className="header">¿QUÉ PREPARAR?</h1>

                <RecipeSlideshow recipes={recipes} />
                
                <ProductPin dark product={data[0]} color="#2C4663" size={38} style={{marginTop: '22vh'}} />
            </div>
        );
    }
}