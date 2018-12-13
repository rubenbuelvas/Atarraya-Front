import React from 'react';
import ProductPin from 'components/ProductPin';
import { data } from 'api';
import './styles.css';

export default class Presentation extends React.Component {
    render() {
        const width = 14;
        return (
            <div id="marketFirst" className="section">
                <div className="header">#MARKET</div>
                    <div style={{marginLeft: `${width+1}vw`, marginRight: `${width+1}vw`}} className="ui three column grid">
                        <div className="column">
                            <ProductPin width={width} color={"#D78D73"} product={data[0]}/>
                        </div>
                        <div className="column">
                            <ProductPin width={width} product={data[1]}/>
                        </div>
                        <div className="column">
                            <ProductPin width={width} product={data[0]}/>
                        </div>

                        <div className="column">
                            <ProductPin width={width} color={"#D591B4"} product={data[0]}/>
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