import React, { PureComponent } from 'react';
import './logo.css';

export default class Logo extends PureComponent {
    render() {
        return <div className="logo">
            <img className="img-logo" src={require("./images/logo@3x.png")} />
        </div>;
    }
}