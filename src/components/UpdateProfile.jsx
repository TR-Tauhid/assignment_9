import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import auth from "../firebase/firebase.config";

const UpdateProfile = () => {

    const { updateUserProfile, notifySuccess, notifyWarning } = useContext(AuthContext);

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');

        updateUserProfile(name, photoUrl)
            .then(() => {
                notifySuccess('Updated Successfully...!!!')
            })
            .catch(err => notifyWarning(err.message))
    }

    const user = auth.currentUser;
    const userName = user.displayName;
    const userPhotoUrl = user.photoURL;

    return (
        <div>

            <Helmet>
                <title>Home | Update Profile</title>
            </Helmet>

            <div>
                <div className="hero ">
                    <div className="hero-content flex-col gap-x-10 lg:flex-row-reverse">
                        <div className="text-center lg:text-left w-full lg:min-w-96">
                            <h1 className="text-5xl font-bold">Update Profile</h1>
                            <p className="py-6">
                                Please Provide your name and profile detail.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleUpdateSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name: {userName}</span>
                                    </label>
                                    <input name="name" type="name" placeholder="Change your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url: {userPhotoUrl}</span>
                                    </label>
                                    <input name="photoUrl" type="url" placeholder="Change your photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;