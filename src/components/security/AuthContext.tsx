import { createContext, useContext, useState } from "react";

type AuthContextType = {
	isAuthenticated: boolean,
	login: any,
	logout: any
};

export const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
	children: any
};

export default function AuthProvider({ children }: AuthProviderProps) {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	function login() {
		setIsAuthenticated(true);
	}

	function logout() {
		setIsAuthenticated(false);
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{ children }
		</AuthContext.Provider>
	);
}