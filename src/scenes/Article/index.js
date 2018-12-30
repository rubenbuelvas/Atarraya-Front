import React from 'react';

import Navbar from 'components/Navbar';
import FullFooter from 'components/FullFooter';


import './styles.css';

export default class Article extends React.Component {
    render() {
        return (
            <div id="article">
                <Navbar />

                <div className="article container">
                    <div className="article titles">
                        <h1>#DESCUBRE</h1>
                        <h2>CONOCE EL DETRÁS DE ESCENAS</h2>
                        <h3>Por: Atarraya | 18.12.2018</h3>
                        <a rel="noopener noreferrer" href="https://www.instagram.com/atarraya.fishmarket/" target="_blank"><i className="huge instagram icon"></i></a>
                        <a rel="noopener noreferrer" href="https://www.facebook.com/atarraya.co/" target="_blank"><i className="huge facebook icon"></i></a>        
                    </div>
                    <div className="article content">
                        <p>Cada semana queremos que compartas con nostotros tus mejores recetas a través de redes y la publicaremos en nuestra
    página web. Cada semana queremos que compartas con nostotros tus mejores recetas a través de redes y la publicaremos
    en nuestra página web. Cada semana queremos que compartas con nostotros tus mejores recetas a través de redes y la
    publicaremos en nuestra página web. Cada sea publicaremos en nuestra página web. Cada semana queremos que
    compartas con nostotros tus mejores recetas a través de redes y la publicaremos en nuestra página web. Cada semana
    queremos que compartas con nostotros tus mejores recetas a través de redes y la publicaremos en nuestra página web.
    Cada semana queremos que compartas con nostotros tus mejores recetas a través de redes y la publicaremos en nuestra
    página web. Cada semana queremos que compartas con nostotros tus mejores recetas a través de redes y la publicaremos
    en nuestra página web. Cada semana queremos que compartas con nostotros tus mejores recetas a través de redes y la
    publicaremos en nuestra página web. Cada semana queremos que compartas con nostotros tus mejores recetas a través de
    redes y la publicaremos en nuestra página web. Cada semana queremos que compartas con nostotros tus mejores recetas a
    través de redes y la publicaremos en nuestra página web. </p>    
                    </div>
                    
                </div>
                
            </div>
        );
    }
}