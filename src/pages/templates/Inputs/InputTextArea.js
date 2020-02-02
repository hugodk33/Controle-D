import React from 'react';

const InputText = (props) => {

    return (
    <div className={"textarea " + "col-" + props.col}>
        <label>{props.label}</label>
        <textarea id={props.id} type={props.type} className={props.class} placeholder={props.placeholder} />
    </div>
    )
};

export default InputText;
