'use client';
import styles from './page.module.css';
import { UserAuth } from '../js/AuthContext';
import CreeateHouseForm from '../components/CreateHouseForm/CreateHouseForm';
import LeaveHouseForm from '../components/LeaveHouseForm/LeaveHouseForm';
import JoinHouseForm from '../components/JoinHouseForm/JoinHouseForm';
import InviteHouseForm from '../components/InviteHouseForm/InviteHouseForm';
import Footer from '../components/Footer/Footer';

export default function ManageHouse() {
    const { userData } = UserAuth();

    const displayForms = () => {
        if (userData && userData.house) {
            return <>
                        <LeaveHouseForm userData={userData}/>
                        <InviteHouseForm userData={userData}/>
                    </> 
        } else if (userData) {
            return <>
                        <CreeateHouseForm userData={userData}/>     
                        <JoinHouseForm userData={userData}/>
                    </>
        } else {
            return <h2>Loading</h2>
        }
    };

    return (
        <div className={styles.container}>
            <h1> Manage House 🏘 </h1>
            {displayForms()}
            <Footer></Footer>
        </div>
    );
}
