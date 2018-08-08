import React from 'react';
import PropTypes from 'prop-types';
import FastList from '../../Components/FastList';
import currencies from '../../Data/currencies';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import './index.css';
import BaseView from '../Base';
class CurrencyList extends BaseView {

    static propTypes = {
        source: PropTypes.object
    }

    state = {
        show: false
    }

    get title() {
        return this.props.match.params.currency;
    }
    
    nextPageTitle = "Home";

    componentDidMount() {
        this.setState({
            show: true
        })
    }

    render() {
        const {history, match: {params: {currency}}, dispatch} = this.props;
        return <div className="currency-list">
        <CSSTransition
            in={this.state.show}
            timeout={500}
            classNames="message"
            unmountOnExit>
                <FastList 
                    data={currencies}
                    renderRow={(row) => <li onClick={() => {
                        if(currency === 'baseCurrency') {//change quote currency
                            dispatch({type: 'GET_CURRENCY', value: row});
                        } else {
                            dispatch({type: 'CHANGE_QUOTE_CURRENCY', currency: row});
                        }
                            
                            history.replace('/home');
                        }}>
                        <div className="left-component">{row}</div>
                    </li>}
                />
        </CSSTransition>
    </div>
    }
}

const mapStateToProps = (state, ownPorps) => ({
    source: state.currencies.conversions
})

export default connect(mapStateToProps)(CurrencyList);