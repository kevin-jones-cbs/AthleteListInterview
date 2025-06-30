import { useState } from 'react'

export const AddAthleteForm = props => {
	const initialFormState = { id: null, name: '', position: '' }
	const [ athlete, setAthlete ] = useState(initialFormState)
	const [ isButtonHidden, setIsButtonHidden] = useState(false)

	const handleInputChange = event => {
		const { name, value } = event.target

		setAthlete({ ...athlete, [name]: value });
		if (athlete.position.toLowerCase() === 'center') {
			setIsButtonHidden(true);
		} else {
			setIsButtonHidden(false);
		}
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!athlete.name || !athlete.position) return

				props.addAthlete(athlete)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={athlete.name} onChange={handleInputChange} />
			<label>Position</label>
			<input type="text" name="position" value={athlete.position} onChange={handleInputChange} />
			<button hidden={isButtonHidden}>Add new athlete</button>
		</form>
	)
}

