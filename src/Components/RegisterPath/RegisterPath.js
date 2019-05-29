import React from 'react';
//..components materials
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//components of botton navigation
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//import Map
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
//my Components
import theme from '../../theme2';
import firebase from "firebase";
import FormRegisterPaths from './FormRegisterPath';


class RegisterPath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openVehicule: false,
            //openPassenger: false,
            value: 0,
            view: 0,
            
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
            case 'rutas':
                return (<FormRegisterPaths/>);
            case 'agregadas':
                return (<RegisterPath /* changeview={this.changeview.bind(this)} */ />);
            case 'ubicación':
                return (<SelectPath />);
        }
        return (
            <SelectPath />
        )

    }
   
    getVehicule() {
        var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/usuarios/' + userId).once('value').then(function (snapshot) {
            var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        });
    }
    render() {
        const { value } = this.state;
        const { styles } = theme;
        
        return (
            <div >
                <AppBar position="static" color="default">
                    <Tabs
                    value={value}
                    onChange={()=>this.changeview()}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    >
                    <Tab label="Registrar Ruta" icon={<RestoreIcon />} />
                    <Tab label="Agredas" icon={<FavoriteIcon />} />
                    <Tab label="Ubicación" icon={<LocationOnIcon />} />
                    </Tabs>
                </AppBar>
                
                <br />
                <br />
                <br />
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