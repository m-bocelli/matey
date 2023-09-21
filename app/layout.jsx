export default function RootLayout({ children }) {
    return (            
        <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>BUDGETEERS</title>
            </head>
            <body>
                <h1>HELLO WORLD</h1>
                {children}
            </body>
        </html>
    )
}
