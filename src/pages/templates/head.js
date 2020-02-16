import React from 'react';

const Top = () => {

  return (
    <div>
        <div style={{backgroundColor: "rgb(76, 134, 226)"}} >
            <div className="container-fluid">
                <div className="row" style={{margin: 0}}>
                    <div className="col-8 col-sm-3 brand" style={{textAlign: "right"}}>
                        <h4 style={{color:"white"}}> Controle D </h4><button className={"button-menu"}> <i class="fas fa-bars" style={{color: "white"}}></i> </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Top;
