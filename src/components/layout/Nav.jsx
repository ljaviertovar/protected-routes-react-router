import { Link } from "react-router-dom"
import LoginButton from "../LoginButton"

export default function Nav({ user, setUser }) {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/landing'>Landing</Link>
				</li>
				<li>
					<Link to='/home'>Home</Link>
				</li>
				<li>
					<Link to='/admin'>Admin</Link>
				</li>
				<li>
					<Link to='/config'>Config</Link>
				</li>
				<li>
					<Link to='/dashboard'>Dashboard</Link>
				</li>
				<li>
					<LoginButton user={user} setUser={setUser} />
				</li>
			</ul>
		</nav>
	)
}
