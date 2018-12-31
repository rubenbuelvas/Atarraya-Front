import React from 'react';

import ArticleGrid from 'components/ArticleGrid';
import FullFooter from 'components/FullFooter';
import Navbar from 'components/Navbar';

import { articles } from 'api';

import './styles.css';

export default class Recipe extends React.Component {
    render() {
        return (
            <div id="recipe" className="navbar-scene">
                <Navbar />

                <h1>#RECETAS</h1>

                <div className="meta">
                    <div>Cóctel de camarón Atarraya</div>
                    <p>por: Atarraya | 18.12.18</p>
                    
                    <a rel="noopener noreferrer" href="https://www.instagram.com/atarraya.fishmarket/" target="_blank"><i className="huge instagram icon"></i></a>
                    <a rel="noopener noreferrer" href="https://www.facebook.com/atarraya.co/" target="_blank"><i className="huge facebook icon"></i></a>
                </div>

                <img id="recipe-photo" src="/stock/tocino.jpg" alt="Foto de la receta"/>
                <div className="recipe-container">
                    <div className="recipe-info">
                        <div className="recipe-icons">
                            <div className="ui three column grid">
                                <div className="column">
                                    <img src="/icons/reloj.png" alt="Tiempo de cocción" className="icon"/>
                                    <span>15 minutos</span>
                                </div>
                                <div className="column">
                                    <img src="/icons/user.png" alt="Cantidad de personas" className="icon"/>
                                    <span>2 personas</span>
                                </div>
                                <div className="column">
                                    <img src="/icons/plato.png" alt="Dificultad" className="icon"/>
                                    <span>Fácil</span>
                                </div>
                            </div>
                        </div>

                        <div className="recipe-main">
                            <div className="ui grid">
                                <div className="seven wide column">
                                    <img src="/stock/hamburguesa-salmon.png" alt="Foto del ingrediente Atarraya"/>
                                </div>
                                <div className="nine wide column">
                                    <h3>Ingredientes</h3>
                                    <div className="ui list">
                                        <div className="item">250 gramos de Camarón precocido Atarrala</div>
                                        <div className="item">5 limones</div>
                                        <div className="item">1 cebolla roja</div>
                                        <div className="item">Salsa de tomate (al gusto)</div>
                                        <div className="item">1 cucharada de cilantro picado</div>
                                        <div className="item">1 plátano verde</div>
                                        <div className="item">2 tazas de aceite de girasol</div>
                                        <div className="item">Sal y pimienta</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br/>
                        <h3>Preparación</h3>
                        <div className="recipe-steps">
                            <div className="ui ordered list">
                                <div className="item">Coloque los camarones en un tazón mediano; agregue 1/3 taza de jugo de limón.</div>
                                <div className="item">En un tazón pequeño combine la cebolla, el jugo de limón...</div>
                                <div className="item">Agregue al camarón...</div>
                                <div className="item">Rallamos el plátaono verde y armamos unas camas...</div>
                                <div className="item">Con nuestras camas de patacón...</div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>

                <ArticleGrid type="blog" articles={articles} />
                <ArticleGrid type="blog" articles={articles} />

                <div class="footer-wrapper">
                    <FullFooter />
                </div>
            </div>
        );
    }
}