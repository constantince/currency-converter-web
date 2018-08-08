import Home from '../container/Home';
import Theme from '../container/Theme';
import CurrencyList from '../container/CurrencyList';
import Setting from '../container/Setting';
import Index from '../container/Index'
const routesConfig = [{
    path: '/',
    exact: true,
    component: Index
},{
    path: '/home',
    component: Home,
    routes: [{
        path: '/home/currencylist/:currency',
        component: CurrencyList
    }]
},{
    path: '/theme',
    component: Theme
},{
    path: '/Setting',
    component: Setting,
}];

export default routesConfig;