'use client';
import { useContext, createContext, useState, useEffect } from 'react';
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from './firebase';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);

    function googleSignIn() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    function logOut() {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe;
    }, [user]); // run whenever user is updated

    return (
        <AuthContext.Provider value={(user, googleSignIn, logOut)}>
            {children}
        </AuthContext.Provider>
    ); // wrapper to use Auth state in all pages
}

export function UserAuth() {
    return useContext(AuthContext);
}
