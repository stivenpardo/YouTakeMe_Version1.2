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
import theme from '../../theme2';
//my components


class FormRegisterVehicule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            open: false,
            tipoVehiculo:"",
            placa: "",
            modelo:"",
            fotoCarro:"",
            fotoConductor:"",
            
        }
        
    }

      handleClose() {
        this.setState({ open: false })
      }
    
      handleOpen() {
        this.setState({ open: true })
      }

    handleTextFiledChange= prop => event => {
      this.setState({[prop]:event.target.value });     
    }
    setVehiculo=()=>{
      console.log(this.state.tipoVehiculo,this.state.placa,this.state.modelo)
      firebase.database().ref('vehiculos/' + this.state.placa).set({
        tipoVehiculo: this.state.tipoVehiculo,
        modelo: this.state.modelo,
      });
    }

    componentDidMount() {
      this.initFirebase
  }
    
    render() {
      const {styles}=theme;

        return (
            <div>
                <Grid container item xs="12"  direction="row" justify="flex-start" alignItems="flex-start" style={styles.TextFileVehicule}>

                  <Grid  item xs="12"  >                   
                    <FormControl>
                      <InputLabel htmlFor="demo-controlled-open-select"> Tipo de vehiculo</InputLabel>
                      <Select
                        open={this.state.open}
                        onClose={this.handleClose.bind(this)}
                        onOpen={this.handleOpen.bind(this)}
                        onChange={this.handleTextFiledChange("tipoVehiculo")}
                        value={this.state.tipoVehiculo}
                        inputProps={{
                          name: 'tipoVehiculo',
                          id: 'tipoVehiculo',
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
                      id="placa"
                      value={this.state.placa}
                      label="Placa"
                      type="text" 
                      onChange={this.handleTextFiledChange("placa")}
                    />
                  </Grid>
                  <Grid item xs="12" > 
                    <TextField
                      autoFocus
                      margin="dense"
                      id="modelo"
                      value={this.state.modelo}
                      label="Modelo"
                      type="text"
                      onChange={this.handleTextFiledChange("modelo")}
                    />
                  </Grid>
                </Grid>

            </div>
        )
    }


}
export default FormRegisterVehicule