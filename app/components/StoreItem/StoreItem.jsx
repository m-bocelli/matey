import styles from './StoreItem.module.css';
import Button from '../Button/Button';


export default function StoreItem({ name, desc, price, img }) {
    return (
        <div className={styles.item_container}>
            <div>🐙</div>
            <div className={styles.item_blurb}>
                <p>{name}</p>
                <p>{desc}</p>
            </div>
            <div className={styles.item_buy_sect}>
                {price}
                <Button>BUY</Button>
            </div>
        </div>
    );
}
