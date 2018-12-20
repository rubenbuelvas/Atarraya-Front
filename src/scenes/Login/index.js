import React from 'react';
import { connect } from 'react-redux';

import EmailLogin from './components/EmailLogin';

import './styles.css';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            option: 0
        }
    }

    render() {
        const { option } = this.state;

        let optionView = {};
        if(option === 0) {
            optionView = 
                <div id="login-container">
                    <h3>INGRESAR CON:</h3>
                    <div className="button">
                        <i className="facebook icon"></i>
                        Ingresar con Facebook
                    </div>
                    <div className="button">
                        <img src="/icons/celular.png" alt="Icono celular"/>
                        Ingresa con tu celular
                    </div>
                    <div onClick={() => this.setState({ option: 3 })} className="button">Ingresa con tu email</div>

                    <p>Al hacer clic, aceptas los <a href="/terminos-y-condiciones">Términos y Condiciones de uso y Políticas de Habeas Data</a>.</p>

                    <div className="ui divider"></div>

                    <p>¿No tienes una cuenta aún en Atarraya? <a href="/signup">Regístrate</a>.</p>
                </div>;
        } else if(option === 3) {
            optionView =
                <EmailLogin />;
        }

        return (
            <div id="login">
                <h1>#BIENVENIDO</h1>

                {optionView}
            </div>
        );
    }
}

export default connect((store) => {
    console.log(store);
    return {
        currentUser: store.currentUser
    };
})(Login);