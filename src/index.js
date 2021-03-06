import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';

const theme = {
  first: '#f8f2e7', //Floral White
  second: '#18323A', //Gunmetal
  third: '#464C49', //Grey
  fourth: '#BF9B51', //Gold
  fifth: '#98494B', //Soft red
  sixth: '#ffcb9a', //Tan
  
  font1: "'Landmark-Dimensional', sans-serif",
  font2: "'Bebas-Regular', sans-serif",
  font3: "'Fertigo_PRO', sans-serif",
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
