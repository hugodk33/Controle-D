import React from 'react';

const ItemPaciente = (props) => {

    return (
        <li>
            <div class="row">
                <div class="col-3 icone-container">
                    <i className={"fa fa-spinner"}/>
                </div>
                <div class="col-9">
                    <p class="titulo-2">Dae e tal né</p>
                    <div class="row subrow">
                        <div class="col-3" style={{padding: 0}}>
                            <p class="subtitle">Dae 1</p>
                            <p class="subinfo">Dae 2</p>
                        </div>
                        <div class="col-4" style={{paddingRight: 0}}>
                            <p class="subtitle">Dae 1</p>
                            <p class="subinfo">Dae 2</p>
                        </div>
                    </div>
                </div> 
                <div class="col-12">
                    <hr style={{ margin: "4px 0"}}/>
                </div>   
            </div>
        </li>
    )
};

export default ItemPaciente;
