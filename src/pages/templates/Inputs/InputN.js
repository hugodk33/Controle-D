import React from 'react';
import {SinaldeMais , SinaldeMenos} from '../icons/icones-botoes'

const InputN = (props) => {

    return (
    <div className={"col-" + props.col + " InputN"}>
        <label>{props.label}</label>
        <input id={props.id} type={props.type} className={props.class} placeholder={props.placeholder} />
        <button className="text-center" ><SinaldeMais /></button>
        <button className="text-center" style={{top: "20px"}}><SinaldeMenos /></button>
    </div>
    )
};

export default InputN;
