import React from 'react';

const itemCalendario = (props) => {
    return (
        <div className={'col-1 item-calendario '}>
          <div className={props.ativado? "quadro-calendario quadro-calendario-ativado": "quadro-calendario"}>
            <p className="semana">{props.semana}</p>
            <p className="dia">{props.dia}</p>
          </div>
        </div>
    )
};

export default itemCalendario;
