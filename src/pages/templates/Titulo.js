import React from 'react';

const Titulo = (props) => {

  return (
    <div class="row">
      <div class="col-12 titulo">
        <h4>{props.titulo}</h4>
      </div>
    </div>
  );
};

export default Titulo;
