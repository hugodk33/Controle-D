import React from 'react';
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

    return (
    <div className={"col-" + props.col}>
        <div className="holder-inputN">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField size="small" id="outlined-basic" label={props.label} variant="outlined" />
            </form>
        </div>
        <div className="holder-btn-inputN">
            <Button variant="contained"  className={classes2.root} color="primary">
                <SinaldeMais />
            </Button>
            <Button variant="contained"  className={classes2.root} color="primary">
                <SinaldeMenos />
            </Button>
        </div>
    </div>
    )
};

export default InputN;
