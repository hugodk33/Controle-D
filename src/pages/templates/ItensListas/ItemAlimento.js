import React from 'react';
import SubRowItem from "./SubRowItem";

const ItemAlimento = (props) => {
    return (
        <li>
            <div className="row">
                <div className="col-3 icone-container">
                    <i className={props.data.icone}/>
                </div>
                <div className="col-9">
                    <p className="titulo-2">{props.data.alimento}</p>
                    <div className="row subrow">
                        <SubRowItem valor={props.data.calorias} subtitulo="CAL." col="4" />
                        <SubRowItem valor={props.data.carbo} subtitulo="CARB." col="4" />
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
