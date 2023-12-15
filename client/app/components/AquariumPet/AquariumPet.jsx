import styles from './AquariumPet.module.css';
import {useState, useEffect} from 'react';

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* AquariumPet
* name: the name of the fish
* img: the fish image link used
* user: the user who the fish belongs to
* size: the size of the fish
* speed: the speed of the fish
* depth: the depth of the fish when
*/
export default function AquariumPet({ name, img, user, size, speed, depth }) {

    //fish x and y position.
    const [x,setX] = useState(0);
    const [y, setY] = useState(50);

    //Fish moves left, or up, if any of these are negative then 
    //it will move !left = right and !up = down
    const [left, setLeft] = useState(false);
    const [up, setUp] = useState(false);

    //time to update the fish position, via a state.
    const [time, setTime] = useState(Date.now());

    //maximum y value the fish can reach, positive and negative.
    const yMax = 100;

    //Update fish position every 10 milliseconds.
    useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 10);
    return () => {
        //console.log("fish is: " + x + " , " + y);
        clearInterval(interval);

        if(up) {
            setY(y + (speed * 0.1));
        } else {
            setY(y - (speed * 0.1));
        }

        if(left) {
            setX(x - speed);
        } else {
            setX(x + speed);
        }
    
        if(x>=generateRandomNumber(500, 10000) && !left) {
            setLeft(true);
        } else if (x <= 0 && left) {
            setLeft(false);
        }

        if(y>=yMax && up) {
            setUp(false);
        } else if (y <= -yMax  && !up) {
            setUp(true);
        }
    };
    }, [time]);


    return (
        <div className={styles.item_container}>
            <div className={styles.fishContainer}>  
            <div>{name}({user.split(' ')[0]})</div>
                <div style={{transform: left? `translate(${x}px, ${y}vh`:`translate(${x}px,${y}vh)`}}>
                        
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
        </div>
    );
}
