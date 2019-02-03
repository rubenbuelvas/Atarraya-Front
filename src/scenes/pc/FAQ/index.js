import React from 'react';

import { Input } from 'semantic-ui-react';
import Navbar from 'components/Navbar';

import './styles.css';

export default class FAQ extends React.Component {
    render() {
        return (
            <div id="faq">
                <Navbar />
                <div>
                    <div id="faq-container">
                    <h1>Preguntas frecuentes</h1>
                
                    <h3>¿Cómo puedo hacer mis pedidos?</h3>
                    <p>Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y fotógrafos que se dedican a crear las mejores
                    recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y fotógrafos que se dedican a
                    crear las mejores recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y fotógrafos que
                    se dedican a crear las mejores recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y
                    fotógrafos que se dedican a crear las mejores recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está
                    conformado por chefs y fotógrafos que se dedican a crear las mejores recetas para ti...</p>


                    <h3>Si no estoy conforme con el producto, ¿qué puedo hacer?</h3>
                    <p>Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y fotógrafos que se dedican a crear las mejores
                    recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y fotógrafos que se dedican a
                    crear las mejores recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y fotógrafos que
                    se dedican a crear las mejores recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y
                    fotógrafos que se dedican a crear las mejores recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está
                    conformado por chefs y fotógrafos que se dedican a crear las mejores recetas para ti...</p>


                    <h3>¿Puedo programar mis pedidos?</h3>
                    <p>Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y fotógrafos que se dedican a crear las mejores
                    recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y fotógrafos que se dedican a
                    crear las mejores recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y fotógrafos que
                    se dedican a crear las mejores recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está conformado por chefs y
                    fotógrafos que se dedican a crear las mejores recetas para ti. Queremos que nos conozcas. Nuestro equipo Atarraya está
                    conformado por chefs y fotógrafos que se dedican a crear las mejores recetas para ti...</p>
                    </div>

                    <div id="contact-container">
                    <h1>#contacto</h1>

                    <div className="ui grid">
                        <div className="six wide column">
                            <label>Nombre y apellido:</label>
                        </div>
                        <div className="ten wide column">
                            <Input placeholder='' name='name' />
                        </div>

                        <div className="six wide column">
                            <label>E-mail:</label>
                        </div>
                        <div className="ten wide column">
                            <Input placeholder='' name='email' />
                        </div>

                        <div className="six wide column">
                            <label>Celular:</label>
                        </div>
                        <div className="ten wide column">
                            <Input placeholder='' name='cellphone' />
                        </div>
                    </div>

                </div>
                </div>
            </div>
        );
    }
}