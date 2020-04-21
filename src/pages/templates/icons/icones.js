import React from 'react';
import { IconeAcerola , IconeArroz , IconeBacon , IconeBanana , 
    IconeBatataFrita , IconeBebida , IconeBebidaDois , IconeBiscoito , 
    IconeBolinho , IconeBolo , IconeBombom , IconeBurrito , IconeCaranguejo , 
    IconeCarne , IconeCenoura , IconeCereja , IconeCerveja , IconeCha , 
    IconeChocolate , IconeChurrasco , IconeCouve , IconeCouxaDeFrango , 
    IconeCoxinha , IconeCozido , IconeDonut , IconeDrink , IconeFeijao , 
    IconeHamburguer , IconeLaranja , IconeMacan , IconeMacarrao , IconeMelancia , 
    IconeMilho , IconeMorango , IconeOvo , IconePaoFrances , IconePeixe , IconePera , 
    IconePicole , IconePipoca , IconePirulito , IconePizza , IconeQueijo , 
    IconeRefrigerante , IconeTorta , IconeUva } from './icones-alimentos'


const IconeCTN = (props) => {
    switch(props.icone) {
        case 'acerola' :
            return <IconeAcerola />
        case 'arroz' :
            return <IconeArroz />
        case 'bacon' :
            return <IconeBacon />
        case 'banana' :
            return <IconeBanana />
        case 'batata-frita' :
            return <IconeBatataFrita />   
        case 'batata-frita' :
            return <IconeBatataFrita />  
        case 'bebida' :
            return <IconeBebida />   
        case 'bebida-2' :
            return <IconeBebidaDois /> 
        case 'biscoito' :
            return <IconeBiscoito />             
        case 'bolinho' :
            return <IconeBolinho /> 
        case 'bolo' :
            return <IconeBolo />  
        case 'bom-bom' :
            return <IconeBombom />   
        case 'burrito' :
            return <IconeBurrito /> 
        case 'caranguejo' :
            return <IconeCaranguejo />  
        case 'carne' :
            return <IconeCarne />     
        case 'cenoura' :
            return <IconeCenoura />
        case 'cereja' :
            return <IconeCereja />   
        case 'cerveja' :
            return <IconeCerveja /> 
        case 'cha' :
            return <IconeCha />             
        case 'bolinho' :
            return <IconeBolinho /> 
        case 'bolo' :
            return <IconeBolo />  
        case 'chocolate' :
            return <IconeChocolate />   
        case 'churrasco' :
            return <IconeChurrasco /> 
        case 'couve' :
            return <IconeCouve />  
        case 'frango' :
            return <IconeCouxaDeFrango />     
        case 'coxinha' :
            return <IconeCoxinha />
        case 'cozido' :
            return <IconeCozido />
        case 'donut' :
            return <IconeDonut />  
        case 'drink' :
            return <IconeDrink />    
        case 'feijao' :
            return <IconeFeijao />  
        case 'hamburguer' :
            return <IconeHamburguer />
        case 'laranja' :
            return <IconeLaranja />
        case 'macan' :
            return <IconeMacan />  
        case 'macarrao' :
            return <IconeMacarrao />    
        case 'melancia' :
            return <IconeMelancia />  
        case 'milho' :
            return <IconeMilho />
        case 'morango':
            return <IconeMorango />
        case 'ovo':
            return <IconeOvo />
        case 'pao':
            return <IconePaoFrances />
        case 'peixe':
            return <IconePeixe />
        case 'pera':
            return <IconePera />
        case 'picole':
            return <IconePicole />
        case 'pipoca':
            return <IconePipoca />
        case 'pirulito':
            return <IconePirulito />  
        case 'pizza':
            return <IconePizza />  
        case 'queijo':
            return <IconeQueijo />
        case 'refrigerante':
            return <IconeRefrigerante />
        case 'torta':
            return <IconeTorta />
        case 'uva':
            return <IconeUva />            
        default:
            return null
    }
};

export default IconeCTN;