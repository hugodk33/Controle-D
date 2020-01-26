import React from 'react';

const SubRowItem = (props) => {

    return (
        <div className="col-3">
            <p className="subtitle">{props.subtitulo}</p>
            <p className="subinfo">{props.valor}</p>
        </div>
    )
};

export default SubRowItem;
