'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Page() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        let currTime = new Date().getHours();

        if (currTime < 12 && currTime > 5) {
            setGreeting('morning');
        } else if (currTime > 12 && currTime < 17) {
            setGreeting('afternoon');
        } else {
            setGreeting('evening');
        }
    }, []);

    return (
        <main className={styles.container}>
            <h1>
                Good <span className={styles.greeting}>{greeting}</span>, USER
            </h1>

            <div id='houseInfo'>{displayHouse()}</div>
        </main>
    );
}

function displayHouse() {
    if (typeof window == 'undefined') {
        return <button>CREATE HOUSE</button>;
    } else if (localStorage.getItem('keyList') != null) {
        let arrayOfKeys = JSON.parse(localStorage.getItem('keyList'));
        let house = JSON.parse(localStorage.getItem(arrayOfKeys[0]));
        let houseName = house.houseName;
        let houseMates = house.houseMates;
        let houseMembers = '';
        for (let i = 0; i < houseMates.length; i++) {
            if (i == houseMates.length - 1) {
                houseMembers += houseMates[i];
            } else {
                houseMembers += houseMates[i] + ', ';
            }
        }
        return (
            <div>
                <h2>{houseName}</h2>
                <h3>Mates</h3>
                {houseMembers}
            </div>
        );
    } else {
        return <div></div>;
    }
}
