import React, { useState, createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
// auth
const auth = getAuth(app);

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)


    // create User 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // update user info
    const updateUser = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile);
    }

    // login

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout 
    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }
    // social login
    const loginwithProvider = (provider) => {
        return signInWithPopup(auth, provider);
    }
    // on auth state changed 
    useEffect(() => {
        const unsbuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsbuscribe();
    }, [])

    // values 
    const authInfo = {
        user,
        createUser,
        updateUser,
        login,
        logout,
        loginwithProvider,
        loading
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider;