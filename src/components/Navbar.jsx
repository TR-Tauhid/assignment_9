import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOutBtn = () => {
        logOut();
        navigate("/")
    }

    const links =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/estateDetail/:1">Estate Detail</Link></li>
            <li><Link to="/updateprofile">Update Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </>
    return (
        <div>
            <div className="navbar bg-base-100 justify-between mx-auto w-11/12">
                <div className="navbar-start w-full">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            tabIndex={0}>
                            {links}
                        </ul>
                    </div>
                    <div className="w-full items-center flex justify-around md:justify-normal">
                        <Link to="/" className="h-32 w-32 lg:min-w-0 md:ml-6" ><img src="/src/assets/logo.png" alt="logo" /> </Link>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-x-4 mr-10">
                        {links}
                    </ul>
                </div>

                {
                    user ?

                        (
                            <div onClick={handleSignOutBtn} className="navbar-end w-auto">
                                <button className="btn btn-ghost">Log Out</button>
                            </div>
                        )
                        :
                        (
                            <div className="navbar-end w-auto">
                                <Link to="/login">
                                    <button className="btn btn-ghost">Login</button>
                                </Link>
                            </div>

                        )
                }
            </div>
        </div >
    );
};

export default Navbar;