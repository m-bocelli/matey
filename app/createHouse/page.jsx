export default function CreateHouseUI() {
    return (
        <div>
            <h1> Create House </h1>
            <form id="createHouse">
                <label>House Name:</label>
                <input type="text" name="houseName"></input><br></br>
                <input type="submit" value="submit"></input>
                {/*Submit button onclick will use a function to genrate a unique House Key*/}
            </form>
        </div>
    )
}
