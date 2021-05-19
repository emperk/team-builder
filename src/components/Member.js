import React from 'react';

export default function Member(props) {
  const { details } = props

  if (!details) {
    return <h3>Working on fetching your members data...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}