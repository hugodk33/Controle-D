import React from 'react';
import SubRowItem from "./SubRowItem";
import TituloForm from "../../templates/TituloForm";
import InputSelect from "../Inputs/InputSelect";
import InputN from "../Inputs/InputN";
import Button from "../Inputs/Btn";
import { IconeAdicionarRefeicao } from '../icons/icones-botoes'

const ItemAlimento = (props) => {
    return (
        <div className="row" style={{marginTop: "25px"}}>
            <TituloForm icone="alimento" titulo="Alimentos"/>
            <div className="col-4 col-sm-3" style={{marginBottom: "10px"}}>
                <InputSelect label="ALIMENTO"/>
            </div>
            <div className="col-4 col-sm-3" style={{marginBottom: "10px"}}>
                <InputN label="QUANT." />
            </div> 
            <div className="col-4 col-sm-3" style={{marginBottom: "10px"}}>
                <InputSelect label="PORÇÃO" />
            </div> 
            <div className="col-3 col-sm-3" style={{textAlign: "center"}}>
                <Button icone={"adicionar"} titulo={"ADICIONAR ALIMENTO"} />
            </div>
        </div>
    )
};

export default ItemAlimento;
