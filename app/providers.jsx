'use client';
import { AuthContextProvider } from './js/AuthContext';

export function Providers({ children }) {
    return <AuthContextProvider>{children}</AuthContextProvider>;
}
