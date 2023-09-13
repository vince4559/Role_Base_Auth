import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken, roles } from "./authSlice"

const RequireAuth = ({allowedRoles}) => {
    const token = useSelector(selectCurrentToken)
    const Roles = useSelector(roles);
    const location = useLocation();

    // console.log(Roles)

    return (
        Roles?.find(role => allowedRoles?.includes(role))
        ? <Outlet />
        :token
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        :<Navigate to="/login" state={{ from: location }} replace />
            // ? <Outlet />
            // : <Navigate to="/login" state={{ from: location }} replace />
    )
}
export default RequireAuth