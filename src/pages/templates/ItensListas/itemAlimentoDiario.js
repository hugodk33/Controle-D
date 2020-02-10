import React from 'react';
import SubRowItem from "./SubRowItem";

const ItemAlimentoDiario = (props) => {
    return (
        <li>
            <div className="row">
                <div className="col-2 col-sm-1 icone-container">
                    <i className={"fa fa-spinner"}/>
                </div>
                <div className="col-10 col-sm-11" style={{paddingTop: "10px"}}>
                    <p className="titulo-2"><b>{props.data.quantidade}</b> {" " + props.data.porcao + " " + props.data.alimento}</p>
                </div>          
                <div className="col-12">
                    <hr/>
                </div>   
            </div>
        </li>
    )
};

export default ItemAlimentoDiario;
