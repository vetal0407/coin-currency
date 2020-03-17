import React from "react";

const ConvertResult = props => {
    return(
        <div>
            <strong>{props.value + props.coin}: </strong>will be <strong>{Math.ceil((props.culcValue)*100)/100} </strong>in <strong>{props.currency}</strong>
        </div>

    )
}

export default ConvertResult
