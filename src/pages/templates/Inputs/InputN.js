import React from 'react';
import {SinaldeMais , SinaldeMenos} from '../icons/icones-botoes'

const InputN = (props) => {

    return (
    <div className={"col-" + props.col + " InputN"}>
        <label>{props.label}</label>
        <input id={props.id} type={props.type} className={props.class} placeholder={props.placeholder} />
        <button><SinaldeMais /></button>
        <button style={{top: "20px"}}><SinaldeMenos /></button>
    </div>
    )
};

export default InputN;
