import React from 'react';

const Container = (props) => {
    console.log(props.children)
    return (
        <div class="row">
          {props.children}
        </div>
    )
};

export default Container;
