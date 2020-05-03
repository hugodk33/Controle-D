import React from 'react';
import SubRowItem from "./SubRowItem";
import InputSelect from "../Inputs/InputSelect";
import InputN from "../Inputs/InputN";

const ItemAlimento = (props) => {
    return (
        <li>
            <div className="row">
                <div className="col-4 col-sm-5">
                    <InputSelect label="ALIMENTO"/>
                </div>
                <div className="col-4 col-sm-2">
                    <InputN label="QUANT." />
                </div> 
                <div className="col-4 col-sm-5">
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
        </li>
    )
};

export default ItemAlimento;
