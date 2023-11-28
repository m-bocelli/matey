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
    const [bearerToken, setBearerToken] = useState(null);

    function googleSignIn() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    function logOut() {
        signOut(auth);
        location.href = './';
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                currentUser.getIdToken(true).then((token) => {
                    setBearerToken(token);
                })
                .catch(() => console.error('No token'));
            } else {
                setBearerToken(null);
            }
        });
        return () => unsubscribe;
    }, [user]); // run whenever user is updated

    return (
        <AuthContext.Provider value={{ user, bearerToken, googleSignIn, logOut }}>
            {children}
        </AuthContext.Provider>
    ); // wrapper to use Auth state in all pages
}

export function UserAuth() {
    return useContext(AuthContext);
}
