import React from 'react';
import SubRowItem from "./SubRowItem";
import Icones from "../icons/icones"

const ItemAlimento = (props) => {
    return (
        <li>
            <div className="row">
                <div className="col-2 col-sm-1 col-md-1 icone-container text-center" style={{maxWidth: "70px"}}>
                    <Icones icone={props.data.icone} />   
                </div>
                <div className="col-10 col-sm-6 col-lg-4">
                    <p className="titulo-2">{props.data.alimento}</p>
                    <div className="row subrow">
                        <SubRowItem valor={props.data.calorias} subtitulo="CAL." col="3" />
                        <SubRowItem valor={props.data.carbo} subtitulo="CARB." col="3" />
                    </div>
                </div>     
            </div>
        </li>
    )
};

export default ItemAlimento;
