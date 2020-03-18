import { combineReducers } from 'redux'
import currencyReducer from "./reducers/currencyReducer"

let rootReducer = combineReducers({
    currency: currencyReducer
})

type RootReducer = typeof rootReducer
export type AppState =  ReturnType<RootReducer>

export default rootReducer
