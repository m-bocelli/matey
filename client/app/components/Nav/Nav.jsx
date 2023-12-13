import NavLink from '../NavLink/NavLink.jsx';
import styles from './Nav.module.css';
import authStyles from '../NavLink/NavLink.module.css';
import { UserAuth } from '@/app/js/AuthContext.js';
import { useEffect, useState } from 'react';

export default function Nav() {
    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);

    // forced loading to hide flash of signed-out state while still signed-in
    useEffect(() => {
        (async function () {
            await new Promise((res) => setTimeout(res, 50));
            setLoading(false);
        })();
    }, [user]);

    async function handleSignIn() {
        try {
            console.log('sign-in');
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            console.log('sign-out');
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav className={styles.nav_container}>
            <div className={styles.title}>MATEY 🏴‍☠️</div>
            <ul className={styles.nav_list}>
                <NavLink href='/'>DASHBOARD</NavLink>
                {!user ? null : (
                    <>
<<<<<<< HEAD
                        <NavLink href='createHouse'>CREATE HOUSE</NavLink>
                        <NavLink href='manageHouses'>MANAGE HOUSES</NavLink>
                        <NavLink href='calendar'>TASKS</NavLink>
=======
                        <NavLink href='manageHouse'>MANAGE HOUSE</NavLink>
                        <NavLink href='calendar'>CALENDAR</NavLink>
                        <NavLink href='tasksPage'>TASKS</NavLink>
>>>>>>> 508c56e3573605793ccbc35ec2216667f2c29c52
                        <NavLink href='storePage'>FISH MARKET</NavLink>
                        <NavLink href='aquarium'>AQUARIUM</NavLink>
                    </>
                )}
            </ul>
            <ul className={styles.nav_list + ' ' + styles.auth}>
                {loading ? null : !user ? (
                    <>
                        <li className={authStyles.link_container}>
                            <a
                                className={authStyles.link}
                                style={{ cursor: 'pointer' }}
                                onClick={handleSignIn}
                            >
                                LOGIN
                            </a>
                        </li>
                        <li className={authStyles.link_container}>
                            <a
                                className={authStyles.link}
                                style={{ cursor: 'pointer' }}
                                onClick={handleSignIn}
                            >
                                SIGN-UP
                            </a>
                        </li>
                    </>
                ) : (
                    <li className={authStyles.link_container}>
                        <a
                            className={authStyles.link}
                            style={{ cursor: 'pointer' }}
                            onClick={handleSignOut}
                        >
                            LOGOUT
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );
}
