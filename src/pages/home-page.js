import React from 'react';
import { withRouter } from 'react-router-dom';

import Input from './templates/Input';

const Home = () => {

  return (
    <div className="container"> 
      <div className="row"> 
        <div className="col-4 col-sm-2  col-md-4"> 
          <br />
        </div>
        <div className="col-12 col-sm-8 col-md-4"> 
          <h4 style={{textAlign: "center"}}>Entrar</h4>
          <br /><br /><br />
          <Input  id="Email-user" label="EMAIL" placeholder="Usuario@Email.com" type={"text"} col="12"/>
          <Input  id="Senha" label="SENHA" placeholder="***********" type={"password"} col="12"/>
        </div>        
      </div>
    </div>
  );
};

export default withRouter(Home);
