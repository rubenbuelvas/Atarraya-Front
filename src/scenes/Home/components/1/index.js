import React from 'react';
import AddressInput from './components/AddressInput';
import Navbar from './components/Navbar';

export default class Presentation extends React.Component {

    render() {
        return (
            <div className="section">
                <Navbar />
                <AddressInput />
            </div>
        );
    }
}