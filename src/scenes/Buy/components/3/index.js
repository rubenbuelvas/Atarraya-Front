import React from 'react';

import ProductPin from 'components/ProductPin';
import Footer from 'components/Footer';

import { data } from 'api';
import './styles.css';

export default class Third extends React.Component {
    render() {
        const width = 16;
        return (
            <div id="buy3" className="section">
                <h2 className="header">TAMBIÉN TE RECOMENDAMOS...</h2>

                <div id="buy-see-also" style={{marginLeft: `${width/2}vw`, marginRight: `${width/2}vw`}} className="ui four column grid">
                    <div className="column">
                        <ProductPin dark width={width} color="#2C4663" product={data[0]}/>
                    </div>
                    <div className="column">
                        <ProductPin dark width={width} color="#6AAEA7" product={data[1]}/>
                    </div>
                    <div className="column">
                        <ProductPin dark width={width} color="#2C4663" product={data[0]}/>
                    </div>
                    <div className="column">
                        <ProductPin dark width={width} color="#6AAEA7" product={data[0]}/>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

