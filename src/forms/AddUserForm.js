import React, { useState } from 'react'

const addUserForm = props => {
	const initialFormState = { id: null, name: '', position: '' }
	const [ user, setUser ] = useState(initialFormState)
	const [ isButtonHidden, setIsButtonHidden] = useState(false)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value });
		if (user.position.toLowerCase() === 'center') {
			setIsButtonHidden(true);
		} else {
			setIsButtonHidden(false);
		}
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.position) return

				props.addUser(user)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Position</label>
			<input type="text" name="position" value={user.position} onChange={handleInputChange} />
			<button hidden={isButtonHidden}>Add new user</button>
		</form>
	)
}

export default addUserForm
