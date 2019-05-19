import React from 'react';
//..components materials
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//components of botton navigation
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//import textfiels
import Input from '@material-ui/core/Input';
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
            value: 0,
            view: 0
        }
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

    render() {
        const { value } = this.state;
        const {styles}=theme;
        return (
            <div>
                <Grid container item xs={12}>
                    <Grid item xs={5}>
                        {/*of 2 */} 
                </Grid>
                    <Grid item xs={3}>
                        <Paper>
                            <Grid container xs={12}>
                                {/* <Grid item xs={3}>
                                moto
                            </Grid>
                            <Grid item xs={3}>
                                carro
                            </Grid>
                            <Grid item xs={3}>
                                taxi
                            </Grid>
                            <Grid item xs={2}>
                                
                            </Grid> */}
                                <Grid item xs={12}>
                                    <BottomNavigation
                                        value={value}
                                        onChange={this.handleChange.bind(this)}
                                        showLabels
                                    /* className={classes.root} */
                                    >
                                        <BottomNavigationAction label="Rutas" icon={<RestoreIcon />} />
                                        <BottomNavigationAction label="Agregadas" icon={<FavoriteIcon />} />
                                        <BottomNavigationAction label="Ubicacion" icon={<LocationOnIcon />} />
                                    </BottomNavigation>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl >
                                        <InputLabel htmlFor="input-with-icon-adornment">Partida</InputLabel>
                                        <Input
                                            id="input-with-icon-adornment"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
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
                                </Grid>
                                
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        {/*of 2 */} 
                </Grid>

                </Grid>
                <Paper style={styles.rootPaperMap}  elevation={1}>
                    <IconButton  style={styles.iconButtonMap} aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <InputBase  style={styles.inputMap} placeholder="Buscar rutas" />
                    <IconButton style={styles.iconButtonMap} aria-label="Search">
                        <SearchIcon />
                    </IconButton>
                    <Divider style={styles.dividerMap} />
                    <IconButton color="primary" style={styles.iconButtonMap} aria-label="Directions">
                        <DirectionsIcon />
                    </IconButton>
                </Paper>

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

export default  GoogleApiWrapper({
    apiKey: ("AIzaSyCZchfympGfxtY00VH0p-upBWOB6oHYoRA")
}) (RegisterPath)