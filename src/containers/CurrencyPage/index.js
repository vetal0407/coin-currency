import { connect } from 'react-redux'
import { getCurrency, changeCurrency, changeCoin, changeValue } from "../../redux/actions/currencyActions.ts"
import CurrencyPage from './CurrencyPage'

const mapDispatchToProps = {
    getCurrency,
    changeCurrency,
    changeCoin,
    changeValue
}

const mapStateToProps = (state) => {
    return{
        currency: state.currency.currencies,
        currentCurrency: state.currency.currentCurrency,
        currentCoin: state.currency.currentCoin,
        value: state.currency.value,
        calculatedValue: state.currency.calculatedValue,
        isValid: state.currency.isValid,
        isLoading: state.currency.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPage)
