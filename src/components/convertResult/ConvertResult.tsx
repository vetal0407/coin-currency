import React from "react";

export interface Props {
    value: number | null
    calculatedValue: number | null
    coin: string
    currency: string
}

const ConvertResult: React.FC<Props> = ({
    value,
    calculatedValue,
    coin,
    currency
}) => {
    return(
        <div>
            <strong>{value + coin}: </strong>will be <strong>{Math.ceil((Number(calculatedValue))*100)/100} </strong>in <strong>{currency}</strong>
        </div>

    )
}

export default ConvertResult
