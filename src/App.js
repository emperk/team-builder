import React, { useState, useEffect } from 'react';
import Member from './components/Member';
import Form from './components/Form';
import axios from 'axios';
import './App.css';

const initialFormValues = {
  username: '', 
  email: '',
  role: '',
}

export default function App() {
  const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      userName: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newMember.username || !newMember.email || !newMember.role) return

    axios.post('fakeapi.com', newMember)
      .then(res => {
        setMembers([...members, res.data])
        setFormValues(initialFormValues);
      })
      .catch(err => {
        console.log(err);
      })
  }
  useEffect(() => {
    axios.get('fakeapi.com').then(res => setMembers(res.data))
  }, [])

  return (
    <div className='container'>
      <h2>Something</h2>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        members.map(member => {
          return(
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
