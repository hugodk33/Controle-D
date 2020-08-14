import React from 'react';
import { withRouter } from 'react-router-dom';

import Input from './templates/Inputs/Input';
import Btn from './templates/Inputs/Btn';

const Home = () => {

  return (
    <div className="container-fluid"  style={{backgroundImage: "linear-gradient(#6699CC, #58a8ff)", height: "1100px"}} > 
      <div className="container" > 
        <div className="row" style={{margin: 0}}> 
          <div className="col-12  col-sm-8 col-md-4 text-center infos-login">
            <div style={{display: "inline-block", width: "65px" , height: "65px", borderRadius: "100%", border: '1px white solid', backgroundColor: 'none'}}></div>
            <h1 style={{color: 'white'}}>Lorem Ipsum dolor Sit Amet</h1>
            <h3 style={{color: 'white'}}>Lorem Ipsum dolor Sit Amet, Lorem Ipsum dolor Sit Amet</h3>
            <br />
          </div> 
          <div  className="col-12 col-sm-8 col-md-4" style={{margin: '0 auto'}}> 
            <div className="login-box row moldura" style={{padding: "15px 10px", backgroundColor: "white"}}>
              <Input  id="Email-user" label="EMAIL" placeholder="Usuario@Email.com" type={"text"} col="12"/>
              <Input  id="Senha" label="SENHA" placeholder="***********" type={"password"} col="12"/>
              <div className="col-12">
                <Btn className="btn btn-primary" value="" titulo={"ENTRAR"}/>
              </div>
              <div className="col-12 ">
                <button className="btn">Cadastrar-se</button>
              </div>
            </div>
          </div>        
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);
