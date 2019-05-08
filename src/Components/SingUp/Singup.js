import React from 'react';
//components materials
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel'
//components
//import Singin from './Singin';
import RadioButtonGender from './RadioButtonsGender'

class Singup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    //method of Dialog
    handleClickOpen() {
        this.setState({ open: true })
    }

    handleClose() {
        this.setState({ open: false })
    }


    render() {
        return (
            <div>
                <Button variant="text" onClick={() => this.handleClickOpen()}>
                    Registrarse
                    </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth="true"
                >
                    <DialogTitle id="form-dialog-title"   >Registrase</DialogTitle>
                    <DialogContent>
                        <Grid container item xs="12">

                            <Grid item xs="2">

                            </Grid>
                            <Grid item xs="5">
                                <Grid item xs="12">
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="names"
                                        label="Nombres completos"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item xs="12">
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="id"
                                        label="Identificación"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item xs="12">
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="university"
                                        label="Universidad"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item xs="12">
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="nameUser"
                                        label="Nombre de usuario"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item xs="12">
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="nameUser"
                                        label="Contraseña"
                                        type="password"
                                    />
                                </Grid>

                            </Grid>
                            <Grid item xs="5">
                                <Grid item xs="12">
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="latnames"
                                        label="Apellidos"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item xs="12">
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="email"
                                        label="Email"
                                        type="email"
                                    />
                                </Grid>
                                <Grid item xs="12">
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="academicProgram"
                                        label="Programa Academico"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item xs="12">
                                    <FormLabel focused={true} required={true} >Genero</FormLabel>
                                </Grid>
                                <Grid item xs="12">
                                    <RadioButtonGender />
                                </Grid>
                                <Grid item xs="12">
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="nameUser"
                                        label="Confirmar contraseña"
                                        type="password"
                                    />
                                </Grid>

                            </Grid>


                        </Grid>
                        <DialogContentText>
                            Al registrarte en este sitio web, confirmas que aceptas nuestros Términos de servicio y que
                            has leído nuestra Política de privacidad.
                            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Grid container xs="12">
                            <Grid item xs="3">

                            </Grid>
                            <Grid item xs="6" >
                                <Button onClick={() => this.handleClose()} color="primary" size="small">
                                    Registrarse con:
                                    </Button>
                            </Grid>
                            <Grid item xs="3" >
                                <Button variant="extendedFab" onClick={() => this.handleClose()} color="primary">
                                    Registrarse
                                    </Button>
                            </Grid>

                        </Grid>

                    </DialogActions>
                </Dialog>
            </div>
        )
    }

}
export default Singup;