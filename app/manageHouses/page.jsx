import "./manageStyles.css";
export default function ManageHousesUI() {
    return (
        <div>
            <h1> Manage Houses </h1>
            <button class="newHouse" onclick="window.open(createHouse)">Create House</button>
            <button class="newHouse" onclick="window.open(joinHouse)">Join House</button>
        </div>
    )
}
