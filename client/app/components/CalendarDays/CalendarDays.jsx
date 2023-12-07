
import styles from './CalendarDays.module.css';
import { Col, Row } from "react-bootstrap";
import { GetDaysOfTheWeek} from "./calendar.js";

function Lorem() {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

export default function CalendarDays({weekDay, date}) {
    return(

        <Col>
            <div>{GetDaysOfTheWeek(weekDay, date)}</div>
            <div>{Lorem()}</div>
        </Col>
    );

}