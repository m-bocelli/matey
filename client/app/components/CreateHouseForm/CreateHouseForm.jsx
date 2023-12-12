import Button from "../Button/Button";
import { useEffect, useState } from 'react';
import styles from './CreateHouseForm.module.css';

export default function CreeateHouseForm({userData}) {
    return (
            <div className={styles.container}>
                <form id='createHouse' action={`http://localhost:2001/createHouse?user=${userData.id}`} method="POST">
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