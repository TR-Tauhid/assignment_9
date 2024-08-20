import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail, GithubAuthProvider } from "firebase/auth";
import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const emailSginIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const githubAuthProvider = new GithubAuthProvider();
    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubAuthProvider);
    }

    useEffect(() => {
        const userStatus = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log("on auth change user status: ", currentUser);
        })

        return () => userStatus();

    }, []);

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const passReset = (email) => {
        sendPasswordResetEmail(auth, email);
    }


    const authValue = {
        user,
        loading,
        googleSignIn,
        emailSginIn,
        createUserWithEmail,
        githubSignIn,
        logOut,
        passReset,
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}