import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../Images/Logo2.png'
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

//my Components
import theme from '../theme2';
import RegisterVehicule from './RegisterVehicule/RegisterVehicule';
import RegisterPath from './RegisterPath';
import SelectPath from './SelectPaths/SelectPaths'
import Singin from './Singin';
import firebase from "firebase";
//import IconFacebook from '../Images/IconFacebook.png'
//import IconGoogle from '../Images/IconGoogle.png'

//import Book from '../data/stories.json';

class MainConcent extends React.Component {
   
        state = {
            auth: true,
            anchorEl: null,
            styleSelected:true,
            view:null,
            userAccount:null
        };

      
        
      handleChange(event){
        this.setState({ auth: event.target.checked });
      };
      handleChangeStyle(event){
        this.setState({ styleSelected: event.target.checked });
      };
    
      handleMenu(event){
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose(){       
        this.setState({ anchorEl: null });
      };
      selectLecture(currentLecture){
        this.setState({currentLecture});
      }
  
      renderInformation(){
        switch(this.state.view){
            case 'Benficios':
                return(<div>Beneficios</div>);   
            case 'registerVehicule':
                return (<RegisterVehicule/>)
            case 'registerPath':
                return (<RegisterPath/>)
            case 'selectPath':
                return (<SelectPath/>)
            case 'Singin':
                return (<Singin/>)            
            default:

        }

      }
      changeView(value, userAccount){
            this.setState(
                {
                    view:value
                    
                }
            )
            if(value=="Singin"){
                this.initFirebase();
                //this.loginFacebook();
                this.loginGoogle();
            }
      }
      initFirebase() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDiQZvc_MU0wDrurZPAU2wjyLMlaQ5c_n0",
            authDomain: "youtakeme.firebaseapp.com",
            databaseURL: "https://youtakeme.firebaseio.com",
            projectId: "youtakeme",
            storageBucket: "youtakeme.appspot.com",
            messagingSenderId: "669599509097"
        };
        firebase.initializeApp(config);
    }
    loginGoogle(){
        var provider = new firebase.auth.GoogleAuthProvider();
        this.handleClose();

        firebase.auth().signInWithPopup(provider).then((result)=> {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            this.setState({userAccount:user})
            // ...
          }).catch((error)=> {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

        
    }
    loginFacebook(){
        var provider = new firebase.auth.FacebookAuthProvider();
        this.handleClose();
        firebase.auth().signInWithPopup(provider).then((result)=> {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            //console.log(user)
            this.setState({userAccount:user})
            // ...
          }).catch((error)=> {

            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            //console.log(errorMessage)
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    componentDidMount() {
        this.initFirebase
        //this.loginFacebook;
        this.loginGoogle;
    }
     render(){
        const {styles}=theme;
        const open = Boolean(this.state.anchorEl);
        return (
        
            <>
               {/*  <Grid container spacing={24} style={this.state.styleSelected?styles.darkStyleBackgroud:styles.whiteStyleBackgroud} > */}
                
                <Grid container spacing={24} style={styles.darkStyleBackgroud} >
                    <Grid item xs={12}>
                        <AppBar position="static" style={styles.AppBar}>
                            <Toolbar>
                                <img src={Logo}/>
                                <Typography variant="h4" color={"default"} style={styles.grow}>
                                 ¿Me llevas?
                                </Typography>
                                
                                <Button disabled={this.state.userAccount==null?true:false} color={"default"}  onClick={()=>this.changeView("")}>Beneficios</Button>
                                 <Button disabled={this.state.userAccount==null?true:false} color={"default"}  onClick={()=>this.changeView("registerVehicule")}>Registrar vehiculo</Button>
                                <Button disabled={this.state.userAccount==null?true:false} color={"default"}  onClick={()=>this.changeView("registerPath")}>Registro de ruta</Button>
                                <Button disabled={this.state.userAccount==null?true:false} color={"default"}  onClick={()=>this.changeView("selectPath")}>Seleccionar rutas</Button>
                             

                                
                                {this.state.auth && (
                                <div>
                                    <IconButton
                                    aria-owns={open ? 'menu-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu.bind(this)}
                                    color={"default"}
                                    >
                                    {this.state.userAccount==null?<AccountCircle />:<Avatar alt="Usuario" src={this.state.userAccount.photoURL} />}
                                    
                                    
                                    </IconButton>
                                    <Menu
                                    id="menu-appbar"
                                    anchorEl={this.state.anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose.bind(this)}
                                    >
                                    <MenuItem onClick={()=>this.changeView("Singin")}> Iniciar sesión</MenuItem>
                                    <MenuItem onClick={this.handleClose.bind(this)}>Salir</MenuItem>
                                    </Menu>
                                </div>
                                )}
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Grid container  direction="row" justify="flex-start" alignItems="flex-start"  style={styles.ContentMain}>
                                {
                                    this.renderInformation()
                                }
                    </Grid>
                    
                    <Grid container  direction="row" justify="flex-start" alignItems="flex-start"  style={styles.ContentMain}>
                        <Paper> 
                                <Typography> Iniciar Sesicion Con  </Typography>
                                <Fab variant="extended" aria-label="Delete" >
                                    <NavigationIcon  />
                                        Inicia Sesion con Facebook
                                </Fab>
                                <Fab variant="extended" aria-label="Delete" >
                                    <NavigationIcon />
                                        Inicia Sesion con Google
                                </Fab>
                                
                        </Paper>    
                    </Grid>
                                                
                </Grid>
            </>
        )
}
}
export default withTheme()(MainConcent)

