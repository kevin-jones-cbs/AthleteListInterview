import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const DATA = [
		{ id: 1, name: 'Dan', position: 'Quarterback' },
		{ id: 2, name: 'Ken', position: 'Running Back' },
		{ id: 3, name: 'Ryan', position: 'Tight End' },
		{ id: 4, name: 'Nick', position: 'Running Back' },
		{ id: 5, name: 'Sam', position: 'Safety' }
	]

const DEFAULT_FORM_DATA = { id: null, name: '', position: '' }

const App = () => {

	// Setting state
	const [ users, setUsers ] = useState(DATA)
	const [ currentUser, setCurrentUser ] = useState(DEFAULT_FORM_DATA)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, position: user.position })
	}

	return (
		<div>
			<h1>Team Roster</h1>
			<div>
				<div>
					{editing ? (
						<>
							<h2>Edit User</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</>
					) : (
						<>
							<h2>Add User</h2>
							<AddUserForm addUser={addUser} />
						</>
					)}
				</div>
				<div>
					<h2>View Users</h2>
					<UserTable users={users} editRow={editRow}/>
				</div>
			</div>
		</div>
		<span>Total Users: {users.length}</span>
	)
}

export default App
