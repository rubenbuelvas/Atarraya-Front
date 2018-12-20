import React from 'react';
import { Input } from 'semantic-ui-react';

export default class Login extends React.Component {
    render() {
        return (
            <div id="login-container">     
                <div className="form">
                    <div className="ui grid">
                        <div className="six wide column"></div>
                        <div className="ten wide column">
                            <label>Ingresar con:</label>
                        </div>
                        <div className="six wide column">
                            <label>E-mail</label>
                        </div>
                        <div className="ten wide column">
                            <Input placeholder='' name='name' />
                        </div>

                        <div className="six wide column">
                            <label>Contraseña</label>
                        </div>
                        <div className="ten wide column">
                            <Input placeholder='' name='name' />
                        </div>
                    </div>
                    <br/>
                    <a href="/reset-password">¿Olvidaste tu contraseña?</a>       
                             
                    <br/>
                    <br/>
                    <div className="submit button">Ingresa</div>
                </div>

                <div className="ui divider"></div>

                <p>¿No tienes una cuenta aún en Atarraya? <a href="/signup">Regístrate</a>.</p>
            </div>
        );
    }
}