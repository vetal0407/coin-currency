import { takeEvery, put, call } from "redux-saga/effects"
import axios from 'axios'
import { GET_CURRENCY } from '../types/currencyTypes'
import * as currencyActions from "../actions/currencyActions"
import { CurrencyI } from "../../interfaces/currencyInterfaces"

function* fetchCurrency() {
    yield put(currencyActions.startCurrency())
    try {
        const responseBTC = yield call(axios.get, 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,UAH,EUR')
        const BTC: CurrencyI = responseBTC.data
        BTC.ccy = 'BTC'
        BTC.image = 'https://endotech.io/img/coinicon/BTC.png'

        const responseETH = yield call(axios.get, 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,UAH,EUR')
        const ETH: CurrencyI = responseETH.data
        ETH.ccy = 'ETH'
        ETH.image = 'https://endotech.io/img/coinicon/ETH.png'

        const responseXRB = yield call(axios.get, 'https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,UAH,EUR')
        const XRB: CurrencyI = responseXRB.data
        XRB.ccy = 'XRB'
        XRB.image = 'https://endotech.io/img/coinicon/XRP.png'

        yield put(currencyActions.successCurrency([BTC, ETH, XRB]))
    } catch (e) {
        currencyActions.errorCurrency(e)
    }
}

export default function* watchFetchCurrency() {
    yield takeEvery(GET_CURRENCY, fetchCurrency)
}
