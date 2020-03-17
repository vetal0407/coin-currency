import {combineReducers} from 'redux'
import currencyReducer from "./reducers/currencyReducer.ts"

export default combineReducers({
    currency: currencyReducer
})
