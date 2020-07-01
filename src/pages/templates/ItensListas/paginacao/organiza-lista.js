import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import InputSelect from '../../Inputs/InputSelect';


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      margin: 0
    },
  },
  label: {
    margin: 0
  },
  input: {
    width: '100%',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 4,
    width: '100%',
    marginBottom: 0,
    '& > *': {
      width: '100%',
      marginBottom: 0,
      boxShadow: '1px 1px 3px #d9d9d9',
      borderRadius: 4
    },
  },
}));

const OrganizaLista = (props) => {

  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div id="ordenarPor" className={"col-12"} style={{ color: "#cdcdcd" }}>
      <div className={"moldura"}>
        <div className={"row"}>
          <div className={"col-12 col-sm-6 col-md-5"}>
            <InputSelect id="diabetes" label={props.label || "ORDENAR POR"} placeholder=" " type={"text"} col="10" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default OrganizaLista;