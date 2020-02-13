import React from 'react';

const SomatoriaAlimentos = (props) => {

    return (
        <div className={"col-" + props.col + " col-sm-2" } style={{maxWidth: "90px"}}>
            <p className="subtitle">{props.subtitulo}</p>
            <p className="subinfo">{props.valor}</p>
            {props.soma? <span className="soma-span">+</span> : null}
        </div>
    )
};

export default SomatoriaAlimentos;

