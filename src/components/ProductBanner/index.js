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
                    <div className="ui grid">
                        <div className="two wide column">
                            <i className="angle left icon"></i>
                        </div>
                        <div className="twelve wide column">
                            <a href="#">
                                <p>
                                Filete de salmón <br/> (250 <span style={{textTransform: 'lowercase'}}>g</span>) <br/> $12.500
                                </p>
                            </a>                        
                        </div>
                        <div className="two wide column">
                            <i className="angle right icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}