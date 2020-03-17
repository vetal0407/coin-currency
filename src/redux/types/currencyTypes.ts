import { CurrencyI } from "../../interfaces/currencyInterfaces";

export const GET_CURRENCY = 'GET_CURRENCY'
export const START_CURRENCY = 'START_CURRENCY'
export const SUCCESS_CURRENCY = 'SUCCESS_CURRENCY'
interface GetCurrencyAction {
    type: typeof GET_CURRENCY
}
interface StartCurrencyAction {
    type: typeof START_CURRENCY
}
interface SuccessCurrencyAction {
    type: typeof SUCCESS_CURRENCY
    currencies: Array<CurrencyI>
}
export type FetchCurrencyTypes = GetCurrencyAction | StartCurrencyAction | SuccessCurrencyAction


export const CHANGE_CURRENCY = 'CHANGE_CURRENCY'
interface ChangeCurrencyAction {
    type: typeof CHANGE_CURRENCY
    calculatedValue: number | null,
    currency: string
}
export type ChangeCurrencyType = ChangeCurrencyAction


export const CHANGE_COIN = 'CHANGE_COIN'
interface ChangeCoinAction {
    type: typeof CHANGE_COIN
    calculatedValue: number | null,
    coin: string
}
export type ChangeCoinType = ChangeCoinAction


export const CHANGE_VALUE = 'CHANGE_VALUE'
interface ChangeValueAction {
    type: typeof CHANGE_VALUE
    calculatedValue: number | null,
    value: number | null,
    isValid: boolean
}
export type ChangeValueType = ChangeValueAction
