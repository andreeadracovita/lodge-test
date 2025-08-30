import { useAuth } from "components/security/AuthContext";

export default function Home() {
	const authContext: any = useAuth();
	
	return (
		<>
			<button onClick={() => authContext.login()}>Login</button>
			<button onClick={() => authContext.logout()}>Logout</button>
		</>
	)
}