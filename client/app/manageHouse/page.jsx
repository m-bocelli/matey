'use client';
import styles from './page.module.css';
import { UserAuth } from '../js/AuthContext';
import CreeateHouseForm from '../components/CreateHouseForm/CreateHouseForm';
import LeaveHouseForm from '../components/LeaveHouseForm/LeaveHouseForm';
import JoinHouseForm from '../components/JoinHouseForm/JoinHouseForm';
import InviteHouseForm from '../components/InviteHouseForm/InviteHouseForm';

export default function ManageHouse() {
    const { userData, bearerToken } = UserAuth();

    const displayForms = () => {
        if (userData && userData.house) {
            return <>
                        <LeaveHouseForm userData={userData} bearerToken={bearerToken}/>
                        <InviteHouseForm userData={userData} bearerToken={bearerToken}/>
                    </> 
        } else if (userData) {
            return <>
                        <CreeateHouseForm userData={userData}/>     
                        <JoinHouseForm userData={userData} bearerToken={bearerToken}/>
                    </>
        } else {
            return <h2>Loading</h2>
        }
    };

    return (
        <div className={styles.container}>
            <h1> Manage House 🏘 </h1>
            {displayForms()}
        </div>
    );
}
