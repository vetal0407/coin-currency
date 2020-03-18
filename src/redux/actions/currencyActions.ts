import {
    GET_CURRENCY,
    START_CURRENCY,
    SUCCESS_CURRENCY,

    CHANGE_COIN,
    CHANGE_CURRENCY,
    CHANGE_VALUE,

    CurrencyTypes
} from '../types/currencyTypes'
import { CurrencyI } from "../../interfaces/currencyInterfaces"

export const getCurrency = (): CurrencyTypes => ({type: GET_CURRENCY})
export const startCurrency = (): CurrencyTypes => ({type: START_CURRENCY})
export const successCurrency = (currencies: CurrencyI[]): CurrencyTypes => ({
    type: SUCCESS_CURRENCY,
    currencies
})
export const errorCurrency = (e: any): void => console.log(e)

export const changeCurrency = (currency: string, volume: number | null, currentCoin: string, currencies: CurrencyI[]): CurrencyTypes => {
    const calculatedValue = !volume ? null : resultSolver(volume, currency, currentCoin,currencies)
    return {
        type: CHANGE_CURRENCY,
        calculatedValue,
        currency
    }
}

export const changeCoin = (coin: string, volume: number | null, currentCurrency: string, currencies: CurrencyI[]): CurrencyTypes => {
    const calculatedValue = !volume ? null : resultSolver(volume, currentCurrency, coin, currencies)
    return {
        type: CHANGE_COIN,
        calculatedValue,
        coin,
    }
}

export const changeValue = (value: number | null, currentCurrency: string, currentCoin: string, currencies: CurrencyI[]): CurrencyTypes => {
    let isValid = !isNaN(Number(value))

    const calculatedValue = resultSolver(Number(value), currentCurrency, currentCoin, currencies)

    return {
        type: CHANGE_VALUE,
        calculatedValue,
        value: isNaN(Number(value)) ? null : value,
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
