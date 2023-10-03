'use client';
import "./manageStyles.css";
function goToCreate() {
    location.href = "createHouse";
}
function goToJoin() {
    location.href = "joinHouse";
}
function deleteHouse() {
    let keyEntered = document.getElementById("keyDelete").value;
    let listOfKeys = JSON.parse(localStorage.getItem("keyList"));
    let a = 0;
    for(let i = 0; i < listOfKeys.length; i++){
        if(listOfKeys[i] == keyEntered){
            listOfKeys.splice(i, 1);
            a = 1;
            i = 100;
        }
    }
    if(a == 1){
        localStorage.setItem("keyList", JSON.stringify(listOfKeys));
        localStorage.removeItem(keyEntered);
        alert("House Removed");
    } 
    else {
        alert("House Not Found");
    }
}
export default function ManageHousesUI() {
    return (
        <div>
            <h1> Manage Houses </h1>
            <button class="newHouse" onClick={goToCreate}>Create House</button>
            <button class="newHouse" onClick={goToJoin}>Join House</button>
            <button class="newHouse" onClick={deleteHouse}>Delete House</button>
            <input class="deleteText" id="keyDelete" placeholder="Enter Key of House You Want To Delete"></input>
        </div>
    )
}
