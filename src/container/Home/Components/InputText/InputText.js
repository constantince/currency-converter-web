import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
export default class InputText extends Component {
    static propTyeps = {
        text: PropTypes.string
    }

    render() {
        const { text } = this.props;
        return <div className="input-text">
            <button>{text}</button>
            <input />
        </div>
    }
}