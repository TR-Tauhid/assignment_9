import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const YourProfile = () => {

    const user = useContext(AuthContext);
    console.log('User in profile', user.user.displayName);
    console.log(user.user.photoURL)

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content gap-x-10 flex-col lg:flex-row leading-relaxed">
                    <img
                        src={user.user.photoURL}
                        className="rounded-lg shadow-2xl" />
                    <div className="gap-y-4 flex flex-col">
                        <h1 className="text-4xl font-bold">Hey there...<><br /></>{user.user.displayName}</h1>
                        <h1>Your email: {user.user.email}</h1>
                        <h1>Verification Status: {user.user.emailVerified ? `True` : `False`} </h1>
                        <h1>Your photo: {user.user.photoURL}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourProfile;