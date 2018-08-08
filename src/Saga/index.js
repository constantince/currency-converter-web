import{select, takeLatest, put, call, all} from "redux-saga/effects";

const _fetch = (base) => {
    return fetch(`https://fixer.handlebarlabs.com/latest?base=${base}`).then(
      res => res.json()
    );
}

const loadCurrncy = function* (action) {
    const prevCurrency = yield select();
    try{
        yield put({ type: 'CHANGE_BASE_CURRENCY_START', currency: prevCurrency.currencies.baseCurrency});
        const data = yield call(_fetch, action.value);
        yield put({ type: 'CHANGE_BASE_CURRENCY', currency: action.value, data});
        if (action.other) {
            yield put({ type: 'CHANGE_QUOTE_CURRENCY', currency: action.other});
        }
    }catch(e) {
        yield put({type: 'FETCH_ERROR', error: e.message})
    }
}

export const getCurrency = function* (action) {
    yield takeLatest('GET_CURRENCY', loadCurrncy)
}

export default function* () {
    yield all([getCurrency()])
}