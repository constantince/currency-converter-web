import React from 'react';
import FastList from './../../Components/FastList/FastList';
import './index.css';
import Colors from '../../Data/colors';

const Theme = ({history}) => <div className="theme">
<FastList 
    data={Colors}
    renderRow={(row) => <li onClick={() => history.push('home')}>
        <div className="left-component">{row.text}</div>
        <div className="right-color-block" style={{backgroundColor: row.color}}></div>
    </li>}
/>
</div>;
export default Theme;