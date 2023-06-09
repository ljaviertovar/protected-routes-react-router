import { useState } from "react"

const USER_DUMMY1 = {
	id: 1,
	name: "John",
	permissions: ["admin", "dashboard"],
	roles: ["admin"],
}

const USER_DUMMY2 = {
	id: 2,
	name: "John",
	permissions: ["admin"],
	roles: ["admin"],
}

const USER_DUMMY3 = {
	id: 3,
	name: "John",
	permissions: ["dashboard"],
	roles: [],
}

export default function LoginButton({ user, setUser }) {
	const [userLogged, setUserLogged] = useState(null)

	const login = () => {
		setUser(userLogged)
	}

	const logout = () => {
		setUser(null)
		setUserLogged(null)
	}

	return (
		<div>
			{!user ? (
				<button onClick={() => login()}>Login</button>
			) : (
				<button onClick={() => logout()}>
					Logout ({user.name} {user.id})
				</button>
			)}
			{!user && (
				<div>
					<button
						className={userLogged?.id === 1 && "active"}
						onClick={() => {
							setUserLogged(USER_DUMMY1)
						}}
					>
						User 1
					</button>
					<button className={userLogged?.id === 2 && "active"} onClick={() => setUserLogged(USER_DUMMY2)}>
						User 2
					</button>
					<button className={userLogged?.id === 3 && "active"} onClick={() => setUserLogged(USER_DUMMY3)}>
						User 3
					</button>
				</div>
			)}
		</div>
	)
}
