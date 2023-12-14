
import styles from './CalendarDays.module.css';
import { Col, Row } from "react-bootstrap";
import { GetDaysOfTheWeek} from "./calendar.js";

function Lorem() {
    return "Task would be here.";
}

export default function CalendarDays({weekDay, date}) {
    return(

        <Col>
            <div>{GetDaysOfTheWeek(weekDay, date)}</div>
            <div>{Lorem()}</div>
        </Col>
    );

}