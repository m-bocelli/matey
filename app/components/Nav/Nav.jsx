import NavLink from '../NavLink/NavLink.jsx';
import styles from './Nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav_container}>
            <h1>MATEYS 🏴‍☠️</h1>
            <ul className={styles.nav_list}>
                <NavLink href='/'>HOME</NavLink>
                <NavLink href='createHouse'>CREATE HOUSE</NavLink>
                <NavLink href='manageHouses'>MANAGE</NavLink>
                <NavLink href='storePage'>MARKETPLACE</NavLink>
                <NavLink href='/'>LOGIN</NavLink>
            </ul>
            <ul className={styles.nav_list}></ul>
        </nav>
    );
}
