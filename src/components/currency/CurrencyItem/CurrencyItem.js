import React from "react"
import styles from './styles.module.css'

const CurrencyItem = props => {
    let cls = [styles.CurrencyItem]

    if(props.isActive) cls.push(styles.active)

    return (
        <div className={cls.join(' ')}
             onClick={props.clickHandler}
        >
            <div className={styles.CurrencyImage}>
                <img src={props.image} alt="coin"/>
                <h5>{props.ccy}</h5>
            </div>
            <div className={styles.CurrencyInfo}>
                <div className={styles.Infotext}>
                    <strong id={styles.ccy}>{props.ccy}</strong><br/>
                    <strong>USD:</strong> <span>{props.USD}</span><br/>
                    <strong>EUR:</strong> <span>{props.EUR}</span><br/>
                    <strong>UAH:</strong> <span>{props.UAH}</span>
                </div>
            </div>
        </div>
    )
};

export default CurrencyItem;
