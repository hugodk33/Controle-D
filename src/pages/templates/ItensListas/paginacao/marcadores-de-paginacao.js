import React from 'react';

const MarcadorPaginacao = (props) => {

    return (
        <div className={"col-12 barra-paginacao text-center "}>
            <span className="paginacao-btn paginacao-ativo"></span>
            <span className="paginacao-btn"></span>
            <span className="paginacao-btn"></span>
            <span className="paginacao-btn"></span> 
            <span className="paginacao-btn"></span>
            <span className="paginacao-btn"></span>
        </div>
    )
};

export default MarcadorPaginacao;