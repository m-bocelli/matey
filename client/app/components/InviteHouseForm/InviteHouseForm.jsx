import styles from './InviteHouseForm.module.css';
import Button from '../Button/Button';

//Used to invite users to a house via email, sending them the house key
export default function InviteHouseForm({userData, bearerToken}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formBody = {
            toName:  document.getElementById("toName").value,
            toEmail: document.getElementById("toEmail").value
        }

        fetch(`https://matey.onrender.com/houses/invite?fromName=${userData.name}&houseId=${userData.house}`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json', Authorization: `Bearer ${bearerToken}`},
            body: JSON.stringify(formBody)
        })
        .then(() => window.location.href = '/manageHouse')
        .catch((err) => console.err('Failed to send invite.', err));
    }

    return (
        <div className={styles.container}>
            <form id='inviteToHouse' onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.input_area}>
                    <h2>Invite to House <div className={styles.icon}>🏠</div></h2>
                    <label>Name</label>
                    <input 
                        style={{marginBottom: '1rem'}}
                        className={styles.text_input} 
                        type='text' 
                        id='toName' 
                        name='toName'
                        placeholder='i.e. Valentine de Villefort'
                        required
                    />
                    <label>Email</label>
                    <input 
                        className={styles.text_input} 
                        type='email' 
                        id='toEmail' 
                        name='toEmail'
                        placeholder='i.e. edmond@dantès.com'
                        required
                    />
                </div>
                <Button type={'submit'}>Invite</Button>
            </form>
        </div>
    );
}