import React from 'react';
//components materials
import Typography from '@material-ui/core/Typography'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
//import theme from '../../theme2';
//....Imports Steppers
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
//....Forlder RegisterVehicule
import FormRegisterVehicule from './FormRegisterVehicule'
//my components
import theme from '../../theme2';
import firebase from 'firebase';
import { Grid } from '@material-ui/core';

function getSteps() {
  return ['Datos del vehiculo', 'Foto del carro ', 'Foto del conductor'];
}



class RegisterVehicule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      tipoVehiculo: "",
      placa: "",
      modelo: "",
    }
  }

  updateDataform(formValue) {
    this.setState(formValue);
  }
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <FormRegisterVehicule updateDataform={this.updateDataform.bind(this)} />;

      case 1:
        return <div>
          <br />
          <br />
          <Grid container spacing={0} direction="column" alignItems="center" justify="center">
            <input
              accept="image/*"
              style={theme.styles.input}
              id="file-car"
              multiple
              type="file"
            />
            <label htmlFor="file-car">
              <Button variant="outlined" component="span"  >
                <CloudUploadIcon style={theme.styles.rightIcon} />
                Subir
                    </Button>
            </label>
          </Grid>
        </div>

      case 2:
        return <div>
          <br />
          <br />
          <Grid container spacing={0} direction="column" alignItems="center" justify="center">
            <input
              accept="image/*"
              style={theme.styles.input}
              id="file-car"
              multiple
              type="file"
            />
            <label htmlFor="file-car">
              <Button variant="outlined" component="span"  >
                <CloudUploadIcon style={theme.styles.rightIcon} />
                Subir
                    </Button>
            </label>
          </Grid>
        </div>
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
    if (activeStep === steps.length - 1) {
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

  setVehiculo() {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('usuarios/' + userId + '/vehiculos/' + this.state.placa).set({
      tipoVehiculo: this.state.tipoVehiculo,
      modelo: this.state.modelo,
    });
  }

  render() {
    const steps = getSteps();
    const { activeStep } = this.state;
    const { styles } = theme;

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
                <div style={styles.bottonStepper}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}

                  >
                    Atras
                </Button>
                  <Button variant="contained" color="primary" onClick={this.handleNext}>
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