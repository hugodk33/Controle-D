import React from 'react';
import ItemCalendario from "./ItensListas/itemCalendario";
import InputSelect from './Inputs/InputSelect';

const Calendario = (props) => {

    return (
          <div className="moldura" style={{width: '100%' , display: 'inline-block'}}>
            <div className="row">
              <div className="col-6 col-sm-3" style={{marginLeft: "auto"}}>
                <InputSelect label="MÊS" />
              </div>
              <div className="col-6 col-sm-3" style={{marginRight: "auto"}}>  
                <InputSelect label="SEMANA" />
              </div>
              <div className="col-12" style={{height: "1px"}}> 
                <br/>
              </div>
                <ItemCalendario dia="11" semana="D" ativado={true}  ponta="esq" />
                <ItemCalendario dia="12" semana="S" ativado={false} />
                <ItemCalendario dia="13" semana="T" ativado={false} />
                <ItemCalendario dia="14" semana="Q" ativado={false} />
                <ItemCalendario dia="15" semana="Q" ativado={false} />
                <ItemCalendario dia="16" semana="S" ativado={false} />
                <ItemCalendario dia="17" semana="S" ativado={false} ponta="dir" />
            </div>
          </div>
    )
};

export default Calendario;
