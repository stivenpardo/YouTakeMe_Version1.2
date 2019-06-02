import React from 'react';
//..components materials
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
//import DateFnsUtils from '@date-io/date-fns';
//import { MuiPickersUtilsProvider, TimePicker } from 'material-ui-pickers';
//import textfiels
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
//my Components
import theme from '../../theme2';
import firebase from "firebase";


class FormRegisterPath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openVehicule: false,
            //openPassenger: false,
            value: 0,
            view: 0,
            loading: false,
            success: false,
            tipoVehiculo: "",
            numberPassenger: "",
        }
    }
    handleClose() {
        this.setState({ open: false })
    }

    handleOpen() {
        this.setState({ open: true })
    }

    handleTextFiledChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    }

    handleChange(event, value) {
        this.setState({ value });
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

    getVehicule() {
        var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/usuarios/' + userId).once('value').then(function (snapshot) {
            var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        });
    }
    clearForm() {
        let registerPath = ['origin', 'distination', 'departureTime', 'typeVehicule', 'numberPassangers', 'meeting point', 'commentary']

        forEach(element => {
            //recorrer el vector despues llamar este metodo en el setREGISTERPath y colocarlo en lo ultimo por medio de un try catch ...    
        });
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        const { styles } = theme;
        const { loading, success } = this.state;
        return (
            <div >
                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <Grid container xs={6}>
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
                                defaultValue="00:00"
                                //className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                            />
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
                                    <MenuItem value={'carro'}>Que amuestre los vehiculos registrados</MenuItem>
                                    <MenuItem value={'Moto'}>Moto</MenuItem>
                                    <MenuItem value={'taxi'}>Taxi</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl style={styles.select}>
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
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>

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
                            <br />
                            <Fab color="primary" style={styles.buttonSuccess} onClick={this.handleButtonClick}>
                                {success ? <CheckIcon /> : <SaveIcon />}
                            </Fab>
                            {loading && <CircularProgress size={68} style={styles.fabProgress} />}


                        </Grid>

                        <Grid item={6}>
                            dsafsadsdafasd
                        </Grid>

                    </Grid>

                </Grid>


            </div>
        )
    }


}

export default FormRegisterPath
