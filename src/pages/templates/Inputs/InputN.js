import React, { useState, useEffect } from 'react';

const InputN = (props) => {

    const changeValue = type => {
        
        let newValue = props.value >= 0 ? props.value : 0
        newValue = +newValue

        if(type == "SUM"){
            newValue += 1
        }
        else if(newValue > 0)
            newValue -= 1

         
        props.onChange({
            target: {
                name: props.name,
                value: newValue
            }
        })
    }

    // useEffect(_ => {
    //     if (props.value)
    //         setValue(props.value)
    //     console.log('x')
    // }, [props.value])

    return (
        <div className={"col-" + props.col + " InputN"}>
            <label>{props.label}</label>
            <input  
                    id={props.id}
                    type={props.type} 
                    name={props.name} 
                    value={props.value} 
                    onChange={props.onChange}
                    className={props.class}
                    placeholder={props.placeholder} 
            />
            <button onClick={_ => changeValue("SUM")}> 
                <img src={require("../icons/mais.svg")} style={{ maxWidth: "8px" }} />
            </button>
            
            <button style={{ top: "20px" }} onClick={_ => changeValue("SUB")}>
                <img src={require("../icons/menos.svg")}  style={{ maxWidth: "8px" }} />
            </button>
        </div>
    )
};

export default InputN;
