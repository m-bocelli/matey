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
        if (user) {
            fetch('http://localhost:2001/createUser', {method: 'POST', body: user})
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error creating user object:', error);
            });
        }
    }, [user]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
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
