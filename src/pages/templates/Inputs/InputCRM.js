import React from 'react';
import {IconeFormMedico} from '../icons/icones-formulario'

const InputCRM = (props) => {

    return (
    <div className={"col-" + props.col}>
        <div style={{ borderRadius: "3px", width: "100%"}}>
            <div className="row" style={{margin: "0"}}>
                <div className="col-12 col-sm-12 text-center" style={{padding: "0", marginBottom: "12px"}}>
                        <h5 className="titulo-3" style={{margin: "0", padding: "0 0 11px 0", textAlign: "left"}}><IconeFormMedico /> TIPO DE CADASTRO </h5>
                    <div className="InputcheckBox" style={{backgroundColor: "#f0f0f0"}}>    
                        <span className="check" style={{margin: "0 0 0 auto"}}></span><p>Médico</p> 
                        <span className="check" style={{margin: "0 7px 0 7px"}}></span><p style={{margin: "0 auto 0 0"}}>Paciente</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12" style={{padding: "0"}}>
                    <label>{props.label}</label>
                    <input id={props.id} type={props.type} className={props.class} placeholder={props.placeholder} style={{marginBottom:"0"}} />
                </div>
            </div>
        </div>
    </div>
    )
};

export default InputCRM;
