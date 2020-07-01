import React from 'react'
import {IconeFormMedico} from '../icons/icones-formulario'
import Switch from '@material-ui/core/Switch'
import Input from './Input';
import Btn from './Btn';

const InputCRM = (props) => {
    
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div className={"col-" + props.col}>
            <div className="moldura">
                <div className="row" style={{margin: "0"}}>
                    <div className="col-12 col-sm-12 text-center" style={{padding: "0", marginBottom: "12px"}}>
                    <p style={{display: "inline-block"}}>Paciente</p>
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <p style={{display: "inline-block"}}>Médico</p>
                    </div>
                    <div className="col-12 col-sm-12" style={{padding: "0"}}>
                        <Input label="CRM"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default InputCRM;
