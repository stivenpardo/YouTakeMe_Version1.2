import react from 'react'; 
import firebase from 'firebase';
import { Typography } from '@material-ui/core';
class addesPaths extends react.Component {

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
        return firebase.database().ref('/usuarios/' + userId+'/paths/').once('value').then(function (snapshot) {
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
                <Typography> {this.state.paths.destination.comment} </Typography>
            </>
        )
    }
}
export default addesPaths;