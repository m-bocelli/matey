import styles from './AquariumPet.module.css';
import Button from '../Button/Button';
import {useState} from 'react';

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomDirection(rng) {
    if (rng == 1) return 'left';
    else return 'right';
}

function setFishPosition(x, y) {


}

export default function AquariumPet({ name, img, user }) {
    let rng = generateRandomNumber(1, 2);

    const [x,setX] = useState(0);
    const [y, setY] = useState(0);

    return (
        <div className={styles.item_container}>
                <div>
                    {name}({user.split(' ')[0]})
                    <img
                        className={rng === 1 ? styles.left : styles.fishTank}
                        src={img}
                        alt='Fish Picture'
                        width='50'
                        height='50'
                        style={{left: x}}
                    />
                </div>
        </div>
    );
}
