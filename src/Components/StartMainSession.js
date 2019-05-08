import React from 'react';
//components Materials
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class StartMainSession extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <>
                <br/>
                
                <AppBar  color="default" position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            
                        </Typography>
                        <Button color="inherit">Registro del vehiculo</Button>
                        <Button color="inherit">Registro de ruta </Button>
                        <Button color="inherit">Equipo</Button>
                        <Button color="inherit">Contactos</Button>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper >xs=12</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper >xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper >xs=6</Paper>
                    </Grid>
                </Grid>
            </>
        )

    }



}
export default StartMainSession;