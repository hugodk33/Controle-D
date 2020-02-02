import React from 'react';

const InputSelect = (props) => {

    return (
    <div className={"col-" + props.col + " InputSelect"}>
        <label>{props.label}</label>
        <select id={props.id} type={props.type} className={props.class} placeholder={props.placeholder} />
    </div>
    )
};

export default InputSelect;
