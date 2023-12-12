'use client';
import styles from './page.module.css';
import { UserAuth } from '../js/AuthContext';
import { useEffect, useState } from 'react';
import Footer from "../components/Footer/Footer";
import CreeateHouseForm from '../components/CreateHouseForm/CreateHouseForm';
import LeaveHouseForm from '../components/'

export default function ManageHouse() {
    const { userData } = UserAuth();

    const displayForms = () => {
        return (
            userData.house ? 
                <><LeaveHouseForm/><InviteHouseForm/></> : 
                <>
                    <CreeateHouseForm/>     
                    <JoinHouseForm/>
                </>)
    };

    return (
        <div className={styles.container}>
            <h1> Manage Houses 🏘 </h1>
            <Footer></Footer>
        </div>
    );
}
