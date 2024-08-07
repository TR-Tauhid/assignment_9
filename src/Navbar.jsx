import { Link } from "react-router-dom";

const Navbar = () => {
    const links =
        <>
            <li> <Link to="/home">Home</Link></li>
            <li>
                <Link to="/updateprofile">Update Profile</Link>

            </li>
            <li><Link to="/login">Login</Link></li>
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">

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
                    <div className="w-24 h-16">
                        <a className=""><img src="/src/assets/logo.png" alt="logo" /> </a>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;