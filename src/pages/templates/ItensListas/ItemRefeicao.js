import React from 'react';
import SubRowItem from "./SubRowItem";

const ItemRefeicao = (props) => {
    return (
        <li>
            <div className="row refeicao">
                <div className="col-3"  style={{paddingRight:"0"}}>
                    <p className="Hora">{props.data.Hora}</p>                    
                </div>
                <div className="col-2 icone-container"   style={{padding:"0"}}>
                    <i className={"fa fa-spinner"}/>
                </div>
                <div className="col-5" style={{padding:"0"}}>
                    <p className="titulo-2">{props.data.Refeicao}</p>
                    <div className="row subrow">
                        <SubRowItem valor={props.data.idade} subtitulo="CARB" col="6" />
                        <SubRowItem valor={props.data.peso} subtitulo="PESO" col="6" />                        
                    </div>
                </div>          
                <div className="col-2" style={{paddingLeft:"0", textAlign: "center"}}>
                    <div className="quadro-refeicao">
                        <p  className="Doses">{props.data.Doses}</p>
                        <p className="subtitle">DOSES</p>
                    </div>
                </div> 
                <div className="col-12" style={{paddingLeft:"0", textAlign: "center"}}>
                    <hr/>
                </div>   
            </div>
        </li>
    )
};

export default ItemRefeicao;
