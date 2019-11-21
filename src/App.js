import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'John', position: 'Quarterback' },
		{ id: 2, name: 'Ken', position: 'Running Back' },
		{ id: 3, name: 'Jeffrey', position: 'Tight End' },
		{ id: 4, name: 'Nick', position: 'Running Back' },
		{ id: 5, name: 'Sam', position: 'Safety' }
	]

	const initialFormState = { id: null, name: '', position: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
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
						<Fragment>
							<h2>Edit User</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add User</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
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
