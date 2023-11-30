import styles from './AquariumPet.module.css';
import Button from '../Button/Button';
import {useState, useEffect} from 'react';

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export default function AquariumPet({ name, img, user, size, speed, depth }) {
    let rng = generateRandomNumber(1, 2);

    const [x,setX] = useState(0);
    const [y, setY] = useState(0);

    const [left, setLeft] = useState(false);

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 10);
    return () => {
        console.log("fish is: " + x + " , " + y);
        clearInterval(interval);

        if(left) {
            setX(x - speed);
        } else {
            setX(x + speed);
        }
    
        if(x>=500 && !left) {
            setLeft(true);
        } else if (x <= 0 && left) {
            setLeft(false);
        }
    };
    }, [time]);


    return (
        <div className={styles.item_container}>
                <div style={{transform: left? `translate(${x}px, 100%)`:`translate(${x}px, 100%)`}}>
                    <div className={styles.fishText}>{name}({user.split(' ')[0]})</div>
                    <img
                        className={left? styles.left : styles.fishTank}
                        src={img}
                        alt='Fish Picture'
                        width={`${50 * size}`}
                        height={`${50 * size}`}
                        style={{transform: left? `scaleX(-1)`:``}}
                    />
                </div>
        </div>
    );
}
