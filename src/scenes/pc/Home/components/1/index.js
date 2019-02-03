import React from 'react';

import Navbar from 'components/Navbar';
import AddressInput from './components/AddressInput';

import './styles.css';

export default class Presentation extends React.Component {

    render() {
        return (
            <div id="homeFirst" className="section">
                <Navbar />
                <AddressInput />
            </div>
        );
    }
}