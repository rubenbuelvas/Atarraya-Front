import React from 'react';

import ProductPin from 'components/ProductPin';
import { data } from 'api';
import './styles.css';

export default class Third extends React.Component {
    render() {
        return (
            <div id="third" className="section">
                <h2 className="header">#LOSMÁSVENDIDOS</h2>

                <div className="ui grid">
                    <div className="two wide column">
                        <i className="huge angle left icon"></i>
                    </div>

                    <div className="four wide column">
                        <ProductPin product={data[0]}/>
                    </div>
                    <div className="four wide column">
                        <ProductPin product={data[1]}/>
                    </div>
                    <div className="four wide column">
                        <ProductPin product={data[0]}/>
                    </div>

                    <div className="two wide column">
                        <i className="huge angle right icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}

