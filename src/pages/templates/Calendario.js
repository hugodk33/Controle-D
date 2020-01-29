import React from 'react';
import ItemCalendario from "./ItensListas/itemCalendario";

const Calendario = (props) => {

    return (
      <div className="container-fluid cinza dinamic" style={{textAlign: "center"}}>
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-3" style={{paddingRight: "4px"}}>
              <label style={{left: "25px"}}>Semana</label>
              <select>Semana</select>
            </div>
            <div className="col-6 col-sm-3">  
              <label style={{left: "25px"}}>Dia</label>
              <select>Dia</select>
            </div>
            <div className="col-12" style={{height: "1px"}}> 
              <br/>
            </div>
            <div className="col-12 col-sm-6" style={{padding: "0"}}> 
              <div className="row" style={{margin: "0"}}>
                <ItemCalendario dia="11" semana="D"/>
                <ItemCalendario dia="12" semana="S"/>
                <ItemCalendario dia="13" semana="T"/>
                <ItemCalendario dia="14" semana="Q"/>
                <ItemCalendario dia="15" semana="Q"/>
                <ItemCalendario dia="16" semana="S"/>
                <ItemCalendario dia="17" semana="S"/>
              </div>   
            </div>
          </div>
        </div>
    </div>
    )
};

export default Calendario;
