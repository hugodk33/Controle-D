import React from 'react';

const InputN = (props) => {

    return (
    <div className={"col-" + props.col + " InputN"}>
        <label>{props.label}</label>
        <input id={props.id} type={props.type} className={props.class} placeholder={props.placeholder} />
        <button>+</button>
        <button style={{top: "20px"}}>-</button>
    </div>
    )
};

export default InputN;
