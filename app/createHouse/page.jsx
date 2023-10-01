export default function CreateHouseUI() {
    return (
        <div>
            <h1> Create House </h1>
            <form id="createHouse">
                <label>House Name:</label>
                <input type="text" id="houseName" name="houseName"></input><br></br>
                <input type="submit" value="submit" onclick="createHouse()"></input>
                {/*Submit button onclick will use a function to genrate a unique House Key*/}
            </form>
        </div>
    )
}

export function createHouse(){
    let key = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < 12; i++){
        key += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    console.log(key);
    window.open(dashbaord);
}
