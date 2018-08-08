import createSagaMiddleWare from 'redux-saga';
import Reducer from '../Reducer';
import { applyMiddleware, createStore} from 'redux';
import Saga from '../Saga';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(Reducer, applyMiddleware(
  sagaMiddleWare
));

sagaMiddleWare.run(Saga);

export default store;