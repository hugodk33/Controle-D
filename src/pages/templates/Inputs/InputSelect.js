import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  formControl: {
    minWidth: '100%',
    marginBottom: 12,
    boxShadow: '1px 1px 3px #d9d9d9',
    borderRadius: 4
  },
  selectEmpty: {
    
  }
}));

const InputSelect = (props) => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
    <div className={"col-" + props.col + " InputSelect"} style={{color: "#cdcdcd"}}>
        <FormControl size="small" variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">{props.label}</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="Age"
              className={classes.selectEmpty}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    </div>
    )
};

export default InputSelect;
