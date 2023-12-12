import { Alert, AlertHeading, AlertLink } from "react-bootstrap";
import Button from "../Button/Button";
import { useState } from "react";
import styles from './LeaveHouseForm.module.css';

export default function LeaveHouseForm({userData}) {
    const [showAlert, setShowAlert] = useState(false);

    const leaveHouse = async () => {
        const res = await fetch(`http://localhost:2001/leaveHouse?userId=${userData.id}&houseId=${userData.house}`, {method: "DELETE"});
        const data = await res.json();
        alert(JSON.stringify(data));
    };

    return (
        <div className={styles.container}>
            { showAlert ? 
            <Alert>
                <AlertHeading>Are you sure?</AlertHeading>
                <div className={styles.alert_buttons}>
                    <AlertLink onClick={leaveHouse}>yes</AlertLink>
                    <AlertLink onClick={()=>setShowAlert(false)}>no</AlertLink>
                </div>
            </Alert>:
            <Button onClick={()=>setShowAlert(!showAlert)}>Leave House</Button>}
        </div>
    )
}