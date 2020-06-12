import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {IconeBuscar , IconeAdicionarRefeicao} from '../icons/icones-botoes'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "12px 11px 0" ,
        height: 56 ,
        width: '100%',
        '& > *': {
            marginBottom: 12,
            lineHeight: '18px'
        },
    }
}));

function icones(value) {
    switch(value) {
      case("buscar"):
        return <IconeBuscar />
      case("adicionar"):
        return <IconeAdicionarRefeicao />   
    }
}

const Input = (props) => {

    const classes = useStyles();

    return (
    <div className={"col-" + props.col}>
        <Button  className={classes.root} variant="contained" color="primary">
            {icones(props.icone)}
            {props.titulo}
        </Button>
    </div>
    )
};

export default Input;