import React from 'react';
import Btn from './Btn'
import {IconeListaEditar , IconeListaEngrenagem} from '../icons/icones-lista'

const Edit = (props) => {


    return (
        <div className={"col-" + props.col}>
            <button className="btn btn-lista" style={{float: 'right'}}><IconeListaEditar /></button>
        </div>
    )

};

export default Edit;