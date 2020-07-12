import React from 'react';

const SubRowItem = (props) => {
    let valor = props.valor
    if (valor) {
        valor = valor.toString().replace(',', '.')
        if (isFinite(valor) && !Number.isInteger(+valor)) {
            valor = parseFloat(valor).toFixed(3)
        }
    }

return (
    <div className={"col-" + props.col + " col-sm-2"} style={{minWidth: "50px"}}>
        <p className="subtitle">{props.subtitulo}</p>
        <p className="subinfo">{valor}</p>
    </div>
)
};

export default SubRowItem;
