import NavLink from '../NavLink/NavLink.jsx';
import styles from './Nav.module.css';

export default function Nav() {
    return (
        <div className={styles.nav}>
            <NavLink href='/'>HOME</NavLink>
            <NavLink href='createHouse'>CREATE HOUSE</NavLink>
            <NavLink href='manageHouses'>MANAGE</NavLink>
            <NavLink href='storePage'>MARKETPLACE</NavLink>
        </div>
    );
}
