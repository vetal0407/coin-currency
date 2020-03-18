import React from "react"
import styles from './styles.module.css'
import CoinItem from "../CoinItem/CoinItem"
import { CurrencyI } from "../../../interfaces/currencyInterfaces"

export interface Props {
    currency: CurrencyI[]
    currentCoin: string
    currentCurrency: string
    value: number | null

    changeCurrency: (currency: string, value: number | null, currentCoin: string, currencies: CurrencyI[]) => void
}

const listCurrency: Array<string> = ['USD', 'EUR', 'UAH']

const CoinList: React.FC<Props> = ({
    currency,
    currentCoin,
    currentCurrency,
    value,
    changeCurrency
}) => {
    return(
        <div className={styles.ConverterList}>
            {listCurrency.map((item, index) => {
                return(
                    <CoinItem
                        key={item + index}
                        ccy={item}
                        isActive={currentCurrency === item}
                        clickHandler={() => changeCurrency(item, value, currentCoin, currency)}
                    />
                )
            })}
        </div>
    )
}

export default CoinList
