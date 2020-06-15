import React from 'react';
import SubRowItem from "./SubRowItem";
import Icones from "../icons/icones"

const ItemAlimento = (props) => {
    return (
        <li>
            <div className="row">
                <div className="col-2 col-sm-1 col-md-1 icone-container text-center" style={{maxWidth: "70px"}}>
                    <Icones nomeAlimento={props.alimento.Descricao} />   
                </div>
                <div className="col-10 col-sm-10 col-lg-10">
                    <p className="titulo-2">{props.alimento.Descricao}</p>
                    <div className="row subrow">
                        {props.alimento.Proteina && <SubRowItem valor={props.alimento.Proteina.Qtd} subtitulo="PROT." col="3" />}
                        {props.alimento.Carboidrato && <SubRowItem valor={props.alimento.Carboidrato.Qtd} subtitulo="CARB." col="3" />}
                        {props.alimento.Caloria && <SubRowItem valor={props.alimento.Caloria.Qtd} subtitulo="CAL." col="3" />}
                        
                    </div>
                </div>     
            </div>
        </li>
    )
};

export default ItemAlimento;
