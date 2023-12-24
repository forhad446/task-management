import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Spinner from "../Pages/Shared/Spinner/Spinner";

const PrivateRoute = ({ children }) => {

    const { loader, user } = useAuth();

    if (loader) {
        return <Spinner></Spinner>;
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>;

};

export default PrivateRoute;