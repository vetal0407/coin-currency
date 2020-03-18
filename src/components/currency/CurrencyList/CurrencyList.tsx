import React from "react"
import styles from './styles.module.css'
import CurrencyItem from "../CurrencyItem/CurrencyItem"
import { CurrencyI } from "../../../interfaces/currencyInterfaces"

interface Props {
    currencies: CurrencyI[]
    currentCoin: string
    currentCurrency: string
    value: number | null

    changeCoin: (coin: string, value: number | null, currentCurrency: string, currencies: CurrencyI[]) => void
}

const CurrencyList: React.FC<Props> = ({
    currencies,
    currentCoin,
    currentCurrency,
    value,
    changeCoin
}) => {
    return (
        <ul className={styles.CurrencyList}>
            {currencies.map((currency, index) => {
                return (
                    <li key={index}>
                        <CurrencyItem
                            image={currency.image}
                            ccy={currency.ccy}
                            USD={currency.USD}
                            EUR={currency.EUR}
                            UAH={currency.UAH}
                            isActive={currentCoin === currency.ccy}
                            clickHandler={() => changeCoin(currency.ccy, value, currentCurrency, currencies)}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default CurrencyList

