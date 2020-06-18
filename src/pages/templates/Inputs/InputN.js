import React, { useState } from 'react';
import {SinaldeMais , SinaldeMenos} from '../icons/icones-botoes'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        width: '100%',
        marginBottom: 12,
        boxShadow: '1px 1px 3px #d9d9d9'
      },
    },
    form: {
        borderRadius: 4
    }
}));

const useStyles2 = makeStyles((theme) => ({
    root: {
        height: 18,
        padding: 3,
        minWidth: 19,
        boxShadow: '1px 1px 3px #d9d9d9',
        marginTop: -12,
        marginBottom: 0
    }
}));

const InputN = (props) => {

    const classes = useStyles();
    const classes2 = useStyles2();

    const [value, setValue] = useState("")

    const getIntValue = () => Number.parseInt((value || 0))
    const setStrValue = (valor) => {
        const strValue = valor.toString()
        setValue(strValue)
        if(props.onChange)
            props.onChange(strValue)
    }

    const increment = () => {
        let valor = getIntValue()
        if(valor < 120){
            valor += 1
        }
        setStrValue(valor)
    }

    const decrement = () => {
        let valor = getIntValue()
        if(valor > 0){
            valor -= 1
        }

        setStrValue(valor)
    }

    return (
    <div className={"col-" + props.col}>
        <div className="holder-inputN">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField size="small" id="outlined-basic" onChange={event => setValue(event.target.value)} label={props.label} value={value} variant="outlined" />
            </form>
        </div>
        <div className="holder-btn-inputN">
            <Button variant="contained"  className={classes2.root} onClick={() => increment()} color="primary">
                <SinaldeMais />
            </Button>
            <Button variant="contained"  className={classes2.root}  onClick={() => decrement()}  color="primary">
                <SinaldeMenos />
            </Button>
        </div>
    </div>
    )
};

export default InputN;
