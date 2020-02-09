import React from 'react';

const Titulo = (props) => {

  return (
    <div className="row">
      <div className="col-12 titulo">
        <h4>{props.titulo}</h4>
      </div>
    </div>
  );
};

export default Titulo;
