'use client';
import styles from './page.module.css';
import fish1 from '../img/fish1.png';
import { SEACREATURES } from '../constants/seacreatures';
import AquariumPet from '../components/AquariumPet/AquariumPet';
import { UserAuth } from '../js/AuthContext';

export default function AquariumUI() {
    const { user } = UserAuth();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> Aquarium </h1>
            {SEACREATURES.map((item) => {
                return (
                    <AquariumPet
                        key={item.id}
                        name={item.name}
                        img={item.img}
                        user={user ? user.displayName : '??? ???'}
                        size={item.size}
                        speed={item.speed}
                        dpeth={item.depth}
                    ></AquariumPet>
                );
            })}
        </div>
    );
}
