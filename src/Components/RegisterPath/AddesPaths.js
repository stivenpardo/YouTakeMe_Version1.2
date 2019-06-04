import React from 'react';
import firebase from 'firebase';
import { Typography } from '@material-ui/core';

class AddesPaths extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            paths: [{
                destination: {
                    comment: "",
                    departureTime: "",
                    meetingPoint: "",
                    numberPassenger: "",
                    origin: "",
                    typeVehicule: ""
                }
            }]
        }
    }
    getPaths() {
        var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/usuarios/' + userId + '/paths/' ).once('value').then(function (snapshot) {
            var paths = Object.values(snapshot.val());
            console.log(paths)
            this.setState({
                paths
            })
        });
    }
    componentDidMount() {
        this.getPaths();
    }
    renderList(){
        this.state.paths.map(el=>{
            return(
             <>
             </>     
            )
        })
    }
    render() {
        return (
            <>
                <Typography> hello</Typography>
                {this.renderList()}
            </>
        )
    }
}
export default AddesPaths;