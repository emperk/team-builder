import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const memberList = [
  { memberFirstName: 'Natalie', memberLastName: 'Burnett' },
  { memberFirstName: 'Breanna', memberLastName: 'Hume' },
  { memberFirstName: 'Zane', memberLastName: 'McCracken' },
  { memberFirstName: 'Katya', memberLastName: 'Halstead' },
  { memberFirstName: 'Osvaldo', memberLastName: 'Vadez' },
  { memberFirstName: 'Joaquin', memberLastName: 'Torres' },
]

const initialFormValues = {
  memberFirstName: '',
  memberLastName: '',
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
