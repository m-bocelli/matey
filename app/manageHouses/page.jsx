'use client';
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
        localStorage.setItem('keyList', JSON.stringify(listOfKeys));
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
            <button onClick={goToCreate}>Create House</button>
        </div>
        );
    }
    else if(localStorage.getItem('keyList') == null){
        return (
            <div>
                <button onClick={goToCreate}>Create House</button>
            </div>
        );
    }
    else if(JSON.parse(localStorage.getItem('keyList')).length < 1){
        return (
            <div>
                <button onClick={goToCreate}>Create House</button>
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
                <button onClick={showKey}>{hName}</button>
            </div>
        );
    }
}
export default function ManageHousesUI() {
    return (
        <div className={styles.container}>
            <h1> Manage Houses </h1>
            <div>{displayButton()}</div>
            <button onClick={goToJoin}>Join House</button>
            <button onClick={deleteHouse}>Delete House</button>
            <input
                className={styles.delete_text}
                id='keyDelete'
                placeholder='Enter Key of House You Want To Delete'
            ></input>
        </div>
    );
}
