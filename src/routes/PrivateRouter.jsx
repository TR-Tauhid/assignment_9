import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../components/Loader";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const PrivateRouter = ({ children }) => {


    const { user, loading } = useContext(AuthContext);
    console.log(location)

    if (loading) {
        return <Loader></Loader>
    }

    if (user) 
    {
        return children;
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.node,
}
export default PrivateRouter;