import React from 'react';

const SubRowItem = (props) => {

    return (
        <div class="col-3">
            <p class="subtitle">{props.subtitulo}</p>
            <p class="subinfo">{props.valor}</p>
        </div>
    )
};

export default SubRowItem;
