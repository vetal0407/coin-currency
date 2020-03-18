import React from "react"
import styles from './styles.module.css'

export interface Props {
    key: string
    ccy: string
    isActive: boolean

    clickHandler: () => void
}

const CoinItem: React.FC<Props> = ({
    ccy,
    isActive,
    clickHandler
}) => {
    let cls = [styles.ConverterItem]

    if(isActive) cls.push(styles.active)

    return(
        <div
            className={cls.join(' ')}
            onClick={clickHandler}
        >
            <strong>{ccy}</strong>
        </div>
    )
}

export default CoinItem
