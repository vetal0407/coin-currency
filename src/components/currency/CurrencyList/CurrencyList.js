import React from "react"
import styles from './styles.module.css'
import CurrencyItem from "../CurrencyItem/CurrencyItem"

const CurrencyList = props => {
    return (
        <ul className={styles.CurrencyList}>
            {props.currencies.map((currency, index) => {
                return (
                    <li key={index}>
                        <CurrencyItem
                            image={currency.image}
                            ccy={currency.ccy}
                            USD={currency.USD}
                            EUR={currency.EUR}
                            UAH={currency.UAH}
                            clickHandler={() => props.changeCoin(currency.ccy, props.value, props.currentCurrency, props.currencies)}
                            isActive={props.currentCoin === currency.ccy}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default CurrencyList
