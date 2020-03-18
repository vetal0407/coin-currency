import React, { useEffect } from "react"
import { connect } from 'react-redux'

import { getCurrency, changeCurrency, changeCoin, changeValue } from "../../redux/actions/currencyActions"

import CurrencyList from "../../components/currency/CurrencyList/CurrencyList"
import Input from "../../components/ui/Input/Input"
import CoinList from "../../components/coin/CoinList/CoinList"
import ConvertResult from "../../components/convertResult/ConvertResult"

import styles from './styles.module.css'

import { AppState } from "../../redux/rootReducer"
import { CurrencyI } from "../../interfaces/currencyInterfaces"

interface MapStateToPropsI {
    currencies: CurrencyI[]
    currentCurrency: string
    currentCoin: string
    value: number | null
    calculatedValue: number | null
    isValid: boolean
    isLoading: boolean
}

interface MapDispatchToPropsI {
    getCurrency: () => {}
    changeCurrency: (currency: string, volume: number | null, currentCoin: string, currencies: CurrencyI[]) => void
    changeCoin: (coin: string, volume: number | null, currentCurrency: string, currencies: CurrencyI[]) => void
    changeValue: (value: number | null, currentCurrency: string, currentCoin: string, currencies: CurrencyI[]) => void
}

type Props = MapStateToPropsI & MapDispatchToPropsI

const CurrencyPage: React.FC<Props> = ({
    currencies,
    currentCurrency,
    currentCoin,
    value,
    calculatedValue,
    isValid,
    isLoading,
    getCurrency,
    changeCurrency,
    changeCoin,
    changeValue
}) => {

    useEffect(() => {
        getCurrency()
    }, [])

    return(
        <div className={styles.CurrencyPage}>
            { !isLoading ?
                <div className={styles.CurList}>
                    <CurrencyList
                        currencies={currencies}
                        currentCurrency={currentCurrency}
                        currentCoin={currentCoin}
                        value={value}
                        changeCoin={changeCoin}
                    />
                </div>
                : <p>Loading...</p>
            }
            <h1>Selected coin: {currentCoin}</h1>
            <div className={styles.CurInput}>
                <Input
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeValue(+event.target.value, currentCurrency, currentCoin, currencies)}
                    isValid={isValid}
                />
            </div>
            <div className={styles.wrapperList}>
                <CoinList
                    currency={currencies}
                    currentCoin={currentCoin}
                    currentCurrency={currentCurrency}
                    value={value}
                    changeCurrency={changeCurrency}
                />
            </div>
            <div className={styles.ConvertResultList}>
                {value
                    ? <ConvertResult
                        value={value}
                        currency={currentCurrency}
                        coin={currentCoin}
                        calculatedValue={calculatedValue}
                    />
                    :null
                }
            </div>
        </div>
    )
};

const mapDispatchToProps: MapDispatchToPropsI = {
    getCurrency,
    changeCurrency,
    changeCoin,
    changeValue
}

const mapStateToProps = (state: AppState): MapStateToPropsI => {
    return{
        currencies: state.currency.currencies,
        currentCurrency: state.currency.currentCurrency,
        currentCoin: state.currency.currentCoin,
        value: state.currency.value,
        calculatedValue: state.currency.calculatedValue,
        isValid: state.currency.isValid,
        isLoading: state.currency.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPage)
