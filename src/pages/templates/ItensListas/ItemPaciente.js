import React from 'react';
import SubRowItem from "./SubRowItem";

const ItemPaciente = (props) => {
    return (
        <li>
            <div className="row">
                <div className="col-2 col-sm-1 icone-container">
                    <i className={"fa fa-spinner"}/>
                </div>
                <div className="col-10 col-sm-6 col-lg-4">
                    <p className="titulo-2">{props.data.nome}</p>
                    <div className="row subrow">
                        <SubRowItem valor={props.data.idade} subtitulo="IDADE" col="3" />
                        <SubRowItem valor={props.data.peso} subtitulo="PESO" col="3" />
                        <SubRowItem valor={props.data.tipo} subtitulo="TIPO" col="3" />
                    </div>
                </div>          
                <div className="col-12">
                    <hr/>
                </div>   
            </div>
        </li>
    )
};

export default ItemPaciente;

