import React from 'react';

const SinaldeMais = (props) => {
    return (
        <svg version="1.1" style={{display: "inline-block"}} height="11px" width="11px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 420 420">
            <polygon fill="white" points="370,177.7 242.3,177.7 242.3,50 177.7,50 177.7,177.7 50,177.7 50,242.3 177.7,242.3 177.7,370 242.3,370 
	242.3,242.3 370,242.3 "/>
        </svg>  
    )
};

const SinaldeMenos = (props) => {
    return (
        <svg version="1.1" style={{display: "inline-block"}} height="11px" width="11px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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

const IconeAdicionarRefeicao = (props) => {
    return (
        <svg version="1.1" height="35px" width="35px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 31 31" xmlSpace="preserve">
        <g>
            <path fill="white" d="M8.5,0.7C8,0.7,7.5,1.1,7.5,1.5v5.9c0,0.9-0.5,1.6-1.3,2V1.5c0-0.5-0.4-0.9-0.9-0.9S4.4,1,4.4,1.5v7.9
                c-0.8-0.3-1.3-1.1-1.3-2V1.5c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.4-0.9,0.9v5.9c0,1.7,1.1,3.1,2.6,3.7v17.8c0,0.8,0.7,1.4,1.5,1.4
                s1.5-0.6,1.5-1.4V11.1c1.5-0.6,2.6-2,2.6-3.7V1.5C9.4,1.1,9,0.7,8.5,0.7z"/>
            <g>
                <path fill="white" d="M17.9,19.2c0.7-1.1,1.7-2,2.9-2.5V8.7V0.7c-3.4,0-6.1,2.7-6.1,5.9v5.6c0,2.4,1.3,4.5,3.2,5.7V19.2z"/>
                <path fill="white" d="M17.9,27.1v1.8c0,0.8,0.7,1.4,1.5,1.4c0.6,0,1-0.3,1.3-0.8C19.6,29,18.6,28.2,17.9,27.1z"/>
            </g>
            <path fill="aqua" d="M23.9,17.3c-3.2,0-5.8,2.6-5.8,5.8c0,3.2,2.6,5.8,5.8,5.8c3.2,0,5.8-2.6,5.8-5.8C29.7,20,27.1,17.3,23.9,17.3z M27.5,23.2
                c0,0.7-0.6,1.2-1.2,1.2h-1.1v1.1c0,0.7-0.6,1.2-1.2,1.2s-1.2-0.6-1.2-1.2v-1.1h-1.1c-0.7,0-1.2-0.6-1.2-1.2v0
                c0-0.7,0.6-1.2,1.2-1.2h1.1v-1.1c0-0.7,0.6-1.2,1.2-1.2s1.2,0.6,1.2,1.2v1.1h1.1C27,21.9,27.5,22.5,27.5,23.2L27.5,23.2z"/>
        </g>
    </svg>
    )
};

export { SinaldeMais , SinaldeMenos , IconeBuscar , IconeAdicionarRefeicao }