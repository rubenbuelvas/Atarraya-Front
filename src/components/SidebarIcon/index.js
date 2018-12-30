import React from 'react';

import './styles.css';

export default class SidebarIcon extends React.Component {
    render() {
        return (
            <div style={{display: this.props.visible ? "none" : "block"}} id="sidebar-icon-container" onClick={this.props.onClick}>
                <i id="sidebar-icon" className="huge bars icon"></i>
            </div>
        );
    }
}