import React from "react"
import styles from './styles.module.css'

const CoinItem = props => {
    let cls = [styles.ConverterItem]

    if(props.isActive) cls.push(styles.active)

    return(
        <div
            className={cls.join(' ')}
            onClick={props.clickHandler}
        >
            <strong>{props.ccy}</strong>
        </div>
    )
};

export default CoinItem
