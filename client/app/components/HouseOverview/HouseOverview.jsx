import { useEffect, useState } from "react";
import Leaderboard from "../Leaderboard/Leaderboard";
import styles from './HouseOverview.module.css';

export default function HouseOverview({token, houseId}) {
    const [house, setHouse] = useState(null);
    const [mates, setMates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [points, setPoints] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:2001/houses/${houseId}`, {headers: {Authorization : `Bearer ${token}`}})
            .then((res) => res.json())
            .then((data) => {
                setHouse(data);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:2001/houses/${houseId}/mates`, {headers: {Authorization : `Bearer ${token}`}})
            .then((res) => res.json())
            .then((data) => {
                setMates(data);
            });
    }, []);

    useEffect(() => {
        if (mates.length > 0) {
            setPoints(mates.map((mate) => ({name: mate.name, points: mate.points})));
        }
    }, [mates])

    return (
        <>
            {loading ? <h2>Loading house details...</h2> :
                <div>
                    <h2>🏠 House {house.name}</h2>
                    <h3>Mates</h3>
                    <ul>
                        {mates.map((mate) => {
                            return (<div key={mate.id} className={styles.mate}>
                                        <img src={mate.icon} className={styles.mate_icon}></img>
                                        <div>{mate.name}</div>
                                    </div>)
                        })}
                    </ul>
                    <Leaderboard data={points} />
                </div>
            }
        </>
    );
}