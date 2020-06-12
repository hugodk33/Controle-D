import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      borderRadius: 4,
      '& > *': {
        width: '100%',
        marginBottom: 12,
        boxShadow: '1px 1px 3px #d9d9d9',
        borderRadius: 4
      },
    },
    form: {
      borderRadius: 4
    },
    formControl: {
      borderRadius: 4
    }
}));

const Input = (props) => {

    const classes = useStyles();

    return (
    <div className={"col-" + props.col}>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label={props.label} variant="outlined" />
        </form>
    </div>
    )
};

export default Input;
