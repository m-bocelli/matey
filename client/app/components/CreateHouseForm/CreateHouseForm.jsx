import Button from "../Button/Button";
import { useEffect, useState } from 'react';
import styles from './CreateHouseForm.module.css';

export default function CreeateHouseForm({userData}) {
    const [endpoint, setEndpoint] = useState('');

    useEffect(() => {
        if (userData) {
            setEndpoint(`http://localhost:2001/createHouse?user=${userData.id}`);
        }
    }, [userData]);

    return (
            <form id='createHouse' action={endpoint} method="POST">
                <h2> Create House 🏠 </h2>
                <label>House Name:</label>
                <input
                    className={styles.textInput}
                    type='text'
                    id='houseName'
                    name='houseName'
                ></input>
                <Button type={'submit'}>Create</Button>
            </form>
    );
}