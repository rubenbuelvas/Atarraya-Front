import React from 'react';

import ArticleGrid from 'components/ArticleGrid';

import './styles.css';

const articles = [
    {
        id: 1,
        title: 'La nueva cocina colombiana',
        imageUrl: '/stock/tocino.jpg'
    },
    {
        id: 2,
        title: 'El influencer que sólo cocina Atarraya',
        imageUrl: '/stock/tocino.jpg'
    },
    {
        id: 3,
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