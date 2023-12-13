import styles from './JoinHouseForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';

export default function JoinHouseForm({userData}) {
    const [showError, setShowError] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formBody = {
            houseId:  document.getElementById("houseId").value,
        }

        fetch(`https://matey.onrender.com/houses/join?userId=${userData.id}`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formBody)
        })
        .then((res) => res.status !== 200 ? setShowError(true) : window.location.href = '/manageHouse')
        .catch((err) => console.error('Failed to join house.', err));
    }

    return (
        <div className={styles.container}>
            <form id='joinHouse' onSubmit={(e)=>handleSubmit(e)}>
                <div className={styles.input_area}>
                    <h2>Join House <div className={styles.icon}>🏠</div></h2>
                    <label>House Key</label>
                    <input 
                        className={styles.text_input} 
                        type='text' 
                        id='houseId' 
                        name='houseId' 
                        required
                    />
                    {showError && <div>Invalid houseID</div>}
                </div>
                <Button type={'submit'}>Join</Button>
            </form>
        </div>
    );
}