import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
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

function TeamBuilder() {
  const [members, setMembers] = useState(memberList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = event => {
    const { name, value } = event.target;
    setFormValues({...formValues, [name]: value});
  }

  const submit = event => {
    event.preventDefault();
    const newMember = {
      memberFirstName: formValues.memberFirstName.trim(),
      memberLastName: formValues.memberLastName.trim(),
    }
    setMembers([...members, newMember]);
    setFormValues(initialFormValues);
  }
  return (
    <div className="container">
      <h1>Team Builder Application</h1>
      {members.map((member, index) => {
        return (
          <div key={index}>
            Last Name: {member.memberLastName}, First Name: {member.memberFirstName}
          </div>
        )
      })}
      <form onSubmit={submit}>
        <input 
          type="text"
          onChange={change}
          value={formValues.memberLastName}
          name="memberLastName"
          placeholder="Enter Last Name Here"
        />
        <input 
          type="text"
          onChange={change}
          value={formValues.memberFirstName}
          name="memberFirstName"
          placeholder="Enter First Name Here"
        />
        <button>Submit!</button>
      </form>
    </div>
  )
}

render(
  <>
    <TeamBuilder />
    <App />
  </>
  , document.querySelector('#root')
)


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
