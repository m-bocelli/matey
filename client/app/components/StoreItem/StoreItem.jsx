import styles from './StoreItem.module.css';
import Button from '../Button/Button';

export default function StoreItem({
    name,
    desc,
    price,
    img,
    onClick,
    isSelected,
}) {
    return (
        <div className={styles.item_container} onClick={onClick}>
            <img className={styles.item_img} src={img}></img>
            <p className={styles.name}>{name}</p>
            <div className={styles.item_buy_sect}>{price}</div>
        </div>
    );
}
