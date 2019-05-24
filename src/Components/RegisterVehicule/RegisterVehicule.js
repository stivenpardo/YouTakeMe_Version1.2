import React from 'react';
//components materials
import Typography from '@material-ui/core/Typography'
//import theme from '../../theme2';
//....Imports Steppers
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
//....Forlder RegisterVehicule
import FormRegisterVehicule from './FormRegisterVehicule'
//my components
import theme from '../../theme2';
import { FormControl } from '@material-ui/core';
import firebase from 'firebase';
const {styles} = theme; 

function getSteps() {
  return ['Datos del vehiculo', 'Foto del carro ', 'Foto del conductor'];
}



class RegisterVehicule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      activeStep: 0,
      tipoVehiculo:"",
      placa: "",
      modelo:"",
    }
  }

  updateDataform(formValue){
    this.setState(formValue);
  }
   getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return  <div > <FormRegisterVehicule updateDataform={this.updateDataform.bind(this)} style={theme.styles.containterList}/> </div>;
  
      case 1:
        return 'An ad group contains one or more ads which target a shared set of keywords.';
      case 2:
        return `Try out different ad text to see what brings in the most customers,
                  and learn how to enhance your ads using features like ad extensions.
                  If you run into any problems with your ads, find out how to tell if
                  they're running and how to resolve approval issues.`;
      default:
        return 'Unknown stepIndex';
    }
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
    const steps = getSteps();
    const { activeStep } = this.state;
    if(activeStep === steps.length - 1){
      //guardar
      this.setVehiculo();
    }
  }
 
  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  }

  setVehiculo(){
    firebase.database().ref('vehiculos/' + this.state.placa).set({
      tipoVehiculo: this.state.tipoVehiculo,
      modelo: this.state.modelo,
    });
  }
  dataVehicule= (setVehicule)=>{
    return(
      <FormRegisterVehicule setVehiculo={this.setVehicule} />
      //esto es 
    )
  }
  
  render() {
    const steps = getSteps();
    const { activeStep } = this.state;
    const {styles} = theme; 

    return (
      < div style={styles.rootStepper}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div >
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography >Todos los pasos han sido completados y guardados</Typography>
              <Button onClick={this.handleReset}>Editar</Button>
              <Button onClick={this.handleReset}>Registrar otro vehiculo</Button>
            </div>
          ) : (
            <div>
              <Typography >{this.getStepContent(activeStep)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  
                >
                  Atras
                </Button>
                <Button variant="contained" color="primary"  onClick={this.handleNext}>
                  {activeStep === steps.length - 1 ? 'Guardar' : 'Siguiente'}
                </Button>
              </div>
            </div>
          )}
        </div>
      
      </div >
    )
  }


}
export default RegisterVehicule