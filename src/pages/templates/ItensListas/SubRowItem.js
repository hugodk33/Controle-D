import React from 'react';

const SubRowItem = (props) => {

    return (
        <div className={"col-" + props.col + " col-sm-2" }>
            <p className="subtitle">{props.subtitulo}</p>
            <p className="subinfo">{props.valor}</p>
        </div>
    )
};

export default SubRowItem;
