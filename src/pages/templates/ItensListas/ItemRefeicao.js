import React from 'react';
import SubRowItem from "./SubRowItem";

const ItemRefeicao = (props) => {
    console.log(props.data.idade)
    console.log(props.data.peso)
    return (
        <li>
            <div className="row Item refeicao">
                <div className="col-3 col-sm-1 Item-hora"  style={{paddingRight:"0"}}>
                    <p className="subtitle" style={{margTop: "10px"}}>HORA</p>
                    <p className="Hora" style={{margTop: "10px"}}>{props.data.Hora}</p>                    
                </div>
                <div className="col-2 col-sm-2 icone-container Item-icon"   style={{padding:"0", textAlign: "center"}}>
                    <i className={"fa fa-spinner"}/>
                </div>
                <div className="col-5 col-sm-7 Item-titulo" style={{padding:"0"}}>
                    <p className="titulo-2">{props.data.Refeicao}</p>
                    <div className="row subrow">
                        <SubRowItem valor={"30"} subtitulo="CARB" col="6" />
                        <SubRowItem valor={"0"} subtitulo="PESO" col="6" />                        
                    </div>
                </div>          
                <div className="col-2" style={{paddingLeft:"0", textAlign: "center"}}>
                    <div className="Item-doses-insulina">
                        <p  className="Doses">{props.data.Doses}</p>
                        <p className="subtitle">DOSES</p>
                    </div>
                </div> 
                <div className="col-12" style={{padding:"0", textAlign: "center"}}>
                    <hr/>
                </div>   
            </div>
        </li>
    )
};

export default ItemRefeicao;
