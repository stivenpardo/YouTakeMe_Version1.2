
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import Logo from './Images/Logo2.png'
const theme = createMuiTheme({
  typography: { useNextVariants: true },
  palette: {
    primary: { main: blue[700] }, // Purple and green play nicely together.
    secondary: { main: red[500] }, // This is just green.A700 as hex.
  },
  styles: {
    MainTitle: {

      color: 'blue',
      backgroundImage: 'none',
      backgroundColor: 'transparent'
    },
    secondTitle: {

      color: 'blue',
      paddingBottom: 50
    },
    MainButton: {
      color: 'black'
    },
    backgroundLogo: {
      backgroundImage: "url(" + Logo + ")",
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      bgproperties: 'fixed'

    },
    ContentMain: {
      paddingLeft: 200,
      paddingTop: 80,
      height: 800
    },
    darkStyleBackgroud: {
      background: 'linear-gradient(45deg, #e8eaf6 30%, #f5f5f5 90%)',
    },
    whiteStyleBackgroud: {
      background: 'linear-gradient(45deg, #424242 30%, #616161 90%)',

    },
    AppBar: {
      background: 'rgba(0,0,0,.0)',
      border: 0,
      height: 48,
      padding: '0 300px',
      boxShadow: '0 3px 5px 2px rgba(0,0,0,.0)',
    },
    forms: {
      minWidth: 350,
      maxWidth: 750,
    },
    formInput: {
      fontWeight: 100,
    },
    grow: {
      flexGrow: 1,
    },
    imgCarrosUsr: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    rootPaperMap: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    inputMap: {
      marginLeft: 8,
      flex: 1,
    },
    iconButtonMap: {
      padding: 10,
    },
    dividerMap: {
      width: 1,
      height: 28,
      margin: 4,
    },
    rootStepper: {
      width: '90%',
    },
    ItemsList: {
      alignSelf: 'center'
    },
    containterList: {
      display: 'grid',
      gridTemplateColumns: '42% 10% 42% 6%',
      gridTemplateRows: 'auto'
    },
    map:{

      paddingLeft:450,
      paddingTop:80,
      height:400,
      width:600,
    },
    defaultLogin:{
      width: 300,
      height: 150,
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-75px',
      marginLeft: '-75px',
      textAlign:'center'
    },
    ButtonDefaultLogin:{
      width: 150,
      height: 50,
      borderBottom:20,
      borderTop:20
    },
    TextFileVehicule:{
      width: 300,
      height: 150,
      position: 'absolute',
      top: '80%',
      left: '50%',
      marginTop: '-75px',
      marginLeft: '-75px',
      textAlign:'center'
    },
    rootStepperdd: {
      width: 500,
    },
  }
});

export default theme;
