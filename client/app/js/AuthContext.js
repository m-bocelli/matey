import { useContext, createContext, useState, useEffect, use } from 'react';
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
        location.href = './';
    }

    useEffect(() => {
        if (user) {
            fetch('http://localhost:2001/createUser', {method: 'POST', headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)});
        }
    }, [user]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe;
    }, [user]); // run whenever user is updated

    return (
        <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
            {children}
        </AuthContext.Provider>
    ); // wrapper to use Auth state in all pages
}

export function UserAuth() {
    return useContext(AuthContext);
}
