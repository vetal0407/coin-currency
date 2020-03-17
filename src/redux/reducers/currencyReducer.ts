import {
    START_CURRENCY,
    SUCCESS_CURRENCY,

    CHANGE_COIN,
    CHANGE_CURRENCY,
    CHANGE_VALUE
} from "../types/currencyTypes"
import { InitialStateI } from "../../interfaces/currencyInterfaces";

const initialState: InitialStateI = {
    currencies: [],
    value: null,
    currentCurrency: 'USD',
    currentCoin: 'BTC',
    calculatedValue: null,
    isValid: true,
    isLoading: true
}

export default function currencyReducer(state = initialState, action: any): InitialStateI {
    switch (action.type) {
        case START_CURRENCY:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS_CURRENCY:
            return {
                ...state,
                isLoading: false,
                currencies: action.currencies
            }
        case CHANGE_CURRENCY:
            return {
                ...state,
                currentCurrency: action.currency,
                calculatedValue: action.calculatedValue,
            }
        case CHANGE_COIN:
            return {
                ...state,
                currentCoin: action.coin,
                calculatedValue: action.calculatedValue,
            }
        case CHANGE_VALUE:
            return {
                ...state,
                calculatedValue: action.calculatedValue,
                value: action.value,
                isValid: action.isValid
            }
        default:
            return state
    }
}
