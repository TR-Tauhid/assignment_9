import { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ImGithub } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";

const Login = () => {

    const { emailSginIn, googleSignIn, githubSignIn, notifySuccess, notifyWarning } = useContext(AuthContext);
    const emailRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

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
                                <input name="password" type="password" placeholder="Password" className="input input-bordered" required />

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