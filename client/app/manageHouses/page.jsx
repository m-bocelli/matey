'use client';
import Button from '../components/Button/Button';
import styles from './page.module.css';
function showKey() {
    let keyStuff = JSON.parse(localStorage.getItem('keyList'));
    let key = keyStuff[0];
    alert("Your key is " + key);
}
function goToCreate() {
    location.href = './createHouse';
}
function goToJoin() {
    location.href = './joinHouse';
}
function deleteHouse() {
    let keyEntered = document.getElementById('keyDelete').value;
    let listOfKeys = JSON.parse(localStorage.getItem('keyList'));
    let a = 0;
    for (let i = 0; i < listOfKeys.length; i++) {
        if (listOfKeys[i] == keyEntered) {
            listOfKeys.splice(i, 1);
            a = 1;
            i = 100;
        }
    }
    if (a == 1) {
        if(listOfKeys.length < 1){
            localStorage.removeItem('keyList');
        }
        else {
            localStorage.setItem('keyList', JSON.stringify(listOfKeys));
        }
        localStorage.removeItem(keyEntered);
        alert('House Removed');
    } else {
        alert('House Not Found');
    }
}
function displayButton() {
    if(typeof window == 'undefined') {
        return (
        <div>
            <Button onClick={goToCreate}>Create House</Button>
        </div>
        );
    }
    else if(localStorage.getItem('keyList') == null){
        return (
            <div>
                <Button onClick={goToCreate}>Create House</Button>
            </div>
        );
    }
    else if(JSON.parse(localStorage.getItem('keyList')).length < 1){
        return (
            <div>
                <Button onClick={goToCreate}>Create House</Button>
            </div>
        );
    }
    else {
        let listKey = JSON.parse(localStorage.getItem('keyList'));
        let key = listKey[0];
        let house = JSON.parse(localStorage.getItem(key));
        let hName = house.houseName;
        return (
            <div>
                <Button onClick={showKey}>{hName}</Button>
            </div>
        );
    }
}
export default function ManageHousesUI() {
    return (
        <div className={styles.container}>
            <div className={styles.nonFooter}>
                <h1> Manage Houses 🏘 </h1>
                <div>{displayButton()}</div>
                <Button onClick={goToJoin}>Join House</Button>
                <Button onClick={deleteHouse}>Delete House</Button>
                <input
                    className={styles.delete_text}
                    id='keyDelete'
                    placeholder='Enter Key of House You Want To Delete'
                ></input>
            </div>
            <div className={styles.footer}>
                Budgeteers - Chris Bennett, Michael Bocelli, Jillian Camp, Ethan Stipes
            </div>
        </div>
    );
}
