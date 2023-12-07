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
    const [userData, setUserData] = useState(null);
    const [bearerToken, setBearerToken] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe;
    }, [user]); // run whenever user is updated

    useEffect(() => {
        if (user) {
            // create user in database if they are not already there
            fetch('http://localhost:2001/createUser', {method: 'POST', headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)})
            .then(() => user.getIdToken().then((token) => {
                fetch(`http://localhost:2001/users/${user.uid}`, {headers: {Authorization : `Bearer ${token}`}})
                .then((res) => res.json())
                .then((data) => {
                    console.log("setting user data");
                    setUserData(data);
                    setBearerToken(token);
                });
            }));
        }
    }, [user]);

    function googleSignIn() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    function logOut() {
        signOut(auth);
        location.href = './';
    }

    return (
        <AuthContext.Provider value={{ user, googleSignIn, logOut, userData, bearerToken }}>
            {children}
        </AuthContext.Provider>
    ); // wrapper to use Auth state in all pages
}

// wrapper to quickly grab context state (1 import vs 2 lol)
export function UserAuth() {
    return useContext(AuthContext);
}
