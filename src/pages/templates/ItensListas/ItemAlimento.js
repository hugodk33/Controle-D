import React from 'react';
import SubRowItem from "./SubRowItem";

const ItemAlimento = (props) => {
    return (
        <li>
            <div className="row">
                <div className="col-2 col-sm-1 icone-container">
                    <i className={"fa fa-spinner"}/>
                </div>
                <div className="col-10 col-sm-6 col-lg-4">
                    <p className="titulo-2">{props.data.Descricao && props.data.Descricao.toUpperCase()}</p>
                    <div className="row subrow">
                        {
                         props.data.Proteina && <SubRowItem valor={props.data.Proteina.Qtd} subtitulo="PROT." col="3" />
                        }
                        {
                         props.data.Carboidrato && <SubRowItem valor={props.data.Carboidrato.Qtd} subtitulo="CARB." col="3" />
                        }
                      
                    </div>
                </div>          
                <div className="col-12">
                    <hr/>
                </div>   
            </div>
        </li>
    )
};

export default ItemAlimento;
