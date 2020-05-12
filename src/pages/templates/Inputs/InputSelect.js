import React from 'react';

const InputSelect = (props) => {

    return (
    <div className={"col-" + props.col + " InputSelect"} style={{color: "#cdcdcd"}}>
        <label>{props.label}</label>
        <select id={props.id} type={props.type} className={props.class} value={props.placeholder}></select>
    </div>
    )
};

export default InputSelect;
