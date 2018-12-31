import React from 'react';
import Navbar from 'components/Navbar';
import AddressInput from './components/AddressInput';

export default class Presentation extends React.Component {

    render() {
        return (
            <div className="section navbar-scene">
                <Navbar />
                <AddressInput />
            </div>
        );
    }
}