import React from 'react';
import SubRowItem from "./SubRowItem";
import Icones from "../icons/icones"

const ItemAlimentoDiario = (props) => {
    return (
        <li>
            <p className="titulo-2"><Icones icone={props.data.icone} /> <b>{props.data.quantidade}</b> {" " + props.data.porcao + " " + props.data.alimento}</p>
            <hr/>
        </li>
    )
};

export default ItemAlimentoDiario;
