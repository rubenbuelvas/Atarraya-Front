import React from 'react';
import { Input } from 'semantic-ui-react';

export default class EmailLogin extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;

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
                            <Input name='email' type='email' value={email} onChange={this.handleInputChange}/>
                        </div>
                        <div className="six wide column">
                            <label>Contraseña</label>
                        </div>
                        <div className="ten wide column">
                            <Input name='password' type='password' value={password} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <br/>
                    <a href="/reset-password">¿Olvidaste tu contraseña?</a>       
                             
                    <br/>
                    <br/>
                    <div onClick={() => this.props.callback(email, password)} className="submit button">Ingresa</div>
                </div>

                <div className="ui divider"></div>

                <p>¿No tienes una cuenta aún en Atarraya? <a href="/signup">Regístrate</a>.</p>
            </div>
        );
    }
}