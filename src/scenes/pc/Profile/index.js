import React from 'react';

import Navbar from 'components/Navbar';
import FullFooter from 'components/FullFooter';
import OrderBox from './components/OrderBox';

import BackgroundImage from './images/backgroundProfile.jpg';

import './styles.css';

export default class profile extends React.Component {
    render() {
        return (
            <div id="profile" style={{backgroundImage: `url(${BackgroundImage})`}}>
                <Navbar dark />

                <div id="profile-container">
                    <h1>#PERFIL</h1>
                    <h4>Información de tu cuenta</h4>
                        <div id="profile-info" className="ui grid">
                            <div className="six wide column"></div>
                            <div className="ten wide column">
                                <div className="ui grid">
                                    <div className="six wide column">sexo:</div>
                                    <div className="ten wide column">femenino</div>

                                    <div className="six wide column">fecha de nacimiento:</div>
                                    <div className="ten wide column">01/10/91</div>

                                    <div className="six wide column">email:</div>
                                    <div className="ten wide column">fulanadetal@gmail.com</div>

                                    <div className="six wide column">celular:</div>
                                    <div className="ten wide column">3219856658</div>

                                    <div className="six wide column">dirección:</div>
                                    <div className="ten wide column">Calle 152 # 40-14</div>
                                </div>
                            </div>
                        </div>
                    <br/>
                    <h4 style={{ marginLeft: '5vw' }}>Tus pedidos</h4>
                    <OrderBox />
                </div>
                
                <div className="footer wrapper">
                    <FullFooter />                
                </div>
            </div>
        );
    }
}