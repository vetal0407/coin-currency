import React from 'react'
import ReactDOM from 'react-dom'
import CurrencyPage from "./containers/CurrencyPage/CurrencyPage"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/configureStore'

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <CurrencyPage/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
