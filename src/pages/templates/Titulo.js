import React from 'react';

const Titulo = (props) => {

  return (
    <div className="row">
      <div className="col-12 titulo">
        <h5><i className={"fa fa-spinner"}/></h5>
        <h4>{props.titulo}</h4>
      </div>
    </div>
  );
};

export default Titulo;
