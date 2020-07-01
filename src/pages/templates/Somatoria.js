import React from 'react';
import SomatoriaAlimentos from './SomatoriaAlimentos'
import {IconeListaSeringa , IconeListaRelogioDois} from './icons/icones-lista'

//{props.soma? <span className="soma-span">+</span> : null}

const Somatoria = (props) => {

    return (
        <div class="col-12 dinamic">
            <div id="somatoria" class="moldura">
              <div class="row">
                <div class=" col-md-7">
                  <SomatoriaAlimentos subtitulo={'Alimento 1'} valor={'10'} soma={false}/>
                  <SomatoriaAlimentos subtitulo={'Alimento 2'} valor={'13'} soma={true}/>
                  <SomatoriaAlimentos subtitulo={'Alimento 3'} valor={'11'} soma={true}/>
                  <SomatoriaAlimentos subtitulo={'Alimento 4'} valor={'12'} soma={true}/>
                </div>
                <div className="col-12 no-desktop">
                  <hr />
                </div>
                <div class="col-md-2 text-center" style={{maxWidth:'77px'}}>
                    <div class="doses-de-insulina-output"> 
                        <span>10</span>
                        <p class="subtitle">DOSES</p>
                    </div>
                </div>
                <div class="col-7 col-md-3 dose-dados text-left">
                    <p class="subtitle" style={{marginTop: '4px'}}><IconeListaSeringa /> TIPO</p>
                    <p class="value" style={{margin: '3px 0'}}> Um </p>
                    <p class="subtitle"><IconeListaRelogioDois /> ROTINA</p>
                    <p class="value" style={{margin: '3px 0'}}> de 12 em 12 </p>
                </div>
              </div> 
            </div>
        </div>
    )
};

export default Somatoria;

