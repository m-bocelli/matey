import styles from './AquariumPet.module.css';
import Button from '../Button/Button';
import {useState, useEffect} from 'react';

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomDirection(rng) {
    if (rng == 1) return 'left';
    else return 'right';
}

function setFishPosition(x, y) {
    setX(x);
    setY(y);
}


export default function AquariumPet({ name, img, user }) {
    let rng = generateRandomNumber(1, 2);

    const [x,setX] = useState(0);
    const [y, setY] = useState(0);

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 100);
    return () => {
        console.log("fish is: " + x + " , " + y);
        clearInterval(interval);
        setX(x + 2);
    };
    }, [time]);


    return (
        <div className={styles.item_container}>
                <div>
                    {name}({user.split(' ')[0]})
                    <img
                        className={styles.fishTank}
                        src={img}
                        alt='Fish Picture'
                        width='50'
                        height='50'
                        style={{transform: `translate(${x}px, 100%)`}}
                    />
                </div>
        </div>
    );
}
