import { useEffect, useState } from "react";
import Leaderboard from "../Leaderboard/Leaderboard";

export default function HouseOverview({token, houseId}) {
    const [house, setHouse] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:2001/houses/${houseId}`, {headers: {Authorization : `Bearer ${token}`}})
            .then((res) => res.json())
            .then((data) => setHouse(data));
    }, [house]);

    const DUMMY_POINTS = [
        { name: 'bruh', points: 200 },
        { name: 'Sebastien', points: 800 },
        { name: 'Ariel', points: 600 },
    ];

    return (
        <div>
                <h2>🏠 House {house.name}</h2>
                <h3>Mates</h3>
                <ul>
                    <li>mates would be mapped here</li>
                </ul>
                <Leaderboard data={DUMMY_POINTS} />
        </div>
    );
}