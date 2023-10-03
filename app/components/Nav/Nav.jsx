import NavLink from '../NavLink/NavLink.jsx';
import styles from './Nav.module.css';
import authStyles from '../NavLink/NavLink.module.css';
import { UserAuth } from '@/app/js/AuthContext.js';

export default function Nav() {
    const { user, googleSignIn, logOut } = UserAuth();

    async function handleSignIn() {
        try {
            console.log('signin');
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav className={styles.nav_container}>
            <div className={styles.title}>MATEY 🏴‍☠️</div>
            <ul className={styles.nav_list}>
                <NavLink href='/'>DASHBOARD</NavLink>
                <NavLink href='createHouse'>CREATE HOUSE</NavLink>
                <NavLink href='manageHouses'>MANAGE</NavLink>
                <NavLink href='storePage'>MARKETPLACE</NavLink>
            </ul>
            <ul className={styles.nav_list + ' ' + styles.auth}>
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
                        LOGOUT
                    </a>
                </li>
            </ul>
        </nav>
    );
}
