import createSagaMiddleWare from 'redux-saga';
import Reducer from '../Reducer';
import { applyMiddleware, createStore} from 'redux';
import Saga from '../Saga';

const sagaMiddleWare = createSagaMiddleWare();
sagaMiddleWare.run(Saga);

const store = createStore(Reducer, applyMiddleware(
  sagaMiddleWare
));

export default store;