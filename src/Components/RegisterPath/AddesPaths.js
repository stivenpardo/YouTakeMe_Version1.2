import React from 'react'; 
import firebase from 'firebase';
import { Typography } from '@material-ui/core';

class AddesPaths extends React.Component {

    constructor(props){
        super(props);
        this.state={
            paths :{
                destination:{
                    comment : "",
                    departureTime : "",
                    meetingPoint : "",
                    numberPassenger : "",
                    origin : "",
                    typeVehicule : ""
                }
            }
        }
    }
    getPaths() {
        var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/usuarios/' + userId+'/paths/'+'destination').once('value').then(function (snapshot) {
        var paths = snapshot.val();
        this.setState({
            paths
            })
        });
    }
    componentDidMount(){
        this.getPaths();      
      }    
    render(){
        return(
            <>
                <Typography> hellow</Typography>
            </>
        )
    }
}
export default AddesPaths;