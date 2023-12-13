'use client';
import styles from './page.module.css';
import AquariumPet from '../components/AquariumPet/AquariumPet';
import { UserAuth } from '../js/AuthContext';
import { useEffect, useState } from 'react';

export default function AquariumUI() {
    const { userData, bearerToken } = UserAuth();
    const [fish, setFish] = useState([]);

    useEffect(() => {
        if (userData) {
            fetch(`http://localhost:2001/houses/${userData.house}/fish`, {
                headers: {Authorization : `Bearer ${bearerToken}`}
            })
            .then((res) => res.json())
            .then((data) => setFish(data));
        }
    }, [userData]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}> Aquarium 🐠</h1>
            {userData ? fish.map((item) => {
                return (
                    <AquariumPet
                        key={item.id + userData.id}
                        name={item.name}
                        img={item.img}
                        user={userData.name}
                        size={item.size}
                        speed={item.speed}
                        dpeth={item.depth}
                    ></AquariumPet>
                );
            }) : <div className={styles.loading}><h2>Loading...</h2></div>}
        </div>
    );
}
