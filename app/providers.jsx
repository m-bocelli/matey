'use client';
import { AuthContextProvider } from './js/AuthContext.js';

export function Providers({ children }) {
    return <AuthContextProvider>{children}</AuthContextProvider>;
}
