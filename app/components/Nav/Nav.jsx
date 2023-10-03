import NavLink from '../NavLink/NavLink.jsx';
import styles from './Nav.module.css';
import { UserAuth } from '@/app/context/AuthContext.js';

export default function Nav() {
    const user = UserAuth();

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
                <NavLink href='/'>LOGIN</NavLink>
                <NavLink href='/'>LOGOUT</NavLink>
            </ul>
        </nav>
    );
}
