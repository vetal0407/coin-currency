import React from "react"
import styles from './styles.module.css'

const Input = props => {

    let cls = [styles.Input]

    if (!props.isValid) cls.push(styles.invalid)

    return (
        <div className={cls.join(' ')}>
            <strong>Volume: </strong>
            <div>
                <input
                    type="text"
                    onChange={props.onChange}
                />
                <div className={styles.ErrorMessage}>
                    {!props.isValid
                        ? <span>Volume must be a number!!!</span>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Input
