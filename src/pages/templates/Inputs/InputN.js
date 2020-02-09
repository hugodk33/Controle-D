import React from 'react';

const InputN = (props) => {

    return (
    <div className={"col-" + props.col + " InputN"}>
        <label>{props.label}</label>
        <input id={props.id} type={props.type} className={props.class} placeholder={props.placeholder} />
        <button><img src={require("../icons/mais.svg")} style={{maxWidth: "8px"}}/></button>
        <button style={{top: "20px"}}><img src={require("../icons/menos.svg")} style={{maxWidth: "8px"}}/></button>
    </div>
    )
};

export default InputN;
