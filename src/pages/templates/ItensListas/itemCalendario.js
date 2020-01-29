import React from 'react';

const itemCalendario = (props) => {

    return (
        <div className={"col-1 item-calendario"}>
          <div className={"quadro-calendario"}>
            <p className="semana">{props.semana}</p>
            <p className="dia">{props.dia}</p>
          </div>
        </div>
    )
};

export default itemCalendario;
