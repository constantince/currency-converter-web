import React from 'react';
import './text.css';
const Text = ({currency, quote, rate, date}) => (<p className="component-text">
    1 {currency} = {rate} {quote} in {date}
</p>);

export default Text;