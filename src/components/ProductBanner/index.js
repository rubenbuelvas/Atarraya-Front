import React from 'react';

import './styles.css';

export default class ProductBanner extends React.Component {
    render() {
        return (
            <div className="product banner">
                <div className="wrapper">
                    <img src="images/pescado.png" alt=""/>
                </div>

                <div className="description">
                    <i className="angle left icon"></i>
                    <p>
                    Filete de salmón <br/> (250 <span style={{textTransform: 'lowercase'}}>g</span>) <br/> $12.500
                    </p>
                    <i className="angle right icon"></i>
                </div>
            </div>
        );
    }
}