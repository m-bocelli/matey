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
            location.href = 'dashboard';
        }
    }
}

export default function JoinHouseUI() {
    return (
        <div className={styles.container}>
            <h1> Join House </h1>
            <form id='joinHouse' onSubmit={joinHouse}>
                <label>House Key:</label>
                <input type='text' id='houseKey' name='houseKey'></input>
                <br></br>
                <input type='submit' value='submit'></input>
            </form>
        </div>
    );
}
