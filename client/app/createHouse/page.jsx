'use client';
import styles from './page.module.css';
import { UserAuth } from '../js/AuthContext';
import { useEffect } from 'react';

function createHouse(e) {
    e.preventDefault();
    
    location.href = '/';
}

export default function CreateHouseUI() {
    const { userData } = UserAuth();
    let endpoint = '';

    useEffect(() => {
        if (userData) {
            endpoint = `http://localhost:2001/createHouse?user=${userData.id}`;
        }
    }, [userData]);
    

    return (
        <div className={styles.container}>
            <h1> Create House 🏠 </h1>
            <form id='createHouse' action={endpoint} method='POST'>
                <label>House Name:</label>
                <input
                    className={styles.textInput}
                    type='text'
                    id='houseName'
                    name='houseName'
                    placeholder='House name'
                ></input>
                <br></br>
                <input
                    className={styles.create}
                    type='submit'
                    placeholder='Create'
                ></input>
                {/*Submit button onclick will use a function to genrate a unique House Key*/}
            </form>
        </div>
    );
}
