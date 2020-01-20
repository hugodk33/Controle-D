import React from 'react';

const Input = (props) => {

    return (
    <div>
        <label>{props.label}</label>
        <input id={props.id} type={props.type} className={props.class} placeholder={props.placeholder} />
    </div>
    )
};

export default Input;
