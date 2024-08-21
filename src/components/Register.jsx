import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { IoMdEye } from "react-icons/io";
import { LuEyeOff } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";


const Register = () => {

    const [passToggle, setPassToggle] = useState(true);
    const { createUserWithEmail, updateUserProfile, notifySuccess, notifyWarning } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photoURL = form.get('photoUrl');

        if (!/[A-Z]/.test(password)) {
            notifyWarning("Your Password must contain a CAPITAL letter...!!!")
        }

        if (!/[a-z]/.test(password)) {
            notifyWarning("Your Password must contain a small letter...!!!")
        }

        if ((password.length) < 6 && (password.length) > 16) {
            notifyWarning("Your Password must be between 6 - 16 letters...!!!")
        }

        if (
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            (password.length) > 6
        ) {
            createUserWithEmail(email, password)
                .then(() => {
                    updateUserProfile(name, photoURL);
                    if (!location.state) {
                        navigate('/');
                    }
                    else {
                        navigate(location.state);
                    }
                    notifySuccess('Registered Succesfully...!!!')
                })
                .catch(err => {
                    notifyWarning(err.message);
                })
        }
    }

    return (
        <div>

            <Helmet>
                <title>Home | Register</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse w-full gap-x-40">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold leading-relaxed">Welcome....!!! <br></br>Register&nbsp;now!</h1>
                    </div>

                    <div className="card w-full max-w-sm shrink-0 shadow-2xl">

                        <form onSubmit={handleFormSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="name" placeholder="Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name="photoUrl" type="url" placeholder="Photo Url" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div 
                                    className="
                                        flex 
                                        w-full 
                                        outline-double 
                                        bg-[#E8F0FE] 
                                        outline-[#b6b5b5] 
                                        outline-1 
                                        rounded-lg 
                                        grow items-center 
                                        justify-between">
                                    <input
                                        name="password" 
                                        type={passToggle ? `password` : `text`} 
                                        placeholder="Password" 
                                        className="w-4/5 grow bg-none outline-none-input p-2 py-3 rounded-lg pl-4 bg-[#E8F0FE]" required />
                                        <button
                                            title="button"
                                            className="min-w-5 text-2xl pr-2"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                console.log("Pass", passToggle);
                                                setPassToggle(!passToggle);
                                            }}>
                                            {passToggle ? <LuEyeOff /> : <FaRegEye />}
                                        </button>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <div>
                                <Link to="/login" className="btn btn-link w-full text-center">Already have an account? Login.</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;