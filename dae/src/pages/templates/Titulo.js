import React from 'react';

const Titulo = (props) => {

  return (
    <div class="row">
      <div class="col-12 titulo">
        <h3>{props.titulo}</h3>
      </div>
    </div>
  );
};

export default Titulo;
