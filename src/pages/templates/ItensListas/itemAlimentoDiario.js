import React from 'react';
import SubRowItem from "./SubRowItem";
import Icones from "../icons/icones"

const ItemAlimentoDiario = (props) => {
    return (
        <li style={{boxShadow: "2px 2px 4px #dedede"}}>
            <p className="titulo-2"><Icones icone={props.data.icone} /> <b>{props.data.quantidade}</b> {" " + props.data.porcao + " " + props.data.alimento}</p>
        </li>
    )
};

export default ItemAlimentoDiario;
