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
import  firebase from "firebase";
//folder components
import MainSession from './StartMainSession';

class Singin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            page: 0
        }
    }
    handleClickOpen() {
        this.setState({ open: true })
    }

    handleClose() {
        this.setState({ open: false })
    }

    changePage(value) {
        this.setState({ page: value })
        {
            this.state.page == 0 ? <MainSession />
            : "no haga nada"
        }
    }
   s

    render() {
        return (
            <div>
                <Button variant="text" onClick={() => this.handleClickOpen()}>
                    Iniciar sesión hola jjjj
                    </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title"   >Iniciar sesion</DialogTitle>
                    <DialogContent>
                        <Grid container item xs="12" alignContent="center" alignItems="center">

                            <Grid item xs="12" alignContent="center" alignItems="center" align-content-xs-center="true">
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="user"
                                    label="Usuario o Correo electronico"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs="auto" alignItems="stretch" >
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Contraseña"
                                    type="password"

                                />
                            </Grid>
                        </Grid>
                        <DialogContentText>
                            Al entrar en este sitio web, confirmas que aceptas nuestros Términos de servicio y que
                            has leído nuestra Política de privacidad.
                            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.handleClose()} color="primary" size="small">
                            Recuperar contraseña
                            </Button>
                        <Button variant="extendedFab" onClick={() => this.changePage(0)} color="primary">
                            Iniciar sesión
                            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

}
export default Singin;