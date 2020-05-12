import React from 'react';

const SomatoriaAlimentos = (props) => {

    return (
        <div className={"col-" + props.col + " col-sm-2" } style={{maxWidth: "90px"}}>
            <p style={{fontSize:"18px", marginBottom: "2px", lineHeight: "18px"}}>{props.valor}</p>
            <p className="subtitle" style={{marginBottom:"4px"}}>{props.subtitulo}</p>
            {props.soma? <span className="soma-span">+</span> : null}
        </div>
    )
};

export default SomatoriaAlimentos;

