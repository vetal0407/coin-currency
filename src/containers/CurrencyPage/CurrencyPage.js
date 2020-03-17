import React, { useEffect } from "react"
import styles from './styles.module.css'
import CurrencyList from "../../components/currency/CurrencyList/CurrencyList"
import Input from "../../components/ui/Input/Input"
import CoinList from "../../components/coin/CoinList/CoinList"
import ConvertResult from "../../components/convertResult/ConvertResult"

const CurrencyPage = props => {
    useEffect(()=>{
        props.getCurrency()
    }, [])

    return(
        <div className={styles.CurrencyPage}>
            { !props.isLoading ?
                <div className={styles.CurList}>
                    <CurrencyList
                        currencies={props.currency}
                        currentCurrency={props.currentCurrency}
                        currentCoin={props.currentCoin}
                        value={props.value}
                        changeCoin={props.changeCoin}
                    />
                </div>
                : <p>Loading...</p>
            }
            <h1>Selected coin: {props.currentCoin}</h1>
            <div className={styles.CurInput}>
                <Input
                    onChange={event => props.changeValue(event.target.value, props.currentCurrency, props.currentCoin, props.currency)}
                    isValid={props.isValid}
                />
            </div>
            <div className={styles.wrapperList}>
                <CoinList
                    currency={props.currency}
                    currentCoin={props.currentCoin}
                    value={props.value}
                    changeCurrency={props.changeCurrency}
                />
            </div>
            <div className={styles.ConvertResultList}>
                {props.value
                    ? <ConvertResult
                        value={props.value}
                        currency={props.currentCurrency}
                        coin={props.currentCoin}
                        culcValue={props.calculatedValue}
                    />
                    :null
                }
            </div>
        </div>
    )
};

export default CurrencyPage
