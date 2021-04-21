import React from 'react'

export default function FriendForm(props) {
    const { values, update, submit } = props

    const onChange = event => {
        const { name, value } = event.target
        update(name, value)
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Username
                    <input 
                        type="text"
                        value={values.username}
                        onChange={onChange}
                        name="username"
                    />
                </label>
                <label>Email
                    <input 
                        type='text'
                        value={values.email}
                        onChange={onChange}
                        name="email"
                    />
                </label>
                <div className='submit'>
                    <button disabled={!values.username || !values.email || !values.role}>submit</button>
                </div>
            </div>
        </form>
    )
}