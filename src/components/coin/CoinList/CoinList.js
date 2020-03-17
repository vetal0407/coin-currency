import React from "react"
import styles from './styles.module.css'
import CoinItem from "../CoinItem/CoinItem"

const list = ['USD', 'EUR', 'UAH']

const CoinList = props => {
    return(
        <div className={styles.ConverterList}>
            {list.map((item, index) => {
                return(
                    <CoinItem
                        key={item + index}
                        ccy={item}
                        clickHandler={()=>props.changeCurrency(item, props.value, props.currentCoin, props.currency)}
                        isActive={props.currentCurrency === item}
                    />
                )
            })}
        </div>
    )
}

export default CoinList
