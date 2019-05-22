import React from 'react';
//..components materials
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

//import DateFnsUtils from '@date-io/date-fns';
//import { MuiPickersUtilsProvider, TimePicker } from 'material-ui-pickers';
//components of botton navigation
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//import textfiels
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import InputBase from '@material-ui/core/InputBase';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
//my Components
import theme from '../theme2';


class RegisterPath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: 0,
            view: 0,
            loading: false,
            success: false,
            tipoVehiculo:"",
            numberPassenger:"",
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

    handleChange(event, value) {
        this.setState({ value });
    }

    changeview(view) {
        console.log(view);
        this.setState(
            {
                view //view:view
            }
        )
    }

    renderComponnents() {
        const op = this.state.view;
        switch (op) {
            case 0:
                return (<RegisterVehicule />);
            case 1:
                return (<RegisterPath /* changeview={this.changeview.bind(this)} */ />);
            case 2:
                return (<SelectPath />);
        }
        return (
            <SelectPath />
        )

    }
    handleButtonClick = () => {
        if (!this.state.loading) {
          this.setState(
            {
              success: false,
              loading: true,
            },
            () => {
              this.timer = setTimeout(() => {
                this.setState({
                  loading: false,
                  success: true,
                });
              }, 2000);
            },
          );
        }
      };

    componentWillUnmount() {
        clearTimeout(this.timer);
      }
    render() {
        const { value } = this.state;
        const { styles } = theme;
        const { loading, success } = this.state;
        return (
            <div >
                <Grid container item xs={12}  >

                    <Grid item xs={12}>
                        <Grid container xs={12}>
                            <Grid item xs={12}>
                                <BottomNavigation
                                    value={value}
                                    onChange={this.handleChange.bind(this)}
                                    showLabels
                                //style={styles.rootStepper}
                                >
                                    <BottomNavigationAction label="Rutas" icon={<RestoreIcon />} />
                                    <BottomNavigationAction label="Agregadas" icon={<FavoriteIcon />} />
                                    <BottomNavigationAction label="Ubicacion" icon={<LocationOnIcon />} />
                                </BottomNavigation>
                                <br />
                            </Grid>

                            <TextField

                                id="input-with-icon-textfield"
                                label="Origen"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField

                                id="input-with-icon-textfield"
                                label="Destino"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                id="time"
                                label="Hora de salida"
                                type="time"
                                defaultValue="07:30"
                                //className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                step: 300, // 5 min
                                }}
                            />
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
                                    <MenuItem value={10}>Que amuestre los vehiculos registrados</MenuItem>
                                    <MenuItem value={20}>Moto</MenuItem>
                                    <MenuItem value={30}>Taxi</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="demo-controlled-open-select"> Numero de pasajeros</InputLabel>
                                <Select
                                    open={this.state.open}
                                    onClose={this.handleClose.bind(this)}
                                    onOpen={this.handleOpen.bind(this)}
                                    onChange={this.handleTextFiledChange("numberPassenger")}
                                    value={this.state.numberPassenger}
                                    inputProps={{
                                        name: 'numberPassenger',
                                        id: 'numberPassenger',
                                    }}
                                >
                                    <MenuItem value={10}>1</MenuItem>
                                    <MenuItem value={20}>2</MenuItem>
                                    <MenuItem value={30}>3</MenuItem>
                                    <MenuItem value={40}>4</MenuItem>

                                </Select>
                            </FormControl>
                            <TextField
                                id="input-with-icon-textfield"
                                label="Punto de encuentro"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                />                         
                            
                            <TextField

                                id="idCommet"
                                label="Comentario"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                             <Fab color="primary" style={styles.buttonSuccess} onClick={this.handleButtonClick}>
                                {success ? <CheckIcon /> : <SaveIcon />}
                            </Fab>
                            {loading && <CircularProgress size={68} style={styles.fabProgress} />}   


                        </Grid>

                    </Grid>

                </Grid>
                <br/>
                <br/>
                <Map style={styles.map} google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>

                    </InfoWindow>
                </Map>

            </div>
        )
    }


}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCZchfympGfxtY00VH0p-upBWOB6oHYoRA")
})(RegisterPath)