'use client';
import './globals.css';
import Nav from './components/Nav/Nav.jsx';
import { AuthContextProvider } from './context/AuthContext';

const metadata = {
    viewport: 'width=device-width, initial-scale=1.0',
    title: 'Matey',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
                    integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM'
                    crossOrigin='anonymous'
                />
                <meta name='viewport' content={metadata.viewport} />
                <title>{metadata.title}</title>
            </head>
            <body>
                <AuthContextProvider>
                    <Nav></Nav>
                    {children}
                </AuthContextProvider>
            </body>
        </html>
    );
}
