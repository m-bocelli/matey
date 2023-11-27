import styles from './Button.module.css';

export default function Button({ onClick, children, type }) {
    return (
        <button className={styles.button} onClick={onClick} type={type}>
            {children}
        </button>
    );
}
