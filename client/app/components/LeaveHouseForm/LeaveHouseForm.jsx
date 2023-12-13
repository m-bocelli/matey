import { Alert, AlertHeading, AlertLink } from "react-bootstrap";
import Button from "../Button/Button";
import { useState } from "react";
import styles from './LeaveHouseForm.module.css';

export default function LeaveHouseForm({userData, bearerToken}) {
    const [showAlert, setShowAlert] = useState(false);

    const leaveHouse =  () => {
        fetch(`http://localhost:2001/houses?userId=${userData.id}&houseId=${userData.house}`, {method: "DELETE",
        headers: {Authorization : `Bearer ${bearerToken}`}})
        .then(() => console.log('Left house successfully.'))
        .catch((err) => console.err('Failed to leave house.', err));
        window.location.href = '/manageHouse';
    };

    return (
        <div className={styles.container}>
            { showAlert ? 
            <Alert>
                <AlertHeading>Are you sure?</AlertHeading>
                <div className={styles.alert_buttons}>
                    <AlertLink type="submit" onClick={leaveHouse}>yes</AlertLink>
                    <AlertLink onClick={()=>setShowAlert(false)} >no</AlertLink>
                </div>
            </Alert>:
            <Button onClick={()=>setShowAlert(!showAlert)}>Leave House</Button>}
        </div>
    )
}