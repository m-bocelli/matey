import styles from './AquariumPet.module.css';
import Button from '../Button/Button';


function generateRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min));
}

function randomDirection() {
    if(generateRandomNumber(1, 2)==1) return "left"; else return "right";
}

export default function AquariumPet({ name, img }) {
    return (
        <div className={styles.item_container}>
            <marquee behaviour="scroll" direction={randomDirection()} scrollamount={generateRandomNumber(10, 20)}>            
                <div className={styles.fishTank}>    
                    {name}        
                    <img src={img} alt="Fish Picture" width="50" height="50"/>
                </div>
            </marquee>
        </div>
    );
}
