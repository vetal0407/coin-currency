import {
    GET_CURRENCY,
    START_CURRENCY,
    SUCCESS_CURRENCY,

    CHANGE_COIN,
    CHANGE_CURRENCY,
    CHANGE_VALUE,

    FetchCurrencyTypes,
    ChangeCurrencyType,
    ChangeCoinType,
    ChangeValueType
} from '../types/currencyTypes'
import { CurrencyI } from "../../interfaces/currencyInterfaces"

export const getCurrency = (): FetchCurrencyTypes => ({type: GET_CURRENCY})
export const startCurrency = (): FetchCurrencyTypes => ({type: START_CURRENCY})
export const successCurrency = (currencies: CurrencyI[]): FetchCurrencyTypes => ({
    type: SUCCESS_CURRENCY,
    currencies
})
export const errorCurrency = (e: any): void => console.log(e)

export const changeCurrency = (currency: string, volume: number, currentCoin: string, currencies: CurrencyI[]): ChangeCurrencyType => {
    const calculatedValue = !volume ? null : resultSolver(volume, currency, currentCoin,currencies)
    return {
        type: CHANGE_CURRENCY,
        calculatedValue,
        currency
    }
}

export const changeCoin = (coin: string, volume: number, currentCurrency: string, currencies: CurrencyI[]): ChangeCoinType => {
    const calculatedValue = !volume ? null : resultSolver(volume, currentCurrency, coin, currencies)
    return {
        type: CHANGE_COIN,
        calculatedValue,
        coin,
    }
}

export const changeValue = (value: number, currentCurrency: string, currentCoin: string, currencies: CurrencyI[]): ChangeValueType => {
    let isValid = !isNaN(value)

    const calculatedValue = resultSolver(value, currentCurrency, currentCoin, currencies)

    return {
        type: CHANGE_VALUE,
        calculatedValue,
        value: isNaN(value) ? null : value,
        isValid
    }
}

const resultSolver = (value: number, currentCurrency: string, currentCoin: string, currencies: CurrencyI[]): number => {
    let calculatedValue = 0
    currencies.forEach((currency: CurrencyI) => {
        if (currency.ccy === currentCoin) calculatedValue = value * currency[currentCurrency as "USD" | "UAH" | "EUR"]
    })
    return calculatedValue
}
