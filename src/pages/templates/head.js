import React from 'react';
import Menu from './MenuMedico';

const Top = () => {

  return (
    <div>
        <div style={{backgroundColor: 'rgb(59, 111, 156)'}} >
            <div className="container-fluid">
                <div className="row" style={{margin: 0}}>
                    <div className="col-8 col-sm-3 brand" style={{textAlign: "right"}}>
                        <h4 style={{color:"white"}}> Controle D </h4><button className={"button-menu"}> </button>
                    </div>
                </div>
            </div>
        </div>
        <div className={"submenu-mobile"} >
            
        </div>
    </div>
  );
};

export default Top;
