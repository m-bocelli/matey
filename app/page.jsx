'use client';
import { useState, useEffect } from 'react';

export default function Page() {
    const [greeting, setGreeting] = useState('morning');

    useEffect(() => {
        let currTime = new Date().getHours();

        if (currTime < 12 && currTime > 5) {
            setGreeting['morning'];
        } else if (currTime > 12 && currTime < 17) {
            setGreeting['afternoon'];
        } else {
            setGreeting['evening'];
        }
    }, []);

    return (
        <main>
            <h1>Good {greeting}, USER</h1>
        </main>
    );
}
