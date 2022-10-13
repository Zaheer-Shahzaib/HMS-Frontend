import { useLocation, Redirect, Navigate, Router } from "react-router-dom";
import useAuth from "../src/Hooks/useAuth";
import Outlet from 'react-router-dom'
import { Children } from "react";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth,allowedRoles);
    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? {Children}
            : auth?.user
                ? <Redirect to="/unauthorized" state={{ from: location }} replace />
                : <Redirect to="/auth/login" state={{ from: location }} replace />
                
    );
    
}

export default RequireAuth;