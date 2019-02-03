import React from 'react';

import './styles.css';

export default class Tag extends React.Component {
    render() {
        const { tag } = this.props;
        return (
            <span className="tag">
                <img src={tag.image_url} alt=""/>
                <br/>
                <p>{tag.text.toUpperCase()}</p>
            </span>
        );
    }
}