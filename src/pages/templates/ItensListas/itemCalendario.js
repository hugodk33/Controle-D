import React from 'react';

const itemCalendario = (props) => {

    return (
        <div class="col-1 item-calendario">
          <p class="semana">{props.semana}</p>
          <p class="dia">{props.dia}</p>
        </div>
    )
};

export default itemCalendario;
