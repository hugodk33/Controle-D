import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const InputText = (props) => {

    return (
    <div className={"textarea " + "col-" + props.col}>
        <TextareaAutosize aria-label="empty textarea" placeholder="Empty" rows="4" />;
    </div>
    )
};

export default InputText;
