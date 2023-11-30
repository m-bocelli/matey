'use client';
import styles from './page.module.css';

function createHouse(e) {
    e.preventDefault();
    let hName = document.getElementById('houseName').value;
    if (hName == null || hName == '') {
        alert('Please enter a house name');
    } else {
        let key = '';
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 12; i++) {
            key += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }
        let u = {
            houseName: hName,
            houseMates: ['creatorId'],
        };
        let uL = JSON.stringify(u);
        localStorage.setItem(key, uL);
        let a = JSON.parse(localStorage.getItem('keyList'));
        let b = [];
        if (a != null) {
            a[a.length] = key;
            localStorage.setItem('keyList', JSON.stringify(a));
        } else {
            b[0] = key;
            localStorage.setItem('keyList', JSON.stringify(b));
        }
        alert('Your house key is ' + key);
        location.href = './';
    }
}

export default function CreateHouseUI() {
    return (
        <div className={styles.container}>
            <h1> Create House 🏠 </h1>
            <form id='createHouse' onSubmit={createHouse}>
                <label>House Name:</label>
                <input
                    className={styles.textInput}
                    type='text'
                    id='houseName'
                    name='houseName'
                ></input>
                <br></br>
                <input
                    className={styles.create}
                    type='submit'
                    value='Create House'
                ></input>
                {/*Submit button onclick will use a function to genrate a unique House Key*/}
            </form>
        </div>
    );
}
