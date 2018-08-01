import React, { Component } from 'react';
import Logo from './Components/Logo';
import InputText from './Components/InputText';
import './index.css';
export default class Home extends Component {
    render() {
        return <div className="home page">
            <Logo />
            <InputText text="USD" />
            <InputText text="RMB" />
        </div>;
    }
}