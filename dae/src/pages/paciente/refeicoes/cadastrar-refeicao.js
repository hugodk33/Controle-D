import React from 'react';
import { withRouter } from 'react-router-dom';

const cadastrarRefeicao = () => {

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h5>CADASTRAR REFEIÇÃO</h5>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-9">
            <input style={{width: "100%"}} placeholder="Nome da Refeição"/>
          </div>
          <div class="col-3">
            <br />
          </div>
          <div class="col-3" style={{paddingRight: "4px"}}>
            <label>DATA</label>
            <input style={{width: "100%"}} placeholder="Data"/>
          </div>
          <div class="col-3" style={{padding: "0"}}>
            <label>HORA</label>
            <input style={{width: "100%"}}  placeholder="Hora"/>
          </div>
          <div class="col-3" style={{paddingLeft: "4px"}}>
            <label>ÍCONE</label>
            <input style={{width: "100%"}}  placeholder="Hora"/>
          </div>
          <div class="dinamic" style={{padding: "0", textAlign: "center", position: "absolute", right: "15px"}}>
            <div class="doses-de-insulina-output">
              <spam>10</spam>
              <p class="subtitle">DOSES</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid cinza dinamic">
          <div class="container">
            <div class="row">
              <div class="col-3">
                  <spam>3g</spam>
                  <p class="subtitle">ALIMENTO 1</p>
              </div> 
              <div class="col-3">
                  <spam>3g</spam>
                  <p class="subtitle">ALIMENTO 2</p>
                  <spam class="more">+</spam> 
              </div>
              <div class="col-3">
                <spam>3g</spam>
                <p class="subtitle">ALIMENTO 3</p>
                <spam class="more">+</spam> 
              </div>  
            </div> 
          </div> 
      </div>
      <div class="container">
          <div class="row">
            <div class="col-12 lista-alimento">
              <ul>
                <li><i class="fas fa-drumstick-bite"></i> Nome do Alimento</li>
                <li><i class="fas fa-fish"></i> Nome do Alimento</li>
                <li><i class="fas fa-apple-alt"></i> Nome do Alimento</li>
              </ul>
            </div>
          </div> 
          <div class="row novo-alimento">
            <div class="col-12">
              <input style={{width: "32%"}} placeholder="Procurar Alimento"/>
              <input style={{width: "12%"}} placeholder="Qtd"/>
              <input style={{width: "12%"}} placeholder="Porção"/> 
              <button class="btn-azul" style={{width: "25%"}} placeholder="Nome da Refeição">OK</button> 
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <hr style={{width: "25%", border: "gray 1px solid"}}/> 
              <button class="btn-azul btn-more" placeholder="Nome da Refeição">+</button> 
              <hr style={{width: "25%", border: "gray 1px solid"}}/> 
            </div>
          </div>
      </div>
    </div>
  );
};

export default withRouter(cadastrarRefeicao);
