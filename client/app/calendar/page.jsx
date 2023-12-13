'use client';
import styles from './page.module.css';
import { UserAuth } from '../js/AuthContext';
import { Col, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';
import { GetDaysOfTheWeek, GetCalendarMonthName } from "../components/CalendarDays/calendar.js";
import Button from '../components/Button/Button';
import CalendarDays from '../components/CalendarDays/CalendarDays';
import Footer from "../components/Footer/Footer";


export default function CalendarmUI() {
    const { user } = UserAuth();

    const [date, setDate] = useState(new Date());

    function GetCalendarYear() {
        return date.getFullYear();
    }

    function ChangeToNextWeek() {
        setDate(new Date(date.setDate(date.getDate()+7)));
    }

    function ChangeToPrevWeek() {
        setDate(new Date(date.setDate(date.getDate()-7)));
    }


    function Lorem() {
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    }

    return (
        <div className={styles.container}>
            <div className={styles.mainStuff}>
                <h1 className={styles.title}> Calendar </h1>

                <h2 className={styles.title}> {GetCalendarMonthName(date)} {GetCalendarYear()}</h2>
                <Button onClick={ChangeToNextWeek}>{`>`}</Button>
                <Button onClick={ChangeToPrevWeek}>{`<`}</Button>
            </div>
            <div className="container">
                <Row className="align-items-start">
                    <CalendarDays weekDay="Sunday" date={date}> </CalendarDays>
                    <CalendarDays weekDay="Monday" date={date}> </CalendarDays>
                    <CalendarDays weekDay="Tuesday" date={date}> </CalendarDays>
                    <CalendarDays weekDay="Wednesday" date={date}> </CalendarDays>
                    <CalendarDays weekDay="Thursday" date={date}> </CalendarDays>
                    <CalendarDays weekDay="Friday" date={date}> </CalendarDays>
                    <CalendarDays weekDay="Saturday" date={date}> </CalendarDays>
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
}
