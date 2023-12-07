'use client';
import styles from './page.module.css';

function joinHouse(e) {
    e.preventDefault();
    let joinKey = document.getElementById('houseKey').value;
    if (joinKey == null) {
        alert('Please enter a key');
    } else {
        if (localStorage.getItem(joinKey) == null) {
            alert('House key not found');
        } else {
            let currHouse = JSON.parse(localStorage.getItem(joinKey));
            currHouse.houseMates[currHouse.houseMates.length] = 'newUserId';
            let uL = JSON.stringify(currHouse);
            localStorage.setItem(joinKey, uL);
            alert('Worked');
            location.href = './';
        }
    }
}

export default function JoinHouseUI() {
    return (
        <div className={styles.container}>
            <div className={styles.nonFooter}>
                <h1> Join House 🏠 </h1>
                <form id='joinHouse' onSubmit={joinHouse}>
                    <label>House Key:</label>
                    <input className={styles.textInput} type='text' id='houseKey' name='houseKey'></input>
                    <br></br>
                    <input className={styles.join} type='submit' value='Join House'></input>
                </form>
            </div>
            <div className={styles.footer}>
                Budgeteers - Chris Bennett, Michael Bocelli, Jillian Camp, Ethan Stipes
            </div>
        </div>
    );
}
