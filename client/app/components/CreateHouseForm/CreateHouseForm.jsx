import Button from "../Button/Button";
import { useEffect, useState } from 'react';
import styles from './CreateHouseForm.module.css';

//Used to create a house that you can invite people to
export default function CreeateHouseForm({userData}) {

    const handleSubmit = () => {
        const formBody = {
            houseName:  document.getElementById("houseName").value
        }
        // Make HTTP request to create house object with given name
        fetch(`https://matey.onrender.com/houses?user=${userData.id}`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formBody)
        })
        .then(() => window.location.href = '/manageHouse')
        .catch((err) => console.err('Failed to create house.', err));
    }

    return (
            <div className={styles.container}>
                <form id='createHouse' onSubmit={handleSubmit}>
                    <div className={styles.input_area}>
                        <h2> Create House <div className={styles.icon}>🏠</div></h2>
                        <label>House Name</label>
                        <input
                            className={styles.text_input}
                            type='text'
                            id='houseName'
                            name='houseName'
                            required
                        ></input>
                        <Button type={'submit'}>Create</Button>
                    </div>
                </form>
            </div>
    );
}