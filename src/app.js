//React Library
import React from 'react';
import ReactDOM from 'react-dom';
//Materials Components
import { MuiThemeProvider } from '@material-ui/core/styles';
//component main
import Main from './Components/Main';
import theme from './theme2';
function App() {
  
  const title = <h1>Sistema de Parquadero</h1>;
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Main/>
      </MuiThemeProvider>     
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));