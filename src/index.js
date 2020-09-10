import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';

const theme = {
  first: '#ECE9D5', //Eggshell
  second: '#18323A', //Gunmetal
  third: '#464C49', //Grey
  fourth: '#ffcb9a', //tan
  fifth: '#98494B', //soft red
  
  font1: "'Landmark-Dimensional', sans-serif",
  font2: "'Bebas-Regular', sans-serif",
  font3: "'Poppins', sans-serif",
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
