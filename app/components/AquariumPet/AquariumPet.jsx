import styles from './AquariumPet.module.css';
import Button from '../Button/Button';



function generateRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min));
}

function randomDirection(rng) {
    if(rng==1) return "left"; else return "right";
}

export default function AquariumPet({ name, img, user }) {
    let rng = generateRandomNumber(1, 2);

    return (
        <div className={styles.item_container}>
            <marquee behaviour="scroll" direction={randomDirection(rng)} scrollamount={generateRandomNumber(10, 20)}>            
                <div>    
                    {name} 
                    ({user.split(' ')[0]})       
                    <img className={rng===1 ? styles.left : styles.fishTank} src={img} alt="Fish Picture" width="50" height="50"/>
                </div>
            </marquee>
        </div>
    );
}
