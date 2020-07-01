import React from 'react';
import SubRowItem from "./SubRowItem";
import Icones from "../icons/icones";
import Edit from "../Inputs/Edit";
import {IconeListaRelogio} from "../icons/icones-lista";

const ItemRefeicao = (props) => {
    return (
        <li>
            <div className="row Item refeicao">
                <div className="col-2 col-sm-1 icone-container Item-icon"   style={{padding:"0", textAlign: "center"}}>
                    <Icones nomeAlimento="banana"/>
                </div>
                <div className="col-5 col-sm-7 Item-titulo" style={{padding:"0"}}>
                    <p className="titulo-2">{props.data.Refeicao}</p>
                    <div className="row subrow">
                        <div className="col-12" style={{padding:"0", marginBottom: '6px'}}>
                            <p class="hora" style={{margin:"0", fontWeight: 'bold', color: 'gray'}}><IconeListaRelogio /> 10:00</p>
                        </div>
                        <SubRowItem valor={"30"} subtitulo="CARB" col="6" />
                        <SubRowItem valor={"0"} subtitulo="PESO" col="6" />                        
                    </div>
                    <button className="btn btn-paragraph" style={{maxWidth: '90px', marginTop: '7'}}>VER ALIMENTOS</button>
                </div>   
                <Edit col="4 col-sm-4"/>
            </div>
        </li>
    )
};

/*
<div className="col-3" style={{paddingLeft:"0", textAlign: "center"}}>
    <div className="Item-doses-insulina" style={{float: 'right'}}>
        <p  className="Doses">{props.data.Doses}</p>
        <p className="subtitle">DOSES</p>
    </div>
</div>  
*/

export default ItemRefeicao;
