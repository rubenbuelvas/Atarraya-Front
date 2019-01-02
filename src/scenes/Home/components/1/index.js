import React from 'react';
import Navbar from 'components/Navbar';
import AddressInput from './components/AddressInput';

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