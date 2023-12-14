import styles from './Footer.module.css';

//Used as a component for the footer of pages
export default function Footer() {
    return (
        <div className={styles.footer}>
            Budgeteers - Chris Bennett, Michael Bocelli, Jillian Camp, Ethan Stipes
        </div>
    );
}