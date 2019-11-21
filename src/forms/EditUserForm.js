import React, { useState, useEffect } from 'react'

const editUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    []
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    user[name] = value;
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Position</label>
      <input type="text" name="position" value={user.position} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default editUserForm
