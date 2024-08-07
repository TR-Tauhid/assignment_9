import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
    return(
        <div>
            <Outlet></Outlet>
            <Navbar></Navbar>
        </div>
    )
};

export default Root;