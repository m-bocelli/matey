import './globals.css';

export const metadata = {
    charSet: 'UTF-8',
    viewport: 'width=device-width, initial-scale=1.0',
    title: 'Budgeteers',
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
            </head>
            <body>{children}</body>
        </html>
    );
}
