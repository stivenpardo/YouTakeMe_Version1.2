import React from 'react';
//components mateials
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormLabel from '@material-ui/core/FormLabel'

class RadioButtonsGender extends React.Component{
    constructor(props){
        super(props);   
        this.state = {
            selectedValued: 'f'
        }

    }

     handleChange (event) {
        this.setState({selectedValued: event.target.value})
    }
    
    render(){
        return(
            <div>
                
                <FormControlLabel value="mujer" 
                    control={
                        <Radio
                            checked={this.state.selectedValue === 'f'}
                            onChange={this.handleChange.bind(this)}
                            value="f"
                            name="radio-button-demo"
                            aria-label="A"
                        />
                    } 
                    label="Mujer" 
                />
                <FormControlLabel value="hombre" 
                    control={
                        <Radio
                            checked={this.state.selectedValue === 'm'}
                            onChange={this.handleChange.bind(this)}
                            value="m"
                            name="radio-button-demo"
                            aria-label="M"
                        />
                    } 
                    label="Hombre" 
                />
                            
            </div>
        )
    }

    

}
export default RadioButtonsGender;