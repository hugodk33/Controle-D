import React from 'react';
import SubRowItem from "./SubRowItem";

const ItemRefeicao = (props) => {

    return (
        <li>
            <div class="row">
                <div class="col-3 icone-container">
                    <i className={"fa fa-" + props.icon}/>
                </div>
                <div class="col-9">
                    <p class="titulo-2">{props.nome}</p>
                    <div class="row subrow">
                        <SubRowItem valor={23} subtitulo="TITLE" col="4" />
                        <SubRowItem valor={13} subtitulo="CARBO" col="4" />
                    </div>
                </div> 
                <div class="col-12">
                    <hr/>
                </div>   
            </div>
        </li>
    )
};

export default ItemRefeicao;
