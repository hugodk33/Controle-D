import React from 'react';
import SubRowItem from "./SubRowItem";

const ItemPaciente = (props) => {
    return (
        <li>
            <div className="row">
                <div className="col-3 icone-container">
                    <i className={props.data.icone}/>
                </div>
                <div className="col-9">
                    <p className="titulo-2">{props.data.nome}</p>
                    <div className="row subrow">
                        <SubRowItem valor={props.data.idade} subtitulo="IDADE" col="4" />
                        <SubRowItem valor={props.data.peso} subtitulo="PESO" col="4" />
                        <SubRowItem valor={props.data.tipo} subtitulo="TIPO" col="4" />
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

