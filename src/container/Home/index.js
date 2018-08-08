import React from 'react';
import Logo from './Components/Logo';
import InputText from './Components/InputText';
import Text from './Components/Text';
import './index.css';
import TouchFeedBack from './../../Components/TouchFeedBack';
import {RouteWithSubRoutes} from '../../utils';
import {connect} from 'react-redux';
import BaseView from '../Base';

class Home extends BaseView {

    state = {
        keyBoardStatus: ''
    }

    title = "Home";

    componentWillMount() {
        super.componentWillMount();
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
        //如果初始化过数据，则无需再次请求了。web与native的渲染机制是不一样的
        !this.props.initialed && this.props.dispatch({type: 'GET_CURRENCY', value: 'USD'})
    }

    componentWillUnmount() {
        document.removeEventListener('focusin', () => {});

        document.removeEventListener('focusout', () => {});
    }
    

    render() {
        const {history: {push}, routes, amount, baseCurrency,
        quoteCurrency, conversions, themes, dispatch} = this.props;
        const isFetching = conversions[baseCurrency].isFetching
        const rate = conversions[baseCurrency].rates[quoteCurrency] || 1;
        const date = conversions[baseCurrency].date;
        return <div className="page">
        <div className="route-1 home" style={{backgroundColor: themes}}>
            <TouchFeedBack className="gear" onClick={() => push('Setting')}>
                <img alt="" src={require('./images/gear@3x.png')} />
            </TouchFeedBack>
            <Logo status={this.state.keyBoardStatus} />
            <InputText onClick={() => push('home/currencylist/baseCurrency')} onChange={(e) => dispatch({type: 'CHANGE_BASE_AMOUNT', amount: e.target.value})} text={baseCurrency} value={amount} />
            <InputText onClick={() => push('home/currencylist/quoteCurrency')} text={quoteCurrency} disabled={true} value={isFetching ? '...' : rate * amount} />
            <Text date={date} rate={rate}  currency={baseCurrency} quote={quoteCurrency}  />
            <TouchFeedBack className="reverse" onClick={() => {
                dispatch({type: 'GET_CURRENCY', value: quoteCurrency, other: baseCurrency})
            }}>
                <img alt="" src={require('./images/icon@3x.png')} />
                <p>Reverse Currencies</p>
            </TouchFeedBack>
        </div>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>;
    }
}

const mapStateToProps = (state) => ({
    amount: state.currencies.amount,
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    conversions: state.currencies.conversions,
    themes: state.themes.primaryColor,
    isFetching: state.currencies.conversions.isFetching,
    initialed: state.initialed,

})

export default connect(mapStateToProps)(Home);