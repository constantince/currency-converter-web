import React, { PureComponent } from 'react';
import './logo.css';


const Logo = ({status}) => <div className={`logo ${status}`}>
    <img className="img-logo" src={require("./images/logo@3x.png")} />
</div>

export default Logo;