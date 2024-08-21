import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ImGithub } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { LuEyeOff } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";

const Login = () => {

    const { emailSginIn, googleSignIn, githubSignIn, notifySuccess, notifyWarning } = useContext(AuthContext);
    const emailRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [passToggle, setPassToggle] = useState(true);

    const handleGoogleBtn = () => {

        googleSignIn()
            .then((res) => {
                notifySuccess('Welcome ...!!!')
                if (res) {
                    if (!location.state) {
                        navigate('/')
                    }
                    else {
                        navigate(location.state);
                    }
                }
            })
            .catch(err => {
                notifyWarning(err.message)
            })
    }

    const handleGithubBtn = () => {

        githubSignIn()
            .then(res => {
                notifySuccess('Welcome...!!!')
                if (res) {
                    if (!location.state) {
                        navigate('/');
                    }
                    else {
                        navigate(location.state);
                    }
                }
            }
            )
            .catch(err => {
                notifyWarning(err.message);
            })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        emailSginIn(email, password)
            .then((res) => {
                notifySuccess("Welcome...!!!")
                if (res) {
                    if (!location.state) {
                        navigate('/')
                    }
                    else {
                        navigate(location.state);
                    }
                }
            }
            )
            .catch(err => {
                notifyWarning(err.message);
            })
    }



    return (

        <div>
            <Helmet>
                <title>Home | Login</title>
            </Helmet>
            <div className="hero my-6 md:my-12">
                <div className="hero-content flex-col lg:flex-row-reverse justify-around">
                    <div className="text-center lg:text-left md:max-w-[50%]">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Welcome to our platform! Please log in to access your personalized dashboard, explore new features, and stay updated with the latest content. We&apos;re glad to have you back...!!!
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleFormSubmit} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" ref={emailRef} placeholder="Email" className="input input-bordered" required />
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
                                <button className="btn btn-primary shadow-lg shadow-blue-600 font-semibold text-xl h-16">Login</button>
                            </div>


                            <div className="w-full">
                                <Link state={location.state} to="/register" className="btn btn-link text-center w-full">Don&apos;t have an account? Register.</Link>
                            </div>
                        </form>

                        <div className="flex justify-around mb-8 w-full">
                            <div className="flex grow justify-around items-center"> <button onClick={handleGoogleBtn} className="rounded-badge shadow-indigo-500/50 shadow-xl border-blue-400 border hover:bg-green-200 p-8 text-4xl"><FcGoogle /></button></div>
                            <div className="flex grow justify-around items-center"> <button onClick={handleGithubBtn} className="rounded-badge shadow-indigo-500/50 shadow-xl border-blue-400 border hover:bg-green-200 p-8 text-4xl"><ImGithub /></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;