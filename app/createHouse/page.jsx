export default function CreateHouseUI() {
    return (
        <div>
            <h1> Create House </h1>
            <form id="createHouse">
                <label>House Name:</label>
                <input type="text" name="houseName"></input><br></br>
                <label>House Maties:</label>
                <input type="text" name="houseMate1"></input><br></br>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}
