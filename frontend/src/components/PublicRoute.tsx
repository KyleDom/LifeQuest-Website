import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RequireAuth() {
    const { auth } = useAuth();
    const location = useLocation();

    return auth === false ? (
        <Outlet />
    ) : (
        <Navigate to="/" state={{ from: location }} replace />
    )
}

export default RequireAuth;