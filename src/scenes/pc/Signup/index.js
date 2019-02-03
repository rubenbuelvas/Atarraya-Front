import React from 'react';
import { connect } from 'react-redux';

import { Input } from 'semantic-ui-react'

import './styles.css';

class Signup extends React.Component {
    render() {
        if(this.props.loggedIn) {
            window.location.replace('/');
            return '';
        }

        return (
            <div id="signup">
                <h1>#BIENVENIDO</h1>

                <div id="signup-container">
                    <div className="ui grid">
                        <div className="six wide column">
                            <label>Nombre</label>
                        </div>
                        <div className="ten wide column">
                            <Input placeholder='' name='name' />
                        </div>

                        <div className="six wide column">
                            <label>Apellidos</label>
                        </div>
                        <div className="ten wide column">
                            <Input placeholder='' name='lastname' />
                        </div>

                        <div className="six wide column">
                            <label>Dirección</label>
                        </div>
                        <div className="ten wide column">
                            <Input placeholder='' name='address' />
                        </div>

                        <div className="six wide column">
                            <label>E-Mail</label>
                        </div>
                        <div className="ten wide column">
                            <Input placeholder='' name='email' />
                        </div>

                        <div className="six wide column">
                            <label>Contraseña</label>
                        </div>
                        <div className="ten wide column">
                            <Input placeholder='' name='password' />
                        </div>

                        <div className="six wide column">
                            <label>Confirmar contraseña</label>
                        </div>
                        <div className="ten wide column">
                            <Input placeholder='' name='confirm-password' />
                        </div>

                        <div className="six wide column">
                            <label>Celular</label>
                        </div>
                        <div className="ten wide column">
                            <Input placeholder='' name='cellphone' />
                        </div>
                    </div>

                    <br/>
                    <br/>

                    <div className="submit button">Ingresa</div>

                    <div className="ui divider"></div>
                    
                    <p>¿Ya tienes una cuenta en Atarraya? <a href="/login">Inicia sesión</a>.</p>
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    console.log(store);
    return {
        loggedIn: store.loggedIn
    };
})(Signup);