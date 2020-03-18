import { all, fork } from 'redux-saga/effects'
import watchFetchCurrency from "./sagas/currencySaga"

export default function* rootSaga () {
    yield all([
        fork(watchFetchCurrency)
    ])
}
