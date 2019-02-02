import React from 'react';
import Navbar from 'components/Navbar';

import Searchbar from './components/Searchbar';

import './styles.css';

export default class MarketFirst extends React.Component {
    render() {
        return (
            <div id="marketFirst" className="section">
                <Navbar />

                <div className="page-title">#MARKET</div>

                <div className="query">
                    <Searchbar />

                    <div className="ui center aligned grid">
                        <div className="big button">filetes</div>
                        <div className="big button">mariscos</div>
                    </div>
                </div>
            </div>
        );
    }
}