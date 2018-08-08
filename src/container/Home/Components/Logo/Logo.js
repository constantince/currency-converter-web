import React from 'react';
import './logo.css';


const Logo = ({status}) => <div className={`logo ${status}`}>
    <img alt="" className="img-logo" src={require("./images/logo@3x.png")} />
</div>

export default Logo;