import React from 'react';
//components materials
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
//....Imports Select
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core';

class FormRegisterVehicule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            open: false,
        }
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }
    
      handleClose() {
        this.setState({ open: false })
      }
    
      handleOpen() {
        this.setState({ open: true })
      }

    render() {
        return (
            <div>
                <Grid container item xs="12">
                  <Grid item xs="12">                   
                    <FormControl>
                      <InputLabel htmlFor="demo-controlled-open-select"> Tipo de vehiculo</InputLabel>
                      <Select
                        open={this.state.open}
                        onClose={this.handleClose.bind(this)}
                        onOpen={this.handleOpen.bind(this)}
                        value={this.state.age}
                        onChange={this.handleChange.bind(this)}
                        inputProps={{
                          name: 'age',
                          id: 'demo-controlled-open-select',
                        }}
                      >
                        <MenuItem value={10}>Carro</MenuItem>
                        <MenuItem value={20}>Moto</MenuItem>
                        <MenuItem value={30}>Taxi</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs="12"> 
                    <TextField
                      autoFocus
                      margin="dense"
                      id="id"
                      label="Placa"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs="12"> 
                    <TextField
                      autoFocus
                      margin="dense"
                      id="id"
                      label="Modelo"
                      type="text"
                    />
                  </Grid>
                </Grid>

            </div>
        )
    }


}
export default FormRegisterVehicule