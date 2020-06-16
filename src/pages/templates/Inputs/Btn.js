import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconeBuscar , IconeBuscarPaciente , IconeBuscarMedico, IconeBuscarRefeicoes,  IconeBuscarAlimento , IconeAdicionarPaciente , IconeAdicionarAlimento , IconeAdicionarRefeicao } from '../icons/icones-botoes'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "12px 11px 0" ,
        height: "2.850em" ,
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
        case("buscar-paciente"):
            return <IconeBuscarPaciente />  
        case("buscar-medico"):
            return <IconeBuscarMedico /> 
        case("buscar-refeicao"):
            return <IconeBuscarRefeicoes /> 
        case("buscar-alimento"):
            return <IconeBuscarAlimento />  
        case("adicionar-paciente"):
            return <IconeAdicionarPaciente />
        case("adicionar-refeicao"):
            return <IconeAdicionarRefeicao />  
        case("adicionar-alimento"):
            return <IconeAdicionarAlimento />                   
    }
}

const Input = (props) => {

    const classes = useStyles();

    return (
    <div className={"col-" + props.col}>
        <Button className={classes.root} variant="contained" onClick={props.onClick} color="primary">
            { !props.isLoading ? icones(props.icone) : <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>} 
            {props.titulo}
        </Button>
    </div>
    )
};

export default Input;