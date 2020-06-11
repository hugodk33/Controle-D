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
                    <p className="titulo-2">{props.data.Nome}</p>
                    <div className="row subrow">
                        <SubRowItem valor={props.data.Idade} subtitulo="IDADE" col="3" />
                        <SubRowItem valor={props.data.Peso} subtitulo="PESO" col="3" />
                        <SubRowItem valor={props.data.Tipo} subtitulo="TIPO" col="3" />
                        <SubRowItem valor={props.data.QtdInsulinaPorGramaCarbo} subtitulo="INS/CARB" col="3" />
                    </div>
                    <div className="meta" >
                        <p>Atualizado em: <b> 11/11/11</b></p>
                        <p>Cadastrado por: <b> <a>Doutor Fulano</a></b></p>
                        <p style={{marginBottom: "6px"}}>Última Entrada: <b> 11/11/11</b></p>
                           
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

