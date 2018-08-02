import React, {Component} from 'react';
import FastList from '../../Components/FastList';
import currencies from '../../Data/currencies';
import { CSSTransition } from 'react-transition-group';
import './index.css';

export default class CurrencyList extends Component {

    state = {
        show: false
    }

    componentDidMount() {
        this.setState({
            show: true
        })
    }


    render() {
        const {history} = this.props;
        return <div className="currency-list">
        <CSSTransition
            in={this.state.show}
            timeout={500}
            classNames="message"
            unmountOnExit>
                <FastList 
                    data={currencies}
                    renderRow={(row) => <li onClick={() => history.replace('/home')}>
                        <div className="left-component">{row}</div>
                    </li>}
                />
        </CSSTransition>
    </div>
    }
}