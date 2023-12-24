import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(false)

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
    // sign Out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
    }
    // current User
    useEffect(() => {
        const currentUser = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoader(false);
                setUser(user);
            } else {
                // User is signed out
                // ...
            }
        });
        return currentUser;
    }, [user, loader])

    const authInfo = {
        createUser,
        signIn,
        user,
        loader,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;