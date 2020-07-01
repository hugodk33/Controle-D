import React from 'react';
import SubRowItem from "./SubRowItem";
import TituloForm from "../../templates/TituloForm";
import InputSelect from "../Inputs/InputSelect";
import Input from "../Inputs/Input";
import InputN from "../Inputs/InputN";
import Button from "../Inputs/Btn";
import { IconeAdicionarRefeicao } from '../icons/icones-botoes'

const ItemAlimento = (props) => {
    return (
        <div className="row" style={{marginTop: "25px"}}>
            <TituloForm icone="alimento" titulo="Alimentos"/>
            <div className="col-6 col-sm-4" style={{marginBottom: "10px"}}>
                <button className="btn btn-paragraph" style={{width: '100%', height: "2.850em" , fontSize: "0.875rem"}}>ESCOLHER ALIMENTO</button>
            </div>
            <div className="col-6 col-sm-8" style={{marginBottom: "10px"}}>
                <Input label="ALIMENTO" />
            </div>
            <div className="col-6 col-sm-6" style={{marginBottom: "10px"}}>
                <InputN label="QUANT." />
            </div> 
            <div className="col-6 col-sm-6" style={{marginBottom: "10px"}}>
                <InputSelect label="PORÇÃO" />
            </div> 
            <div className="col-6 col-sm-4" style={{textAlign: "center", marginBottom: '12px', marginLeft: 'auto'}}>
                <Button icone={"adicionar-refeicao"} titulo={"ADICIONAR ALIMENTO"} />
            </div>
        </div>
    )
};

export default ItemAlimento;
