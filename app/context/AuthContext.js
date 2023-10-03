import { useContext, createContext, useState, useEffect } from 'react';
import {
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
} from 'firebase/auth';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState('Mikey');

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function UserAuth() {
    return useContext(AuthContext);
}
