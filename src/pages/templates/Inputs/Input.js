import React from 'react';
import { Field } from 'formik';

const Input = (props) => {
    const defaultFunction = () => { }
     const onChange = props.onChange || defaultFunction

    return (
        <div className={"col-" + props.col}>
            <label>{props.label}</label>
            {!props.isFormik && <input id={props.id} type={props.type} onChange={onChange} className={props.class} placeholder={props.placeholder} />}
            {props.isFormik && <Field name={props.name || props.id || ""} id={props.id} type={props.type}  className={props.class} placeholder={props.placeholder} />}
        </div>
    )
};

export default Input;
