import { useEffect, useState } from 'react'
import { AddAthleteForm } from './components/AddAthleteForm'
import { EditAthleteForm } from './components/EditAthleteForm'
import { AthleteTable }from './components/AthleteTable'

export const DEFAULT_FORM_DATA = { id: null, name: '', position: '' };

// const DATA = [
// 		{ id: 1, name: 'Dan', position: 'Quarterback' },
// 		{ id: 2, name: 'Ken', position: 'Running Back' },
// 		{ id: 3, name: 'Ryan', position: 'Tight End' },
// 		{ id: 4, name: 'Nick', position: 'Running Back' },
// 		{ id: 5, name: 'Sam', position: 'Safety' }
// 	];

const App = () => {

	const [ athletes, setAthletes ] = useState([]);
	const [ currentAthlete, setCurrentAthlete ] = useState(DEFAULT_FORM_DATA);
	const [ isEditing, setIsEditing ] = useState(false);

	useEffect(() => {
		(async () => {
			await fetch('https://04686f0d-d5ad-4e3b-85e2-d51457898a5b.mock.pstmn.io/test/athletes/')
				.then(response => response.json())
				.then(data => {
					console.log(data);
					setAthletes(data);
				});
		})();
	}, []);

	const addAthlete = athlete => {
		athlete.id = athletes.length + 1;
		setAthletes([ ...athletes, athlete ]);
	}

	const updateAthlete = (id, updatedAthlete) => {
		setIsEditing(false);
		setAthletes(athletes.map(athlete => (athlete.id === id ? updatedAthlete : athlete)));
	}

	const editRow = athlete => {
		setIsEditing(true);
		setCurrentAthlete({ id: athlete.id, name: athlete.name, position: athlete.position });
	}

	return (
		<main>
			<img
				src="https://asset.maxpreps.io/includes/images/logos/maxpreps_1200x630.png"
				alt="MaxPreps Logo"
				className='logo'
				width={128}
			/>
			<h1>Team Roster</h1>
			<div className='roster'>
				<div>
					{isEditing ? (
						<>
							<h2>Edit Athlete</h2>
							<EditAthleteForm
								editing={isEditing}
								setEditing={setIsEditing}
								currentAthlete={currentAthlete}
								updateAthlete={updateAthlete}
							/>
						</>
					) : (
						<>
							<h2>Add Athlete</h2>
							<AddAthleteForm addAthlete={addAthlete} />
						</>
					)}
				</div>
				<div>
					<h2>View Athletes</h2>
					<AthleteTable athletes={athletes} editRow={editRow}/>
				</div>
			</div>
			<span>Total Athletes: {athletes.length}</span>
		</main>
	)
}

export default App;