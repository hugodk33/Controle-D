import React from 'react';
import SubRowItem from "./SubRowItem";
import Icones from "../icons/icones"
import Edit from "../Inputs/Edit";

const ItemAlimento = (props) => {
    return (
        <li>
            <div className="row">
                <div className="col-2 col-sm-1 col-md-1 icone-container text-center">
                    <Icones nomeAlimento={props.alimento.Descricao} />   
                </div>
                <div className="col-5 col-sm-7">
                    <p className="titulo-2">{props.alimento.Descricao}</p>
                    <div className="row subrow">
                        {props.alimento.Proteina && <SubRowItem valor={props.alimento.Proteina.Qtd} subtitulo="PROT." col="3" />}
                        {props.alimento.Carboidrato && <SubRowItem valor={props.alimento.Carboidrato.Qtd} subtitulo="CARB." col="3" />}
                        {props.alimento.Caloria && <SubRowItem valor={props.alimento.Caloria.Qtd} subtitulo="CAL." col="3" />}
                        
                    </div>
                </div>
                <Edit col="4 col-sm-4"/>     
            </div>
        </li>
    )
};

export default ItemAlimento;
