import React from "react"
import styles from './styles.module.css'

export interface Props {
    image: string
    ccy: string
    USD: number
    EUR: number
    UAH: number
    isActive: boolean

    clickHandler: () => void
}

const CurrencyItem: React.FC<Props> = ({
    image,
    ccy,
    USD,
    EUR,
    UAH,
    isActive,
    clickHandler
}) => {
    let cls = [styles.CurrencyItem]

    if(isActive) cls.push(styles.active)

    return (
        <div className={cls.join(' ')}
             onClick={clickHandler}
        >
            <div className={styles.CurrencyImage}>
                <img src={image} alt="coin"/>
                <h5>{ccy}</h5>
            </div>
            <div className={styles.CurrencyInfo}>
                <div className={styles.Infotext}>
                    <strong id={styles.ccy}>{ccy}</strong><br/>
                    <strong>USD:</strong> <span>{USD}</span><br/>
                    <strong>EUR:</strong> <span>{EUR}</span><br/>
                    <strong>UAH:</strong> <span>{UAH}</span>
                </div>
            </div>
        </div>
    )
};

export default CurrencyItem;
