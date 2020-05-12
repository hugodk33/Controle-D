import React from 'react';
import SubRowItem from "./SubRowItem";
import InputSelect from "../Inputs/InputSelect";
import InputN from "../Inputs/InputN";

const ItemAlimento = (props) => {
    return (
        <div className="row novoItem" style={{marginTop: "25px", backgroundColor: "#f7f7f7", padding: "10px"}}>
                <div className="col-4 col-sm-4">
                    <InputSelect label="ALIMENTO"/>
                </div>
                <div className="col-4 col-sm-4">
                    <InputN label="QUANT." />
                </div> 
                <div className="col-4 col-sm-4">
                    <InputSelect label="PORÇÃO" />
                </div>            
                <div className="col-5">
                    <hr/>
                </div>
                <div className="col-2" style={{textAlign: "center"}}>
                    <button className="btn btn-primary btn-soma"></button>
                </div>
                <div className="col-5">
                    <hr/>
                </div>   
            </div>
    )
};

export default ItemAlimento;
