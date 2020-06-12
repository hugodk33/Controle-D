import React from 'react';

//{props.soma? <span className="soma-span">+</span> : null}

const SomatoriaAlimentos = (props) => {

    return (
        <div className={"ItemSomatoriaAlimento"}>
            {props.soma? <span className="soma-span">+</span> : null}
            <div className={"valores"}>
                <p>{props.valor}</p>
                <hr />
                <p className="subtitle">{props.subtitulo}</p>
            </div>        
        </div>
    )
};

export default SomatoriaAlimentos;

