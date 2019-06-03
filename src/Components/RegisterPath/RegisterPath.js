import React from 'react';
import PropTypes from 'prop-types';
//..components materials
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
//components of botton navigation
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//import Map
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
//my Components
import theme from '../../theme2';
import firebase from "firebase";
import FormRegisterPaths from './FormRegisterPath';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  }; 

class RegisterPath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openVehicule: false,
            //openPassenger: false,
            view: 0,
            tabActive:0,
            
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
        this.setState({ tabActive:value});
    }
    handleChangeIndex(index){
        this.setState({ value: index });
      };

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
            <div style={styles.rootNavegation}>
                <AppBar position="static" color="default" >
                    <Tabs
                    value={value}
                    onChange={this.handleChange.bind(this)}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    
                    >
                    <Tab label="Registrar Ruta" icon={<RestoreIcon />} value={0} />
                    <Tab label="Agredas" icon={<FavoriteIcon />} value={1}/>
                    <Tab label="Ubicación" icon={<LocationOnIcon />} value={2}/>
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={'x-reverse'}
                    index={this.state.tabActive}
                    onChangeIndex={this.handleChangeIndex.bind(this)}
                >
                    <TabContainer> <FormRegisterPaths/></TabContainer>
                    <TabContainer >item 2</TabContainer>
                    <TabContainer >item 3</TabContainer>
                </SwipeableViews>
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