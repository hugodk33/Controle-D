import React from 'react';
import {
    IconeAcerola, IconeArroz, IconeBacon, IconeBanana,
    IconeBatataFrita, IconeBebida, IconeBebidaDois, IconeBiscoito,
    IconeBolinho, IconeBolo, IconeBombom, IconeBurrito, IconeCaranguejo,
    IconeCarne, IconeCenoura, IconeCereja, IconeCerveja, IconeCha,
    IconeChocolate, IconeChurrasco, IconeCouve, IconeCouxaDeFrango,
    IconeCoxinha, IconeCozido, IconeDonut, IconeDrink, IconeFeijao,
    IconeHamburguer, IconeLaranja, IconeMacan, IconeMacarrao, IconeMelancia,
    IconeMilho, IconeMorango, IconeOvo, IconePaoFrances, IconePeixe, IconePera,
    IconePicole, IconePipoca, IconePirulito, IconePizza, IconeQueijo,
    IconeRefrigerante, IconeTorta, IconeUva
} from './icones-alimentos'


const IconeCTN = (props) => {
    const nomeAlimento = props.nomeAlimento.toUpperCase().normalize();

    if (nomeAlimento.includes('acerola'.toUpperCase().normalize()))
        return <IconeAcerola />
    if (nomeAlimento.includes('arroz'.toUpperCase().normalize()))
        return <IconeArroz />
    if (nomeAlimento.includes('bacon'.toUpperCase().normalize()))
        return <IconeBacon />
    if (nomeAlimento.includes('banana'.toUpperCase().normalize()))
        return <IconeBanana />
    if (nomeAlimento.includes('batata frita'.toUpperCase().normalize())
        || nomeAlimento.includes('batata-frita'.toUpperCase().normalize()))
        return <IconeBatataFrita />
    if (nomeAlimento.includes('bebida'.toUpperCase().normalize()))
        return <IconeBebida />
    if (nomeAlimento.includes('bebida'.toUpperCase().normalize()))
        return <IconeBebidaDois />
    if (nomeAlimento.includes('biscoito'.toUpperCase().normalize()))
        return <IconeBiscoito />
    if (nomeAlimento.includes('bolinho'.toUpperCase().normalize()))
        return <IconeBolinho />
    if (nomeAlimento.includes('bolo'.toUpperCase().normalize()))
        return <IconeBolo />
    if (nomeAlimento.includes('bom-bom'.toUpperCase().normalize()))
        return <IconeBombom />
    if (nomeAlimento.includes('burrito'.toUpperCase().normalize()))
        return <IconeBurrito />

    if (nomeAlimento.includes('caranguejo'.toUpperCase().normalize()))
        return <IconeCaranguejo />

    if (nomeAlimento.includes('carne'.toUpperCase().normalize()))
        return <IconeCarne />

    if (nomeAlimento.includes('cenoura'.toUpperCase().normalize()))
        return <IconeCenoura />

    if (nomeAlimento.includes('cereja'.toUpperCase().normalize()))
        return <IconeCereja />

    if (nomeAlimento.includes('cerveja'.toUpperCase().normalize()))
        return <IconeCerveja />

    if (nomeAlimento.includes('cha'.toUpperCase().normalize()))
        return <IconeCha />

    if (nomeAlimento.includes('bolinho'.toUpperCase().normalize()))
        return <IconeBolinho />

    if (nomeAlimento.includes('bolo'.toUpperCase().normalize()))
        return <IconeBolo />

    if (nomeAlimento.includes('chocolate'.toUpperCase().normalize()))
        return <IconeChocolate />

    if (nomeAlimento.includes('carne'.toUpperCase().normalize()))
        return <IconeChurrasco />

    if (nomeAlimento.includes('couve'.toUpperCase().normalize()))
        return <IconeCouve />

    if (nomeAlimento.includes('frango'.toUpperCase().normalize()))
        return <IconeCouxaDeFrango />

    if (nomeAlimento.includes('coxinha'.toUpperCase().normalize()))
        return <IconeCoxinha />

    if (nomeAlimento.includes('cozido'.toUpperCase().normalize()))
        return <IconeCozido />

    if (nomeAlimento.includes('donut'.toUpperCase().normalize()))
        return <IconeDonut />

    if (nomeAlimento.includes('drink'.toUpperCase().normalize()))
        return <IconeDrink />

    if (nomeAlimento.includes('feijao'.toUpperCase().normalize()))
        return <IconeFeijao />

    if (nomeAlimento.includes('hamburguer'.toUpperCase().normalize()))
        return <IconeHamburguer />

    if (nomeAlimento.includes('laranja'.toUpperCase().normalize()))
        return <IconeLaranja />

    if (nomeAlimento.includes('macan'.toUpperCase().normalize()))
        return <IconeMacan />

    if (nomeAlimento.includes('macarrao'.toUpperCase().normalize()))
        return <IconeMacarrao />

    if (nomeAlimento.includes('melancia'.toUpperCase().normalize()))
        return <IconeMelancia />

    if (nomeAlimento.includes('milho'.toUpperCase().normalize()))
        return <IconeMilho />

    if (nomeAlimento.includes('morango'.toUpperCase().normalize()))
        return <IconeMorango />

    if (nomeAlimento.includes('ovo'.toUpperCase().normalize()))
        return <IconeOvo />

    if (nomeAlimento.includes('pao'.toUpperCase().normalize()))
        return <IconePaoFrances />

    if (nomeAlimento.includes('peixe'.toUpperCase().normalize()))
        return <IconePeixe />

    if (nomeAlimento.includes('pera'.toUpperCase().normalize()))
        return <IconePera />

    if (nomeAlimento.includes('picole'.toUpperCase().normalize()))
        return <IconePicole />

    if (nomeAlimento.includes('pipoca'.toUpperCase().normalize()))
        return <IconePipoca />

    if (nomeAlimento.includes('pirulito'.toUpperCase().normalize()))
        return <IconePirulito />

    if (nomeAlimento.includes('pizza'.toUpperCase().normalize()))
        return <IconePizza />

    if (nomeAlimento.includes('queijo'.toUpperCase().normalize()))
        return <IconeQueijo />

    if (nomeAlimento.includes('refrigerante'.toUpperCase().normalize()))
        return <IconeRefrigerante />

    if (nomeAlimento.includes('torta'.toUpperCase().normalize()))
        return <IconeTorta />
    if (nomeAlimento.includes('uva'.toUpperCase().normalize()))
        return <IconeUva />
    else
    return <i className={"fa fa-spinner"}/>
};

export default IconeCTN;