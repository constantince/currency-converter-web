import React, { PureComponent } from 'react';
import TouchFeedBack from './../../Components/TouchFeedBack';
import './index.css';
import BaseView from '../Base';

export default class Setting extends BaseView {
    title = "Setting"
    render() {
        const {history} = this.props;
        return <ul className="setting">
        <TouchFeedBack onClick={() => history.push('theme')}>
            <li className="list">
                <p>theme</p>
                <span className="icon-arrow"></span>
            </li>
        </TouchFeedBack>
        <TouchFeedBack>
            <a className="list" href="http://fixer.io">
                <p>Fixer.io</p>
                <span className="icon-link"></span>
            </a>
        </TouchFeedBack>
    </ul>
    }
}




// const Setting = ({history}) => <ul className="setting">
//     <TouchFeedBack onClick={() => history.push('theme')}>
//         <li className="list">
//             <p>theme</p>
//             <span className="icon-arrow"></span>
//         </li>
//     </TouchFeedBack>
//     <TouchFeedBack>
//         <a className="list" href="http://fixer.io">
//             <p>Fixer.io</p>
//             <span className="icon-link"></span>
//         </a>
//     </TouchFeedBack>
// </ul>;

// export default Setting;