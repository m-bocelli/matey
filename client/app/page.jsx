'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';
import SignedOut from './components/SignedOut/SignedOut';
import HouseOverview from './components/HouseOverview/HouseOverview';
import { UserAuth } from './js/AuthContext';
import Footer from "./components/Footer/Footer";

export default function Page() {
    const { userData, bearerToken } = UserAuth();
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
    }, [userData]);

    async function getUserPoints() {
        // func that will grab all points of all users in house
    }

    return (
        <main className={styles.container}>
            {loading ? (
                <p>Loading...</p>
            ) : !userData ? (
                <SignedOut />
            ) : (
                <>
                    <header className={styles.header}>
                        <img src={userData.icon} className={styles.user_icon} />
                        <h1>
                            Good{' '}
                            <span className={styles.greeting}>{greeting}</span>,{' '}
                            {userData.name}{' '}
                        </h1>
                    </header>
                    <div id='houseInfo'>
                        {
                            /*
                            userData.house ? 
                                <HouseOverview token={bearerToken} houseId={userData.house}/> : 
                                <h2>no house lol</h2>
                                */
                        }
                    </div>
                </>
            )}
            <Footer></Footer>
        </main>
    );
}


