import React from 'react';

import ArticleGrid from 'components/ArticleGrid';

import './styles.css';

const articles = [
    {
        title: 'La nueva cocina colombiana',
        imageUrl: '/stock/tocino.jpg'
    },
    {
        title: 'El influencer que sólo cocina Atarraya',
        imageUrl: '/stock/tocino.jpg'
    },
    {
        title: '10 beneficios de comer atún',
        imageUrl: '/stock/tocino.jpg'
    },
];

export default class Sixth extends React.Component {
    render() {
        return (
            <div id="lifestyle6" className="section">
                <h1 className="header">#DESCUBRE</h1>
                <ArticleGrid articles={articles}/>
            </div>
        );
    }
}