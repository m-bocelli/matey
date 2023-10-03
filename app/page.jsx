'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';
import { UserAuth } from './js/AuthContext';

export default function Page() {
    const { user } = UserAuth();
    const [greeting, setGreeting] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let currTime = new Date().getHours();

        if (currTime < 12 && currTime > 5) {
            setGreeting('morning');
        } else if (currTime > 12 && currTime < 17) {
            setGreeting('afternoon');
        } else {
            setGreeting('evening');
        }
    }, []);

    // forced loading to hide flash of signed-out state while still signed-in
    useEffect(() => {
        (async function () {
            await new Promise((res) => setTimeout(res, 50));
            setLoading(false);
        })();
    }, [user]);

    return (
        <main className={styles.container}>
            {loading ? (
                <p>Loading...</p>
            ) : !user ? (
                <h1>You are not signed-in ☹️</h1>
            ) : (
                <>
                    <header className={styles.header}>
                        <img src={user.photoURL} className={styles.user_icon} />
                        <h1>
                            Good{' '}
                            <span className={styles.greeting}>{greeting}</span>,{' '}
                            {user.displayName}{' '}
                        </h1>
                    </header>

                    <div id='houseInfo'>{displayHouse()}</div>
                </>
            )}
        </main>
    );
}

function displayHouse() {
    if (typeof window == 'undefined') {
        return <button>CREATE HOUSE</button>;
    } else if (localStorage.getItem('keyList') != null) {
        let arrayOfKeys = JSON.parse(localStorage.getItem('keyList'));
        let house = JSON.parse(localStorage.getItem(arrayOfKeys[0]));
        let houseName = house.houseName;
        let houseMates = house.houseMates;
        let houseMembers = '';
        for (let i = 0; i < houseMates.length; i++) {
            if (i == houseMates.length - 1) {
                houseMembers += houseMates[i];
            } else {
                houseMembers += houseMates[i] + ', ';
            }
        }
        return (
            <div>
                <h2>House {houseName}</h2>
                <h3>Mates</h3>
                {houseMembers}
            </div>
        );
    } else {
        return <div></div>;
    }
}
