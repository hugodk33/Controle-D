import React from 'react';

//{props.soma? <span className="soma-span">+</span> : null}

const SomatoriaAlimentos = (props) => {

    return (
        <div className={"ItemSomatoriaAlimento"}>
            <span className="soma-span esq">+</span>
            <div className={"valores"}>
                <p>{props.valor}</p>
                <hr />
                <p className="subtitle">{props.subtitulo}</p>
            </div>
            <span className="soma-span dir">+</span>        
        </div>
    )
};

export default SomatoriaAlimentos;

