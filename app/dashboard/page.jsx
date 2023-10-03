'use client';
function displayHouse() {
    if (typeof window == "undefined"){
        return <div></div>;
    }
    else if(localStorage.getItem("keyList") != null){
        let arrayOfKeys = JSON.parse(localStorage.getItem("keyList"));
        let house = JSON.parse(localStorage.getItem(arrayOfKeys[0]));
        let houseName = house.houseName;
        let houseMates = house.houseMates;
        let houseMembers = "";
        for(let i = 0; i < houseMates.length; i++) {
            if(i == houseMates.length - 1){
                houseMembers += houseMates[i];
            }
            else {
                houseMembers += houseMates[i] + ", ";
            }
        }
        return (
            <div>
                <p>House Name: {houseName}</p>
                <p>House Members: {houseMembers}</p>
            </div>
        );
    }
    else{
        return <div></div>;
    }
}

export default function DashboardUI() {
    return (
        <div>
            <section> Dashboard </section>
            <div id="houseInfo">{displayHouse()}</div>
        </div>
    )
}
