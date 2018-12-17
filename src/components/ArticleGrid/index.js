import React from 'react';

import ArticleBox from './components/ArticleBox';

export default class FirstProduct extends React.Component {
    render() {
        const { articles } = this.props;
        return (
            <div className="ui three column grid">
                <div className="column">
                    <ArticleBox recipe={articles[0]}/>
                </div>
                <div className="column">
                    <ArticleBox recipe={articles[1]}/>
                </div>
                <div className="column">
                    <ArticleBox recipe={articles[2]}/>
                </div>
            </div>
        );
    }
}