import React from 'react';

const SinaldeMais = (props) => {
    return (
        <svg version="1.1" style={{display: "inline-block"}} height="15px" width="15px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 420 420">
            <polygon fill="white" points="370,177.7 242.3,177.7 242.3,50 177.7,50 177.7,177.7 50,177.7 50,242.3 177.7,242.3 177.7,370 242.3,370 
	242.3,242.3 370,242.3 "/>
        </svg>  
    )
};

const SinaldeMenos = (props) => {
    return (
        <svg version="1.1" style={{display: "inline-block"}} height="15px" width="15px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 420 420">
                <rect fill="white" x="50" y="177.7" width="320" height="64.6"/>
        </svg>  
    )
};

const IconeBuscar = (props) => {
    return (
        <svg version="1.1" style={{display: "inline-block"}} height="25px" width="25px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 80 80">
            <path fill="white" d="M70.3,66.4L49.5,45.6c6.8-8.7,6.2-21.3-1.8-29.3c-8.7-8.7-22.7-8.7-31.4,0c-8.7,8.7-8.7,22.7,0,31.4c8,8,20.6,8.6,29.3,1.8
	l20.8,20.8L70.3,66.4z M19.2,44.7c-7.1-7.1-7.1-18.5,0-25.5c7.1-7.1,18.5-7.1,25.5,0c6.4,6.4,7,16.4,1.8,23.4
	c-0.5,0.7-1.1,1.4-1.8,2.1c-0.7,0.7-1.4,1.2-2.1,1.8C35.5,51.7,25.6,51.1,19.2,44.7z"/>
        </svg>  
    )
};

export { SinaldeMais , SinaldeMenos , IconeBuscar }