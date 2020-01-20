import React from 'react';
import ItemCalendario from "./ItensListas/itemCalendario";

const Calendario = (props) => {

    return (
      <div class="container-fluid cinza dinamic">
        <div class="row">
          <ItemCalendario dia="11" semana="D"/>
          <ItemCalendario dia="12" semana="S"/>
          <ItemCalendario dia="13" semana="T"/>
          <ItemCalendario dia="14" semana="Q"/>
          <ItemCalendario dia="15" semana="Q"/>
          <ItemCalendario dia="16" semana="S"/>
          <ItemCalendario dia="17" semana="S"/>
        </div>
    </div>
    )
};

export default Calendario;
