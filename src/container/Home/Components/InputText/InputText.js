import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
export default class InputText extends Component {
    static propTyeps = {
        text: PropTypes.string,
        disabled: PropTypes.bool,
        value: PropTypes.string,
        onChange: PropTypes.func
    }

    render() {
        const { text, disabled, value, onClick } = this.props;
        return <div className="input-text">
            <button onClick={(e) => {onClick(); e.stopPropagation(); }}>{text}</button>
            <input disabled={disabled} onChange={this.props.onChange} value={value} />
        </div>
    }
}