export interface InitialStateI {
    currencies: CurrencyI[] | [],
    value: number | null,
    currentCurrency: string,
    currentCoin: string,
    calculatedValue: number | null,
    isValid: boolean,
    isLoading: boolean
}

export interface CurrencyI {
    USD: number
    UAH: number
    EUR: number
    ccy: string
    image: string
}
