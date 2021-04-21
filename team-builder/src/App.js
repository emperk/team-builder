import React, { useState, useEffect } from 'react';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm'
import axios from 'axios'

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

export default function App() {
  const [friends, setFriends] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newFriend = {
      userName: formValues.username.trim(),
      email:formValues.email.trim(),
      role: formValues.role,
    }
    if (!newFriend.username || !newFriend.email || !newFriend.role) return

    axios.post('fakeapi.com', newFriend)
      .then(res => {
        setFriends([...friends, res.data])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err);
      })
  }
  useEffect(() => {
    axios.get('fakeapi.com').then(res => setFriends(res.data))
  }, [])

  return (
    <div className='container'>
      <h1>Something</h1>
      <FriendForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        friends.map(friend => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      }
    </div>
  )
}


// import logo from './logo.svg';
// import './App.css';


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
