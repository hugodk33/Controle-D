import React from 'react';
import { Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

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
    const defaultFunction = () => { }
     const onChange = props.onChange || defaultFunction

    const classes = useStyles();

    return (
    <div className={"col-" + props.col}>
        <form className={classes.root} noValidate autoComplete="off">
        {!props.isFormik && 
          <TextField size="small" id="outlined-basic" onChange={onChange} className={props.class} label={props.label} variant="outlined" />} 
        {props.isFormik && 
          <TextField size="small" id="outlined-basic" label={props.label}  name={props.name}  variant="outlined" />} 
        </form>
    </div>
    )
};

export default Input;
