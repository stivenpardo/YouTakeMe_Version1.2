import React from 'react';
//..components materials
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
// Icones
import origen from '../../Images/origen.png'
import placeholder from '../../Images/placeholder.png'
import timeOut from '../../Images/timeOut.png'
import automobile from '../../Images/automobile.png'
import passangers from '../../Images/passanger.png'
import handshake from '../../Images/handshake.png'
import comment from '../../Images/comment.png'

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
            origin: '',
            destination: '',
            departureTime: '',
            tipoVehiculo: "",
            numberPassenger: "",
            meetingPoint: '',
            comment: '',
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
                this.setPath() 
            );
        }
    };

    getVehicule() {
        var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/usuarios/' + userId).once('value').then(function (snapshot) {
            var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        });
    }
    setPath() {
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('usuarios/'+userId+'/paths/'+this.state.destination).set({
          origin: this.state.origin,
          departureTime: this.state.departureTime,
          typeVehicule: this.state.tipoVehiculo,
          numberPassenger: this.state.numberPassenger,
          meetingPoint: this.state.meetingPoint,
          comment: this.state.comment,
        }, (error)=>{
            if(error) {
                console.error("error")
            } else {
                this.clearForm();
            }
        });
      }
    clearForm() {
        let registerPath = ['origin', 'destination', 'departureTime', 'tipoVehiculo', 'numberPassenger', 'meetingPoint', 'comment']

        registerPath.forEach(element => {
                this.setState({[element]:""})
        })
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        const { styles } = theme;
        const { loading, success } = this.state;
        return (
            <div>
                
                            <TextField
                                autoFocus
                                margin="dense"
                                id="origin"
                                value={this.state.origin}
                                label="Origen"
                                type="text"
                                onChange={this.handleTextFiledChange("origin")}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            < img src={origen}/>
                                        </InputAdornment>
                                    ),
                                }}
                                style={styles.textfiels}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="destination"
                                value={this.state.destination}
                                label="Destino"
                                type="text"
                                onChange={this.handleTextFiledChange("destination")}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            < img src={placeholder}/>
                                        </InputAdornment>
                                    ),
                                }}
                                style={styles.textfiels}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="departureTime"
                                value={this.state.departureTime}
                                label="Hora de salida"
                                type="time"
                                defaultValue="00:00"
                                onChange={this.handleTextFiledChange("departureTime")}
                                //className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            < img src={timeOut}/>
                                        </InputAdornment>
                                    ),
                                }}
                                style={styles.textfiels}
                            />
                            <FormControl style={styles.textfiels}>
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
                            <FormControl style={styles.textfiels}>
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
                                autoFocus
                                margin="dense"
                                id="meetingPoint"
                                value={this.state.meetingPoint}
                                label="Punto de encuentro"
                                type="text"
                                onChange={this.handleTextFiledChange("meetingPoint")}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            < img src={handshake}/>
                                        </InputAdornment>
                                    ),
                                }}
                                style={styles.textfiels}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="comment"
                                value={this.state.comment}
                                label="Comentario"
                                type="area"
                                onChange={this.handleTextFiledChange("comment")}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={comment}/>
                                        </InputAdornment>
                                    ),
                                }}
                                style={styles.textfiels}
                            />
                            <br />
                            <Fab color="primary" style={styles.buttonSuccess} onClick={this.handleButtonClick}>
                                {success ? <CheckIcon /> : <SaveIcon />}
                            </Fab>
                            {loading && <CircularProgress size={68} style={styles.fabProgress} />}


            </div>
        )
    }


}

export default FormRegisterPath
