import React from "react"
import styles from './styles.module.css'

interface Props {
    isValid: boolean

    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({
    isValid,
    onChange
}) => {

    let cls = [styles.Input]

    if (!isValid) cls.push(styles.invalid)

    return (
        <div className={cls.join(' ')}>
            <strong>Volume: </strong>
            <div>
                <input
                    type="text"
                    onChange={onChange}
                />
                <div className={styles.ErrorMessage}>
                    {!isValid
                        ? <span>Volume must be a number!!!</span>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Input
