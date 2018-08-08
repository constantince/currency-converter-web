import React from 'react';
import FastList from './../../Components/FastList/FastList';
import './index.css';
import Colors from '../../Data/colors';
import {connect} from 'react-redux';


const Theme = ({history, dispatch}) => <div className="theme">
<FastList 
    data={Colors}
    renderRow={(row) => <li onClick={() => {
        dispatch({type: 'CHANGE_THEME_COLOR', color: row.color})
        history.push('home')
    }}>
        <div className="left-component">{row.text}</div>
        <div className="right-color-block" style={{backgroundColor: row.color}}></div>
    </li>}
/>
</div>;

export default connect()(Theme);