import React from 'react';
import SubRowItem from "./SubRowItem";
import Icones from "../icons/icones"
import Edit from "../Inputs/Edit";

const ItemAlimentoDiario = (props) => {
    return (
        <li>
            <div className="row">
                <div className="col-2 col-sm-1 col-md-1 icone-container text-center" style={{maxWidth: "70px"}}>
                    <Icones alimento='banana' />   
                </div>
                <div className="col-5 col-sm-7" style={{paddingTop: "17px"}}>
                    <p style={{color: '#a8a8a8', fontSize: '18px'}}><b>{props.data.quantidade}</b> {" " + props.data.porcao + " " + props.data.alimento}</p>
                </div>
                <Edit col="4 col-sm-4"/> 
            </div>
        </li>
    )
};

export default ItemAlimentoDiario;
