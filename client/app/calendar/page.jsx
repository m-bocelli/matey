'use client';
import styles from './page.module.css';
import { UserAuth } from '../js/AuthContext';
import { Col, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';
import { GetDaysOfTheWeek, GetCalendarMonthName } from "../components/CalendarDays/calendar.js";
import Button from '../components/Button/Button';
import CalendarDays from '../components/CalendarDays/CalendarDays';
import CreateTask from "../components/TaskForm/CreateTask";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


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
        <>
        <button className={styles.leftarrow} onClick={ChangeToPrevWeek}>
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
        <button className={styles.rightarrow} onClick={ChangeToNextWeek}>
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>
        <div className={styles.container}>
            <h2 className={styles.title}> {GetCalendarMonthName(date)} {GetCalendarYear()}</h2>

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
        </div><div>
                <CreateTask></CreateTask>
            </div></>
    );
}
