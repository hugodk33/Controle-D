import React from 'react';
import { withRouter } from 'react-router-dom';

import Input from './templates/Inputs/Input';

const Home = () => {

  return (
    <div className="container"> 
      <div className="row"> 
        <div className="col-sm-4"> 
          <br />
        </div>
          <br /><br /><br />
          <Input  id="Email-user" label="EMAIL" placeholder="Usuario@Email.com" type={"text"} col="12"/>
          <Input  id="Senha" label="SENHA" placeholder="***********" type={"password"} col="12"/>
            <button className="btn btn-primary">ENTRAR</button>
      </div>
    </div>
  );
};

export default withRouter(Home);
