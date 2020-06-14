import React from 'react';
import ItemCalendario from "./ItensListas/itemCalendario";

const Calendario = (props) => {

    return (
          <div className="row">
            <div className="moldura" style={{width: '100%' , display: 'inline-block'}}>
              <div className="col-6 col-sm-3" style={{marginLeft: "auto"}}>
                <label style={{left: "25px"}}>Semana</label>
                <select>Semana</select>
              </div>
              <div className="col-6 col-sm-3" style={{marginRight: "auto"}}>  
                <label style={{left: "25px"}}>Dia</label>
                <select>Dia</select>
              </div>
              <div className="col-12" style={{height: "1px"}}> 
                <br/>
              </div>
              <div className="col-12 col-sm-6" style={{padding: "0", margin: "0 auto"}}> 
                <div className="row" style={{margin: "0"}}>
                  <ItemCalendario dia="11" semana="D" ativado={true} />
                  <ItemCalendario dia="12" semana="S" ativado={false}/>
                  <ItemCalendario dia="13" semana="T" ativado={false}/>
                  <ItemCalendario dia="14" semana="Q" ativado={false}/>
                  <ItemCalendario dia="15" semana="Q" ativado={false}/>
                  <ItemCalendario dia="16" semana="S" ativado={false}/>
                  <ItemCalendario dia="17" semana="S" ativado={false}/>
                </div>   
              </div>
            </div>
          </div>
    )
};

export default Calendario;
