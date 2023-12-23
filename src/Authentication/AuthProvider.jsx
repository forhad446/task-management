import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true)

    // create new account
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign In user
    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // current User
    useEffect(() => {
        const currentUser = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoader(false);
                setUser(user);
            } else {
                setLoader(true);
                // User is signed out
                // ...
            }
        });
        return currentUser;
    }, [user])

    const authInfo = {
        createUser,
        signIn,
        user,
        loader
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;