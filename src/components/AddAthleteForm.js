import { useState } from 'react'
import { DEFAULT_FORM_DATA } from '../App'

export const AddAthleteForm = props => {
	const [ athlete, setAthlete ] = useState(DEFAULT_FORM_DATA);

	const handleInputChange = event => {
		const { name, value } = event.target;
		setAthlete({ ...athlete, [name]: value });
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!athlete.name || !athlete.position) return;

				props.addAthlete(athlete);
				setAthlete(DEFAULT_FORM_DATA);
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={athlete.name} onChange={handleInputChange} />
			<label>Position</label>
			<input type="text" name="position" value={athlete.position} onChange={handleInputChange} />
			<button hidden={athlete.position.toLowerCase() === 'center'}>Add new athlete</button>
		</form>
	)
}

