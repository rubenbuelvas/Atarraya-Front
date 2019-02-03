import React from 'react';
import { data } from 'api';
import ProductPin from 'components/ProductPin';

import './styles.css';

export default class Third extends React.Component {
    render() {
        const width = 16;

        return (
            <div id="fifth" className="section">
                <h1 className="header">#MARISCOS</h1>
                
                <div className="ui grid">
                    <div className="two wide column">
                        <i className="huge angle left icon"></i>
                    </div>

                    <div className="four wide column">
                        <ProductPin dark size={width} color="#2C4663" product={data[0]}/>
                    </div>
                    <div className="four wide column">
                        <ProductPin product={data[0]} />
                    </div>
                    <div className="four wide column">
                        <ProductPin product={data[0]} style={{backgroundColor: '#2C4663', color: 'white'}}/>
                    </div>

                    <div className="two wide column">
                        <i className="huge angle right icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}