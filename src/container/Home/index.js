import React, { Component } from 'react';
import Logo from './Components/Logo';
import InputText from './Components/InputText';
import Text from './Components/Text';
import './index.css';
import TouchFeedBack from './../../Components/TouchFeedBack';
import {RouteWithSubRoutes} from '../../utils';


const CURRENCY = 'USD';
const QUOTE = 'RMB';
const RATE = '6.83';
const DATE = '2018-08-02'

export default class Home extends Component {

    state = {
        keyBoardStatus: ''
    }

    componentWillMount() {
        document.addEventListener('focusin',() => {
            this.setState({
                keyBoardStatus: 'active'
            });
        });

        document.addEventListener('focusout',() => {
            this.setState({
                keyBoardStatus: ''
            });
        });
    }

    componentWillUnmount() {
        document.removeEventListener('focusin', () => {});

        document.removeEventListener('focusout', () => {});
    }
    

    render() {
        const {history: {push}, routes} = this.props;
        return <div className="page">
        <div className="route-1 home">
            <TouchFeedBack className="gear" onClick={() => push('Setting')}>
                <img src={require('./images/gear@3x.png')} />
            </TouchFeedBack>
            <Logo status={this.state.keyBoardStatus} />
            <InputText onClick={() => push('home/currencylist')} text={CURRENCY} value={1} />
            <InputText onClick={() => push('home/currencylist')} text={QUOTE} disabled={true} value={RATE} />
            <Text date={DATE} rate={RATE}  currency={CURRENCY} quote={QUOTE}  />
            <TouchFeedBack className="reverse">
                <img src={require('./images/icon@3x.png')} />
                <p>Reverse Currencies</p>
            </TouchFeedBack>
        </div>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>;
    }
}