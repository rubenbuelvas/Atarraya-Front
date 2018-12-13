import React from 'react';

import ProductPin from 'components/ProductPin';
import { data } from 'api';

import './styles.css';

export default class FirstProduct extends React.Component {
    render() {
        const width = 16;
        return (
            <div id="marketSecond" className="section">
                <div style={{marginLeft: `${width}vw`, marginRight: `${width}vw`}} className="ui three column grid">
                    <div className="column">
                        <ProductPin width={width} product={data[0]}/>
                    </div>
                    <div className="column">
                        <ProductPin width={width} product={data[1]}/>
                    </div>
                    <div className="column">
                        <ProductPin width={width} product={data[0]}/>
                    </div>

                    <div className="column">
                        <ProductPin width={width} product={data[0]}/>
                    </div>
                    <div className="column">
                        <ProductPin width={width} product={data[1]}/>
                    </div>
                    <div className="column">
                        <ProductPin width={width} product={data[0]}/>
                    </div>    
                </div>
            </div>
        );
    }
}