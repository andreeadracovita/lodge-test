import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "components/security/AuthContext";

type RequireAuthProps = {
	children: any
};

export default function RequireAuth({ children }: RequireAuthProps) {
	const authContext: any = useAuth();
	const location = useLocation();

	console.log(authContext.isAuthenticated);

	return authContext.isAuthenticated ? children : <Navigate to="/" replace state={{ path: location.pathname }} />
}