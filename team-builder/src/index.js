import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const memberList = [
  { memberFName: 'Natalie', memberLInitial: 'P' },
  { memberFName: 'Blake', memberLInitial: 'P' },
  { memberFName: 'Abbie', memberLInitial: 'P' },
  { memberFName: 'Baylie', memberLInitial: 'P' },
]

const initialFormValues = {
  memberFName: '',
  memberLInitial: '',
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
      memberFName: formValues.memberFName.trim(),
      memberLInitial: formValues.memberLInitial.trim(),

    }
    setMembers([...members, newMember]);
    setFormValues(initialFormValues);
  }

  return (
    <div className="container">
      <h1>Team Builer Application</h1>
      {members.map((member, idx) => {
        return (
          <div key={idx}>
            Last Initial: {member.memberLInitial}, First Name: {member.memberFName}
          </div>
        )
      })}
      <form onSubmit={submit}>
        <input 
          type="text"
          onChange={change}
          value={formValues.memberLInitial}
          name="memberLInitial"
        />
        <input
          type="text"
          onChange={change}
          value={formValues.memberFName}
          name="memberFName"
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
// reportWebVitals();
