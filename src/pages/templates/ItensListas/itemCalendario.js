import React from 'react';

const itemCalendario = (props) => {
    
    let classe = " "
    if (props.ponta) {
      if(props.ponta === "esq") {
        classe = " ponta-esq"
      } else if (props.ponta === "dir") {
        classe = " ponta-dir"
      }
    }
    return (
        <div className={'col-md-1 text-center' + classe } style={{maxWidth:"34px" , minWidth:"34px" }}>
          <div className={'item-calendario'} >
            <div className={props.ativado? "quadro-calendario quadro-calendario-ativado": "quadro-calendario"}>
              <p className="semana">{props.semana}</p>
              <p className="dia">{props.dia}</p>
            </div>
          </div>
        </div>
    )
};

export default itemCalendario;
