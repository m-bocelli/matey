'use client';
import styles from './page.module.css';
import { UserAuth } from '../js/AuthContext';
import { Col, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';
import { GetDaysOfTheWeek } from "./calendar.js";
import Button from '../components/Button/Button';


export default function CalendarmUI() {
    const { user } = UserAuth();

    const [date, setDate] = useState(new Date());

    function ChangeToNextWeek() {
        /*
        if (!(date instanceof Date)) {
            console.error("date is not a valid Date object");
            return;
        }
        */
        setDate(new Date(date.setDate(date.getDate()+7)));
       // console.log(date);
    }

    function ChangeToPrevWeek() {
        /*
        if (!(date instanceof Date)) {
            console.error("date is not a valid Date object");
            return;
        }
        */
        setDate(new Date(date.setDate(date.getDate()-7)));
        //console.log(date);
    }


    function Lorem() {
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}> Calendar </h1>

            <h2 className={styles.title}> December 2023</h2>
            <Button onClick={ChangeToNextWeek}>{`>`}</Button>
            <Button onClick={ChangeToPrevWeek}>{`<`}</Button>

            <div className="container">
                <Row className="align-items-start">
                    <Col>
                        Sunday
                        <div>{GetDaysOfTheWeek("Sunday", date)}</div>
                        <div>{Lorem()}</div>
                    </Col>
                    <Col>
                        Monday
                        <div>{GetDaysOfTheWeek("Monday", date)}</div>
                        <div>{Lorem()}</div>
                    </Col>
                    <Col>
                        Tuesday
                        <div>{GetDaysOfTheWeek("Tuesday", date)}</div>
                        <div>{Lorem()}</div>
                    </Col>
                    <Col>
                        Wednesday
                        <div>{GetDaysOfTheWeek("Wednesday", date)}</div>
                        <div>{Lorem()}</div>
                    </Col>
                    <Col>
                        Thursday
                        <div>{GetDaysOfTheWeek("Thursday", date)}</div>
                        <div>{Lorem()}</div>
                    </Col>
                    <Col>
                        Friday
                        <div>{GetDaysOfTheWeek("Friday", date)}</div>
                        <div>{Lorem()}</div>
                    </Col>
                    <Col>
                        Saturday
                        <div>{GetDaysOfTheWeek("Saturday", date)}</div>
                        <div>{Lorem()}</div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
