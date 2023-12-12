import styles from './JoinHouseForm.module.css';
import Button from '../Button/Button';

export default function JoinHouseForm({userData}) {
    return (
        <div className={styles.container}>
            <form id='joinHouse' action={`http://localhost:2001/joinHouse?userId=${userData.id}`} method="POST">
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
                </div>
                <Button type={'submit'}>Join</Button>
            </form>
        </div>
    );
}