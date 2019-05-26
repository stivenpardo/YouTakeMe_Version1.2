import React from 'react';
//components materials
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
      this.props.updateDataform({[prop]:event.target.value })    
    }


    componentDidMount() {
      this.initFirebase
  }
    
    render() {
      const {styles}=theme;

        return (
            <div>
                <Grid container item xs="12"  direction="row" justify="flex-start" alignItems="flex-start" >

                  <Grid  item xs="12"  container spacing={0} direction="column" alignItems="center" justify="center">                   
                    <FormControl style={styles.select}>
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
                  <Grid item xs="12" container spacing={0} direction="column" alignItems="center" justify="center"> 
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
                  <Grid item xs="12" container spacing={0} direction="column" alignItems="center" justify="center"> 
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